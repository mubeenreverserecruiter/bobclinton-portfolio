
export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();

    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const project = String(data.project || "").trim();
    const details = String(data.details || "").trim();

    if (!name || !email || !project || !details) {
      return Response.json(
        { success: false, message: "Please complete every field." },
        { status: 400 }
      );
    }

    if (
      name.length > 150 ||
      email.length > 254 ||
      project.length > 150 ||
      details.length > 10000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return Response.json(
        { success: false, message: "Please check your details and try again." },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": env.BREVO_API_KEY,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        sender: {
          name: "Bobclinton Hardy Website",
          email: "mubeenreverserecruiter@gmail.com"
        },
        to: [
          {
            email: "bobclintonh@gmail.com",
            name: "Bobclinton Hardy"
          }
        ],
        replyTo: {
          email: email,
          name: name
        },
        subject: `New website enquiry: ${project}`,
        textContent:
          `New enquiry from Bobclinton's portfolio website\n\n` +
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Project type: ${project}\n\n` +
          `Project details:\n${details}`
      })
    });

    if (!response.ok) {
      return Response.json(
        {
          success: false,
          message: "We couldn't send your message right now. Please try again later."
        },
        { status: 502 }
      );
    }

    return Response.json({
      success: true,
      message: "Thank you! Your enquiry has been sent successfully."
    });
  } catch {
    return Response.json(
      {
        success: false,
        message: "Something went wrong. Please try again later."
      },
      { status: 500 }
    );
  }
}
