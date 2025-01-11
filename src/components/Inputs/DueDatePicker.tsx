"use client"

import * as React from "react"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover"
import { useRecoilValue } from "recoil"
import { clientInputAtom } from "../../store/atom"

export default function DueDatePicker({ handleDueDateInput }: { handleDueDateInput: (value: string) => void }) {

  const inputs = useRecoilValue(clientInputAtom)

  const [dueDate, setDueDate] = React.useState<Date | undefined>(inputs.dueDate ? new Date(inputs.dueDate) : undefined)

  React.useEffect(() => {
    handleDueDateInput(dueDate?.toString() || '')
  }, [dueDate, setDueDate])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-12 justify-start text-left font-normal",
            !dueDate && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={dueDate}
          onSelect={setDueDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
