import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { name, business, email, service, timeline, message } =
    await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>", // TODO: update to your domain email once live
    to: "orudy01@gmail.com",
    replyTo: email,
    subject: `New inquiry from ${name}${business ? ` — ${business}` : ""}`,
    text: [
      `Name: ${name}`,
      business ? `Business / Project: ${business}` : null,
      `Email: ${email}`,
      service ? `Service: ${service}` : null,
      timeline ? `Timeline: ${timeline}` : null,
      ``,
      `Message:`,
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
