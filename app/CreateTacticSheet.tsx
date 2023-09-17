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
import { Icon } from '@/components/ui/icon'

export function CreateTacticSheet() {
  return (
    <Sheet defaultOpen={false}>
      <SheetTrigger asChild>
        <Button>
          <div className="flex items-center gap-2">
            Create <Icon name="plus" />
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent className="h-full w-screen sm:w-auto">
        <SheetHeader className="h-full">
          <SheetTitle>Create a new tactic</SheetTitle>
          <TacticForm />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
