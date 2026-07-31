import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, honeypot } = body;

    // 1. Honeypot check (anti-spam bot defense)
    if (honeypot) {
      return NextResponse.json(
        { error: "Spam detected." },
        { status: 400 }
      );
    }

    // 2. Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 3. API Key check
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return NextResponse.json(
        { error: "Mail server configuration error. Please try again later." },
        { status: 500 }
      );
    }

    // 4. Send Email via Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Resend free tier onboarding email sender
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "dilshan1999madura@gmail.com",
        subject: `New Message from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px; background-color: #fafafa;">
            <h2 style="color: #111; border-bottom: 1px solid #eaeaea; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 100px;">Sender Name:</td>
                <td style="padding: 8px 0; color: #111;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 8px 0; color: #111;"><a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a></td>
              </tr>
            </table>
            
            <div style="background-color: #ffffff; border: 1px solid #eaeaea; border-radius: 6px; padding: 15px; margin-top: 10px;">
              <p style="margin: 0; font-weight: bold; color: #555; margin-bottom: 8px;">Message:</p>
              <p style="margin: 0; color: #111; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="font-size: 11px; color: #888; margin-top: 25px; text-align: center; border-top: 1px solid #eaeaea; padding-top: 15px;">
              Sent from my Portfolio site.
            </p>
          </div>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      console.error("Resend API Error:", errorData);
      return NextResponse.json(
        { error: "Failed to dispatch email via Resend mail system." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact Form Server Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
