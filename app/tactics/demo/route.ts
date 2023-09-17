import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  const formation = searchParams.get('formation');
 
  try {
    if (!name || !formation) throw new Error('Pet and owner names required');
    await sql`INSERT INTO tactics (name, formation) VALUES (${name}, ${formation});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const tactics = await sql`SELECT * FROM tactics;`;
  return NextResponse.json({ tactics }, { status: 200 });
}