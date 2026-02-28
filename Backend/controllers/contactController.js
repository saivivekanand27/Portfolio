import Contact from "../models/contact.js";
import nodemailer from "nodemailer";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1️⃣ Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // 2️⃣ Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ===========================
    // 📩 EMAIL TO YOU
    // ===========================
    const adminMail = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🚀 New Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px;">
          <h2 style="color:#2563eb;">New Portfolio Message</h2>
          <hr/>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background:#f3f4f6; padding:15px; border-radius:8px;">
            ${message}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(adminMail);

    // ===========================
    // 📬 AUTO REPLY TO USER
    // ===========================
    const userMail = {
      from: `"Vivek Portfolio" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank You for Contacting Me 🙌",
      html: `
        <div style="font-family: Arial, sans-serif; padding:25px; background:#f9fafb;">
          <div style="max-width:600px; margin:auto; background:white; padding:20px; border-radius:10px;">
            
            <h2 style="color:#2563eb;">Hi ${name} 👋</h2>
            
            <p>Thank you for reaching out through my portfolio website.</p>
            
            <p>I have received your message and will get back to you as soon as possible.</p>
            
            <hr/>
            
            <p style="font-size:14px; color:gray;">
              This is an automated response confirming your message was successfully received.
            </p>

            <br/>
            <p>Best Regards,</p>
            <strong>Vivek</strong>
            <br/>
            Full Stack Developer
          </div>
        </div>
      `,
    };

    await transporter.sendMail(userMail);

    res.status(200).json({ success: true });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false });
  }
};