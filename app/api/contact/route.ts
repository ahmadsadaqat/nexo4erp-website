export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !message.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return Response.json({ error: "Please provide a valid name, email, and message." }, { status: 400 })
    }

    // In a real app, send an email or store the message.
    // eslint-disable-next-line no-console
    console.log("[contact] New message:", { name, email, message })

    return Response.json({ ok: true })
  } catch (error) {
    return Response.json({ error: "Invalid request." }, { status: 400 })
  }
}
