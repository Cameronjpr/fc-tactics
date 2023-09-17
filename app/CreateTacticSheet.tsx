'use client'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { TacticForm } from './TacticForm'

export function CreateTacticSheet() {
  return (
    <Sheet defaultOpen={false}>
      <SheetTrigger asChild>
        <Button>Create</Button>
      </SheetTrigger>
      <SheetContent className="h-full">
        <SheetHeader className="h-full">
          <SheetTitle>Create a new tactic</SheetTitle>
          <TacticForm />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
