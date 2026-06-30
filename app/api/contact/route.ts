import nodemailer from "nodemailer";

export async function POST(
  req: Request
) {

  try {

    const body =
      await req.json();

    const transporter =
      nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,

        auth: {
          user:
            process.env.SMTP_USER,

          pass:
            process.env.SMTP_PASS,
        },
      });

    await transporter.sendMail({
      from: `"DAVAN Website" <${process.env.SMTP_USER}>`,

      to:
        process.env.CONTACT_EMAIL,

      subject:
        "New Contact Form Inquiry",

      html: `
        <div style="font-family: Arial, sans-serif;">

          <h2>
            New Contact Inquiry
          </h2>

          ${Object.entries(body)
            .map(
              ([key, value]) => `
                <p>
                  <strong>
                    ${key}:
                  </strong>

                  ${value}
                </p>
              `
            )
            .join("")}

        </div>
      `,
    });

    return Response.json({
      success: true,
    });

  } catch (error) {

    console.error(
      "EMAIL ERROR:",
      error
    );

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );

  }

}