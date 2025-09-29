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
    console.log("[v0] CTA button clicked, scrolling to contact") // Added debug logging
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Aware Connections Center"
              className="h-14 w-auto drop-shadow-sm hover:drop-shadow-md transition-all duration-200"
              style={{ 
                backgroundColor: 'transparent',
                background: 'transparent'
              }}
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
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={handleCTAClick} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Programează o Ședință
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
              <Button
                onClick={handleCTAClick}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-4"
              >
                Programează o Ședință
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
