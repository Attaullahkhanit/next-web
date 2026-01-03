import { NextResponse } from 'next/server';
import pool from '@/lib/db'; // Adjust the path to your file
import { RowDataPacket } from 'mysql2';

export async function GET() {
  try {
    // You can define an interface for your rows for full type safety
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM projects');
    
    return NextResponse.json(rows);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}