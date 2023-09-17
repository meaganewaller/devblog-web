import { checkName, checkMessage } from "@/utils"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const POST = async (request: NextRequest) => {
  try {
    const { name, message } = (await request.json())

    if (!(checkName(name) && checkMessage(message))) {
      return NextResponse.json({ message: "Message or name not valid", success: false })
    }

    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/guestbook_entries.json`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        message
      })
    })

    return NextResponse.json({ message: "Message sent", success: true })
  } catch (error) {
    return NextResponse.json({ message: error, success: false })
  }
}
