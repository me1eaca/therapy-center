"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    console.log("[v0] Attempting to scroll to:", targetId) // Added debug logging
    const element = document.getElementById(targetId)
    console.log("[v0] Found element:", element) // Added debug logging
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false) // Close mobile menu after clicking
      console.log("[v0] Scrolling to element successful") // Added debug logging
    } else {
      console.log("[v0] Element not found with ID:", targetId) // Added debug logging
    }
  }

  const handleCTAClick = () => {
    console.log("[v0] CTA button clicked, opening WhatsApp") // Added debug logging
    // Create a custom modal for therapist selection
    const modal = document.createElement('div')
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
    modal.innerHTML = `
      <div class="bg-white rounded-lg p-6 max-w-sm mx-4">
        <h3 class="text-lg font-semibold mb-4 text-center">Alege terapeutul</h3>
        <div class="space-y-3">
          <button id="cosmin-btn" class="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
            Cosmin (+40 726 281 554)
          </button>
          <button id="cristina-btn" class="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
            Cristina (+40 728 954 712)
          </button>
          <button id="close-modal" class="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition-colors">
            Anulează
          </button>
        </div>
      </div>
    `
    
    document.body.appendChild(modal)
    
    // Add event listeners
    document.getElementById('cosmin-btn')?.addEventListener('click', () => {
      window.open('https://wa.me/40726281554', '_blank')
      document.body.removeChild(modal)
      setIsMenuOpen(false)
    })
    
    document.getElementById('cristina-btn')?.addEventListener('click', () => {
      window.open('https://wa.me/40728954712', '_blank')
      document.body.removeChild(modal)
      setIsMenuOpen(false)
    })
    
    document.getElementById('close-modal')?.addEventListener('click', () => {
      document.body.removeChild(modal)
      setIsMenuOpen(false)
    })
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal)
        setIsMenuOpen(false)
      }
    })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-md bg-white/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Aware Connections Center"
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#acasa"
              onClick={(e) => handleSmoothScroll(e, "acasa")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Acasă
            </a>
            <a
              href="#despre-noi"
              onClick={(e) => handleSmoothScroll(e, "despre-noi")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Despre Noi
            </a>
            <a
              href="#servicii"
              onClick={(e) => handleSmoothScroll(e, "servicii")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Servicii
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
            <a
              href="/blog"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Blog
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={handleCTAClick} className="bg-green-600 text-white hover:bg-green-700">
              Programează-te prin WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a
                href="#acasa"
                onClick={(e) => handleSmoothScroll(e, "acasa")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Acasă
              </a>
              <a
                href="#despre-noi"
                onClick={(e) => handleSmoothScroll(e, "despre-noi")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Despre Noi
              </a>
              <a
                href="#servicii"
                onClick={(e) => handleSmoothScroll(e, "servicii")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Servicii
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
              <a
                href="/blog"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Blog
              </a>
              <Button
                onClick={handleCTAClick}
                className="bg-green-600 text-white hover:bg-green-700 w-full mt-4"
              >
                Programează-te prin WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
