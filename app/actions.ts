'use server'

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function createTactic(formData: FormData) {
  const name = formData.get('name')?.toString() ?? 'Tactic';
  const formation = formData.get('formation')?.toString() ?? '433';

  console.log('name', name)
  console.log('formation', formation)

  try {
    if (!name || !formation) throw new Error('Name and formation names required');
    await sql`INSERT INTO tactics (name, formation) VALUES (${name}, ${formation});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  revalidatePath('/')

  return {
    ok: true,
  }
}
