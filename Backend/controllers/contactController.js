import Contact from "../models/contact.js";
import nodemailer from "nodemailer";
import fetch from "node-fetch";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("New contact form submission");
    console.log("EMAIL_USER exists:", !!process.env.EMAIL_USER);
    console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);
    console.log(
      "SAMBANOVA_API_KEY exists:",
      !!process.env.SAMBANOVA_API_KEY
    );

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

      console.log("SambaNova Response Received ✅");

      generatedReply =
        aiData?.choices?.[0]?.message?.content ||
        generatedReply;
    } catch (aiError) {
      console.error("SambaNova Error:", aiError);
    }

    // ===========================
    // EMAIL CONFIG
    // ===========================
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();
    console.log("SMTP Connected ✅");

    // ===========================
    // EMAIL TO YOU
    // ===========================
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🚀 New Message from ${name}`,
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
    // AUTO REPLY
    // ===========================
    await transporter.sendMail({
      from: `"Vivek Portfolio" <${process.env.EMAIL_USER}>`,
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