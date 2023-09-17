import { sql } from '@vercel/postgres'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: { id: string } }) {
  const data = await sql`SELECT * FROM tactics WHERE uuid = ${params.id};`

  if (!data?.rows[0]) {
    return notFound()
  }

  const tactic = data.rows[0]

  return (
    <main className="flex flex-col min-h-screen justify-between p-4">
      <h2>{tactic.name}</h2>
    </main>
  )
}
