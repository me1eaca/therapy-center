"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    nume: "",
    email: "",
    telefon: "",
    mesaj: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">Contact</h2>
          <p className="text-lg text-muted-foreground">
            Te invităm să ne contactezi pentru o viață mai împlinită și mai autentică
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">Trimite-ne un mesaj</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nume">Nume</Label>
                  <Input
                    id="nume"
                    name="nume"
                    value={formData.nume}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefon">Telefon</Label>
                  <Input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    value={formData.telefon}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mesaj">Mesaj</Label>
                  <Textarea
                    id="mesaj"
                    name="mesaj"
                    value={formData.mesaj}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="bg-background border-border resize-none"
                    placeholder="Spune-ne cum te putem ajuta..."
                  />
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Trimite Mesajul
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border-border/50 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">contact@awareconnections.ro</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Telefon</h3>
                    <p className="text-muted-foreground">+40 XXX XXX XXX</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Locație</h3>
                    <p className="text-muted-foreground">
                      Cabinetul nostru se află într-o zonă liniștită și accesibilă din oraș
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional info */}
            <div className="bg-accent/20 p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-3">Program de lucru</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Luni - Vineri: 9:00 - 19:00</p>
                <p>Sâmbătă: 10:00 - 16:00</p>
                <p>Duminică: Închis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
