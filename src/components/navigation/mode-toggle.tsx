"use client"

import * as React from "react"
import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        
        <DropdownMenuItem onClick={() => setTheme("light")} className="group cursor-pointer transition">
         <Sun className='size-4 me-2 group-hover:text-primary group-hover:scale-125'/>
         <span>فاتح</span>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("dark")} className="group cursor-pointer transition">
        <Moon className='size-4 me-2 group-hover:text-primary group-hover:scale-125'/>
        <span>داكن</span>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("system")}>
        <Monitor className='size-4 me-2 group-hover:text-primary group-hover:scale-125'/>
        <span>افتراضى</span>
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
