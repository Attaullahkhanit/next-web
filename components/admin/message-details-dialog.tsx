"use client"

import { Mail, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Message {
  id: number
  name: string
  email: string
  subject: string
  message: string
  created_at: string
}

interface MessageDetailsDialogProps {
  message: Message | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onDelete: (id: number) => Promise<void>
}

export function MessageDetailsDialog({ message, open, onOpenChange, onDelete }: MessageDetailsDialogProps) {
  if (!message) return null

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this message?")) return
    try {
      await onDelete(message.id)
      onOpenChange(false)
    } catch {
      console.error("Delete failed")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{message.subject}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">From</p>
            <p className="font-medium text-gray-900">{message.name}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Email</p>
            <a href={`mailto:${message.email}`} className="text-purple-600 hover:underline">
              {message.email}
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Date</p>
            <p className="text-gray-700">{new Date(message.created_at).toLocaleString()}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Message</p>
            <p className="bg-gray-50 p-4 rounded-lg whitespace-pre-wrap text-gray-700">{message.message}</p>
          </div>

          <div className="flex gap-2 pt-4 border-t border-gray-200">
            <Button onClick={handleDelete} variant="destructive" className="gap-2">
              <Trash2 size={18} />
              Delete Message
            </Button>
            <Button onClick={() => (window.location.href = `mailto:${message.email}`)} className="gap-2">
              <Mail size={18} />
              Reply
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
