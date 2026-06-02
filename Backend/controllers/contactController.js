import Contact from "../models/contact.js";
import { Resend } from "resend";
import fetch from "node-fetch";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("New contact form submission");

    // ===========================
    // SAVE TO MONGODB
    // ===========================
    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();
    console.log("Contact saved to MongoDB ✅");

    // ===========================
    // AI RESPONSE
    // ===========================
    let generatedReply =
      "Thank you for reaching out. I will get back to you soon.";

    try {
      const aiResponse = await fetch(
        "https://api.sambanova.ai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.SAMBANOVA_API_KEY}`,
          },
          body: JSON.stringify({
            model: "Meta-Llama-3-8B-Instruct",
            messages: [
              {
                role: "system",
                content:
                  "You are Vivek, a professional Full Stack Developer replying to portfolio messages politely and professionally.",
              },
              {
                role: "user",
                content: `Reply to this message professionally:

Name: ${name}
Message: ${message}`,
              },
            ],
            temperature: 0.7,
          }),
        }
      );

      const aiData = await aiResponse.json();

      generatedReply =
        aiData?.choices?.[0]?.message?.content ||
        generatedReply;

      console.log("SambaNova Response Received ✅");
    } catch (aiError) {
      console.error("SambaNova Error:", aiError);
    }

    // ===========================
    // EMAIL TO YOU
    // ===========================
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "namsanivivekanand@gmail.com",
      subject: `🚀 New Portfolio Message from ${name}`,
      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    console.log("Admin Email Sent ✅");

    // ===========================
    // AUTO REPLY TO USER
    // ===========================
    await resend.emails.send({
      from: "Vivek Portfolio <onboarding@resend.dev>",
      to: email,
      subject: "Thank You for Contacting Me 🙌",
      html: `
        <div style="font-family: Arial; padding:20px;">
          <h2>Hi ${name} 👋</h2>

          <p>${generatedReply}</p>

          <br/>

          <p>Best Regards,</p>

          <strong>Vivek Namsani</strong>

          <br/>

          Full Stack Developer
        </div>
      `,
    });

    console.log("Auto Reply Sent ✅");

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("CONTACT FORM ERROR:");
    console.error(error);

    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};