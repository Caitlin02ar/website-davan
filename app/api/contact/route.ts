import nodemailer from "nodemailer";

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  businessname: "Business Name",
  email: "Email",
  "what'sthebiggestinyourrightnow?": "Biggest Challenge Right Now",
  reason: "Reason for Inquiry",
};

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function prettifyKey(key: string): string {
  if (FIELD_LABELS[key]) return FIELD_LABELS[key];
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\?$/, "")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const rows = Object.entries(body)
      .map(([key, value]) => {
        const label = escapeHtml(prettifyKey(key));
        const val = escapeHtml(value) || "-";
        return `
          <p style="margin:0 0 14px;font-size:15px;line-height:1.5;color:#333;">
            <span style="display:block;font-size:13px;color:#888;margin-bottom:2px;">${label}</span>
            ${val}
          </p>`;
      })
      .join("");

    const senderEmail =
      typeof body.email === "string" ? body.email : undefined;

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;margin:0 auto;padding:24px;">
        <h2 style="margin:0 0 4px;font-size:18px;color:#111;font-weight:600;">New Contact Inquiry</h2>
        <p style="margin:0 0 20px;font-size:13px;color:#999;">Submitted via DAVAN Website</p>
        <hr style="border:none;border-top:1px solid #eee;margin:0 0 20px;" />
        ${rows}
      </div>
    `;

    await transporter.sendMail({
      from: `"DAVAN Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: senderEmail,
      subject: "New Contact Form Inquiry",
      html,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}