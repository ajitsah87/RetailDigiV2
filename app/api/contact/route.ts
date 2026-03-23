import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, firstName, lastName, phoneCode, phoneNumber, companyName, serviceRequired } = body;

    // Validate required fields
    if (!email || !firstName || !lastName || !phoneNumber || !companyName || !serviceRequired) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create transporter — configure with your SMTP credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,       // e.g. sahajit119@gmail.com
        pass: process.env.SMTP_PASSWORD,     // Gmail App Password (not your login password)
      },
    });

    // Email to admin / business owner
    const adminMailOptions = {
      from: `"RetailDigi Website" <${process.env.SMTP_EMAIL}>`,
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_EMAIL,
      subject: `New Lead: ${firstName} ${lastName} — ${companyName}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #2563EB, #1d4ed8); padding: 32px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🚀 New Lead from RetailDigi</h1>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 16px; font-weight: 700; color: #2563EB; border-bottom: 1px solid #e2e8f0; width: 40%;">Name</td>
                <td style="padding: 12px 16px; color: #1a1a2e; border-bottom: 1px solid #e2e8f0;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-weight: 700; color: #2563EB; border-bottom: 1px solid #e2e8f0;">Email</td>
                <td style="padding: 12px 16px; color: #1a1a2e; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #2563EB;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-weight: 700; color: #2563EB; border-bottom: 1px solid #e2e8f0;">Phone</td>
                <td style="padding: 12px 16px; color: #1a1a2e; border-bottom: 1px solid #e2e8f0;">${phoneCode} ${phoneNumber}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-weight: 700; color: #2563EB; border-bottom: 1px solid #e2e8f0;">Company</td>
                <td style="padding: 12px 16px; color: #1a1a2e; border-bottom: 1px solid #e2e8f0;">${companyName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-weight: 700; color: #2563EB;">Service Required</td>
                <td style="padding: 12px 16px; color: #1a1a2e;">${serviceRequired}</td>
              </tr>
            </table>
          </div>
          <div style="background: #f1f5f9; padding: 16px 32px; text-align: center; font-size: 13px; color: #64748b;">
            Sent from RetailDigi Website Contact Form
          </div>
        </div>
      `,
    };

    // Confirmation email to the user
    const userMailOptions = {
      from: `"RetailDigi" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: "Thanks for reaching out to RetailDigi! 🎯",
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #2563EB, #1d4ed8); padding: 32px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">RetailDigi</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">Builders of Category Leaders</p>
          </div>
          <div style="padding: 32px;">
            <h2 style="color: #1a1a2e; margin: 0 0 16px;">Hi ${firstName},</h2>
            <p style="color: #4a4a68; line-height: 1.7; margin: 0 0 16px;">
              Thank you for reaching out! We've received your inquiry and our team will get back to you within 24 hours.
            </p>
            <p style="color: #4a4a68; line-height: 1.7; margin: 0 0 24px;">
              We're excited to learn more about <strong>${companyName}</strong> and how we can help you scale with our ${serviceRequired} services.
            </p>
            <div style="text-align: center;">
              <a href="https://retaildigi.com" style="display: inline-block; padding: 14px 32px; background: #FF8C00; color: white; text-decoration: none; border-radius: 50px; font-weight: 700; font-size: 16px;">Visit RetailDigi</a>
            </div>
          </div>
          <div style="background: #f1f5f9; padding: 16px 32px; text-align: center; font-size: 13px; color: #64748b;">
            © RetailDigi — Scaling brands with Attention, Ads & Analytics
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
