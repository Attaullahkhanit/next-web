import { type NextRequest, NextResponse } from "next/server"
import mysql from "mysql2/promise"

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "portfolio_db",
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const connection = await mysql.createConnection(dbConfig)

    try {
      await connection.execute(
        "INSERT INTO contact_messages (name, email, subject, message, created_at) VALUES (?, ?, ?, ?, NOW())",
        [name, email, subject, message],
      )

      return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 201 })
    } finally {
      await connection.end()
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const cookieHeader = request.headers.get("cookie")
    if (!cookieHeader?.includes("admin_session")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const connection = await mysql.createConnection(dbConfig)

    try {
      const [messages] = await connection.execute("SELECT * FROM contact_messages ORDER BY created_at DESC")

      return NextResponse.json(messages, { status: 200 })
    } finally {
      await connection.end()
    }
  } catch (error) {
    console.error("Get messages error:", error)
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 })
  }
}
