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
import { SheetClose } from '@/components/ui/sheet'
import { Slider } from '@/components/ui/slider'

export function TacticForm() {
  const [formationName, setFormationName] = useState(formations[0].name)
  const { pending } = useFormStatus()

  async function onCreate(formData: FormData) {
    const res = await createTactic(formData)
  }

  return (
    <section className="flex flex-col justify-between gap-4 align-middle h-full">
      <form
        action={onCreate}
        className="flex flex-col gap-4 justify-start text-left border-2 border-slate-700 rounded-lg p-4"
      >
        <Tabs defaultValue="general">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="attacking">Attacking</TabsTrigger>
            <TabsTrigger value="defending">Defending</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="flex flex-col gap-2">
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
                {formations.map((formation) => (
                  <SelectItem key={formation.name} value={formation.name}>
                    {formation.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Label htmlFor="width">Width</Label>
            <Input name="width" type="number" placeholder="8" />
          </TabsContent>
          <TabsContent value="attacking" className="flex flex-col gap-2">
            <Label htmlFor="width">Width</Label>
            <Slider name="width" defaultValue={[5]} max={10} step={1} />
            <Label htmlFor="depth">Depth</Label>
            <Slider name="depth" defaultValue={[5]} max={10} step={1} />
            <Label htmlFor="playerInBox">Players in box</Label>
            <Slider name="playersInBox" defaultValue={[5]} max={10} step={1} />
            <Label htmlFor="corners">Corners</Label>
            <Slider name="corners" defaultValue={[5]} max={10} step={1} />
            <Label htmlFor="freekicks">Free kicks</Label>
            <Slider name="freekicks" defaultValue={[5]} max={10} step={1} />
          </TabsContent>
          <TabsContent value="defending" className="flex flex-col gap-2">
            <Label htmlFor="width">Width</Label>
            <Slider name="width" defaultValue={[5]} max={10} step={1} />
            <Label htmlFor="depth">Depth</Label>
            <Slider name="depth" defaultValue={[5]} max={10} step={1} />
          </TabsContent>
        </Tabs>
        <SheetClose asChild>
          <Button disabled={pending} type="submit" className="mt-auto">
            {pending ? 'Loading...' : 'Create'}
          </Button>
        </SheetClose>
      </form>
      <Pitch
        formation={
          formations.find((f) => f.name === formationName) ?? formations[0]
        }
      />
    </section>
  )
}
