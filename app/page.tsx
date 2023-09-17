import { Icon } from '@/components/ui/icon'
import { sql } from '@vercel/postgres'
import Link from 'next/link'

export default async function Home() {
  const tactics = await sql`SELECT * FROM tactics;`

  return (
    <main className="flex flex-col min-h-screen justify-between p-4">
      <div className="flex flex-col gap-8 justify-between">
        <section className="flex flex-col gap-4">
          {tactics.rows?.map((t) => (
            <Link
              key={t.id}
              className="flex justify-between p-2 border-b-2"
              href={`/tactics/${t.uuid}`}
            >
              <div className="flex flex-col">
                <h2>{t.name}</h2>
                <p>{t.formation}</p>
              </div>
              <Icon name="chev-right" tint="white" size={24} />
            </Link>
          ))}
        </section>
      </div>
    </main>
  )
}
