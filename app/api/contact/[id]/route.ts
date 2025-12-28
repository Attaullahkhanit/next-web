import { type NextRequest, NextResponse } from "next/server"
import mysql from "mysql2/promise"

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "portfolio_db",
}

export async function DELETE(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> } // Change to Promise
) {
  try {
    const { id } = await params; // Must await params here
    
    // Auth check
    const cookieHeader = request.headers.get("cookie")
    if (!cookieHeader?.includes("admin_session")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const connection = await mysql.createConnection(dbConfig)
    try {
      await connection.execute("DELETE FROM contact_messages WHERE id = ?", [id])
      return NextResponse.json({ success: true })
    } finally {
      await connection.end()
    }
  } catch (error) {
    console.error("Delete error:", error)
    return NextResponse.json({ error: "Server Error" }, { status: 500 })
  }
}
