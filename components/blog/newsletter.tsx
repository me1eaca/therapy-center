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
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 my-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
          <Mail className="w-6 h-6 text-white" />
        </div>

        <h3 className="text-2xl font-serif font-semibold mb-3 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Primește conținut exclusiv
        </h3>

        <p className="text-gray-600 mb-6">
          Abonează-te la newsletter-ul nostru pentru articole despre relații, terapie și dezvoltare personală.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email-ul tău"
            required
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
          />

          <Button
            type="submit"
            disabled={status === "loading"}
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all"
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

        <p className="text-xs text-gray-500 mt-4">
          Nu spam. Poți să te dezabonezi oricând.
        </p>
      </div>
    </div>
  )
}
