'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { createTactic } from './actions'
import { useState } from 'react'
import { Pitch } from './Pitch'
import { formations } from './_data/formation'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export function TacticForm() {
  const [formationName, setFormationName] = useState(formations[0].name)
  const { pending } = useFormStatus()

  async function onCreate(formData: FormData) {
    const res = await createTactic(formData)

    console.log(res)
  }

  return (
    <section>
      <form
        action={onCreate}
        className="flex flex-col gap-2 justify-start text-left border-2 border-slate-700 rounded-lg p-4"
      >
        <Tabs defaultValue="general">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="attacking">Attacking</TabsTrigger>
            <TabsTrigger value="defending">Defending</TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <Label htmlFor="name">Name</Label>
            <Input name="name" placeholder="Tactic name" />
            <Label htmlFor="formation">Formation</Label>

            <Select
              onValueChange={(val) => setFormationName(val)}
              name="formation"
              defaultValue="442"
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="442">442</SelectItem>
                <SelectItem value="433">433</SelectItem>
              </SelectContent>
            </Select>
            <Label htmlFor="width">Width</Label>
            <Input name="width" type="number" placeholder="8" />
          </TabsContent>
          <TabsContent value="attacking">
            <Label htmlFor="width">Width</Label>
            <Input name="width" type="number" placeholder="8" />
            <Label htmlFor="depth">Depth</Label>
            <Input name="depth" type="number" placeholder="8" />
          </TabsContent>
          <TabsContent value="defending">
            <Label htmlFor="width">Width</Label>
            <Input name="width" type="number" placeholder="8" />
            <Label htmlFor="depth">Depth</Label>
            <Input name="depth" type="number" placeholder="8" />
          </TabsContent>
        </Tabs>
        <Button disabled={pending} type="submit">
          {pending ? 'Loading...' : 'Create'}
        </Button>
      </form>
      <Pitch
        formation={
          formations.find((f) => f.name === formationName) ?? formations[0]
        }
      />
    </section>
  )
}
