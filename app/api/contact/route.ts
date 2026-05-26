import { Resend } from "resend";




export async function POST(req: Request) {

  const resend = new Resend(
    process.env.RESEND_API_KEY
  );

  const body = await req.json();

  try {
    const { name, email, message } = await req.json();

    // Mail to you
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["indranshpratap@gmail.com"],
      replyTo: email,
      subject: `New message from ${name}`,

      html: `
      <h2>Portfolio Contact</h2>

      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b> ${message}</p>
      `
    });

    // Auto mail to recruiter
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [email],

      subject: "Thanks for contacting me",

      html: `
      <h2>Hello ${name}</h2>

      <p>Thanks for reaching out.</p>

      <p>I received your message and will respond soon.</p>

      <br/>

      <p>— Indransh Pratap</p>
      `
    });

    return Response.json({
      success: true
    });

  } catch (err) {
    console.log(err);

    return Response.json({
      success: false
    });
  }
}