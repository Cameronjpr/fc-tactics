'use server'

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function createTactic(formData: FormData) {
  const name = formData.get('name')?.toString() ?? 'Tactic';
  const formation = formData.get('formation')?.toString() ?? '433';

  try {
    if (!name || !formation) throw new Error('Name and formation names required');
    await sql`INSERT INTO tactics (uuid, name, formation) VALUES (${crypto.randomUUID()}, ${name}, ${formation});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  revalidatePath('/')

  return {
    ok: true,
  }
}
