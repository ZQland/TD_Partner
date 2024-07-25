// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import pool from '../../../../lib/db';

export async function GET(request: NextRequest) {
  try {
    const client = await pool.connect();
    const result = await client.query('select * FROM Users;');
    client.release();
    return NextResponse.json(result.rows);
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
