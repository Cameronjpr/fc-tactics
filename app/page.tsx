import { Icon } from '@/components/ui/icon'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger } from '@/components/ui/select'
import { sql } from '@vercel/postgres'
import Link from 'next/link'
import { TacticsList } from './TacticsList'

export default async function Home() {
  const tactics = await sql`SELECT * FROM tactics;`

  return (
    <main className="flex flex-col min-h-screen justify-between p-4">
      <TacticsList tactics={tactics as any} />
    </main>
  )
}
