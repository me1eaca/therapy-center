"use client"

import { useState } from "react"
import { Search, Loader2, ExternalLink, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

interface PerplexityResponse {
  answer: string
  sources: Array<{
    title: string
    url: string
    snippet: string
  }>
}

export function PerplexitySearch() {
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<PerplexityResponse | null>(null)
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const handleSearch = async () => {
    if (!query.trim()) return

    setIsLoading(true)
    setResult(null)

    try {
      const response = await fetch("/api/perplexity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })

      if (!response.ok) {
        throw new Error("Eroare la căutare")
      }

      const data = await response.json()
      setResult(data)
    } catch (error) {
      toast({
        title: "Eroare",
        description: "Nu s-a putut efectua căutarea. Te rugăm să încerci din nou.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      toast({
        title: "Copiat",
        description: "Răspunsul a fost copiat în clipboard.",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      toast({
        title: "Eroare",
        description: "Nu s-a putut copia textul.",
        variant: "destructive",
      })
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isLoading) {
      handleSearch()
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="border-border/50 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-serif">
            <Search className="w-6 h-6 text-primary" />
            Căutare Inteligentă cu Perplexity
          </CardTitle>
          <p className="text-muted-foreground">
            Obține răspunsuri precise și actualizate la întrebările tale despre terapie, psihologie și dezvoltare personală.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Întreabă despre terapie, psihologie, relații..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button 
              onClick={handleSearch} 
              disabled={isLoading || !query.trim()}
              className="px-6"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Search className="w-4 h-4" />
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-border/50 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-serif">Răspuns</CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopy(result.answer)}
                className="gap-2"
              >
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                {copied ? "Copiat" : "Copiază"}
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose prose-sm max-w-none">
              <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                {result.answer}
              </p>
            </div>

            {result.sources && result.sources.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Surse:</h4>
                <div className="space-y-2">
                  {result.sources.map((source, index) => (
                    <div
                      key={index}
                      className="p-3 bg-accent/20 rounded-lg border border-border/50"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <h5 className="font-medium text-foreground truncate">
                            {source.title}
                          </h5>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {source.snippet}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="flex-shrink-0"
                        >
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-1"
                          >
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {isLoading && (
        <Card className="border-border/50 shadow-sm">
          <CardContent className="py-8">
            <div className="flex items-center justify-center gap-3">
              <Loader2 className="w-5 h-5 animate-spin text-primary" />
              <span className="text-muted-foreground">Căutare în curs...</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
