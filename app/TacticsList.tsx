'use client'

import { Icon } from '@/components/ui/icon'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useState } from 'react'

export function TacticsList({
  tactics,
}: {
  tactics: {
    rows: {
      id: number
      uuid: string
      name: string
      formation: string
    }[]
  }
}) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="flex flex-col gap-8 justify-between py-2">
      <Input
        placeholder="Search"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <section className="flex flex-col gap-4">
        {tactics.rows
          ?.filter((t) => t.name.includes(searchQuery))
          .map((t) => (
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
  )
}
