import { PerplexitySearch } from "@/components/perplexity-search"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Search, BookOpen, Users } from "lucide-react"

export default function CautarePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Căutare Inteligentă
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descoperă răspunsuri precise și actualizate la întrebările tale despre terapie, 
            psihologie și dezvoltare personală cu ajutorul inteligenței artificiale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center border-border/50 shadow-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg font-serif">Inteligență Artificială</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Răspunsuri precise și actualizate bazate pe cele mai recente informații
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50 shadow-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg font-serif">Căutare Avansată</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Acces la surse verificate și informații de încredere
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50 shadow-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg font-serif">Specializat în Terapie</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Focus pe psihologie, terapie și dezvoltare personală
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search Component */}
        <PerplexitySearch />

        {/* Help Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-serif flex items-center justify-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Cum să folosești această funcție
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-primary">1</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Întreabă clar:</strong> Formulează întrebările tale în mod clar și specific
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-primary">2</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Verifică sursele:</strong> Consultă sursele oferite pentru informații suplimentare
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-primary">3</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Folosește informațiile:</strong> Aplică cunoștințele în viața ta personală sau profesională
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
