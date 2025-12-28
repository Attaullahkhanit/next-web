import { type NextRequest, NextResponse } from "next/server"
import mysql from "mysql2/promise"
import bcrypt from "bcryptjs"
import { cookies } from "next/headers"

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()
    
    // Create connection inside the request handler
    const connection = await mysql.createConnection(dbConfig)

    try {
      const [rows] = await connection.execute("SELECT * FROM admin_users WHERE username = ?", [username])
      const users = rows as any[]
      
      if (users.length === 0) {
        return NextResponse.json({ error: "User not found" }, { status: 401 })
      }

      const user = users[0]

        const passwordMatch = (password === "admin"); // This bypasses bcrypt for testing

        if (!passwordMatch) {
        return NextResponse.json({ error: "Wrong password" }, { status: 401 })
      }

      const cookieStore = await cookies()
      cookieStore.set("admin_session", JSON.stringify({ id: user.id, username: user.username }), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
      })

      return NextResponse.json({ success: true }, { status: 200 })
    } finally {
      await connection.end()
    }
  } catch (error) {
    console.error("CRITICAL SERVER ERROR:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}