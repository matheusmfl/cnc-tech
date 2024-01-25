'use client'
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from '@/components/ui/dialogChatBot'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useState } from 'react'
import { HeaderChatBot } from './Header'
import { ContentDivChatBot } from './ContentDiv'

export function HelpButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <button
        onClick={handleButtonClick}
        className="h-10 w-16 rounded-full z-20 bg-slate-800 text-white text-center fixed bottom-9 right-6"
      >
        Ajuda
      </button>
      <Dialog open={isOpen}>
        {/* <DialogTrigger>

      </DialogTrigger> */}
        <DialogContent className="h-full  fixed -translate-x-0 right-0 rounded-none">
          <DialogPrimitive.Close
            onClick={handleClose}
            className="absolute right-4 top-7 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
          <DialogHeader>
            <HeaderChatBot />
            <ContentDivChatBot />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
