"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate email sending to office@awareconnections.eu
    try {
      // In production, this would call an API endpoint that sends the email
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus("success")
        setEmail("")
        setTimeout(() => setStatus("idle"), 3000)
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <div className="bg-secondary/30 rounded-2xl p-8 my-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex p-3 rounded-full bg-primary mb-4">
          <Mail className="w-6 h-6 text-primary-foreground" />
        </div>

        <h3 className="text-2xl font-serif font-semibold mb-3 text-foreground">
          Primește conținut exclusiv
        </h3>

        <p className="text-muted-foreground mb-6">
          Abonează-te la newsletter-ul nostru pentru articole despre relații, terapie și dezvoltare personală.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email-ul tău"
            required
            className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />

          <Button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3"
          >
            {status === "loading" ? "Se trimite..." : "Abonează-te"}
          </Button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-600 font-medium">
            Mulțumim! Te-ai abonat cu succes.
          </p>
        )}

        {status === "error" && (
          <p className="mt-4 text-red-600 font-medium">
            A apărut o eroare. Te rugăm să încerci din nou.
          </p>
        )}

        <p className="text-xs text-muted-foreground mt-4">
          Nu spam. Poți să te dezabonezi oricând.
        </p>
      </div>
    </div>
  )
}
