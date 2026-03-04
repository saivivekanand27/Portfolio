import Contact from "../models/contact.js";
import nodemailer from "nodemailer";
import fetch from "node-fetch"; // install if not installed

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1️⃣ Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // ===========================
    // 🤖 GENERATE AI RESPONSE
    // ===========================
    const aiResponse = await fetch("https://api.sambanova.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.SAMBANOVA_API_KEY}`,
      },
      body: JSON.stringify({
        model: "Meta-Llama-3-8B-Instruct",
        messages: [
          {
            role: "system",
            content: "You are Vivek, a professional Full Stack Developer replying to portfolio messages politely and professionally."
          },
          {
            role: "user",
            content: `Reply to this message professionally:\n\nName: ${name}\nMessage: ${message}`
          }
        ],
        temperature: 0.7,
      }),
    });

    const aiData = await aiResponse.json();

    const generatedReply =
      aiData?.choices?.[0]?.message?.content ||
      "Thank you for reaching out. I will get back to you soon.";

    // ===========================
    // 📧 EMAIL CONFIG
    // ===========================
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 📩 EMAIL TO YOU
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

    // 📬 AI AUTO REPLY TO USER
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
          <strong>Vivek</strong>
          <br/>
          Full Stack Developer
        </div>
      `,
    });

    res.status(200).json({ success: true });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false });
  }
};