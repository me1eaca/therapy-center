"use client"

import { Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ShareButtonsProps {
  title: string
  url: string
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    window.open(facebookUrl, "_blank", "width=600,height=400")
  }

  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    window.open(linkedInUrl, "_blank", "width=600,height=600")
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground font-medium">Distribuie:</span>

      <Button
        onClick={shareOnFacebook}
        variant="outline"
        size="sm"
        className="gap-2 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors"
      >
        <Facebook className="w-4 h-4" />
        Facebook
      </Button>

      <Button
        onClick={shareOnLinkedIn}
        variant="outline"
        size="sm"
        className="gap-2 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition-colors"
      >
        <Linkedin className="w-4 h-4" />
        LinkedIn
      </Button>
    </div>
  )
}
