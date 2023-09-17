import { sql } from '@vercel/postgres'

export default async function Home() {
  const tactics = await sql`SELECT * FROM tactics;`

  return (
    <main className="flex flex-col min-h-screen justify-between p-4">
      <div className="flex flex-col gap-8 justify-between">
        <section className="flex flex-col gap-4">
          {tactics.rows?.map((t) => (
            <div key={t.id} className="flex flex-col p-2 border-b-2">
              <h2>{t.name}</h2>
              <p>{t.formation}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
