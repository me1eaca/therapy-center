import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Therapists() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">Echipa Noastră</h2>
          <p className="text-lg text-muted-foreground">
            Profesioniști dedicați cu experiență vastă în terapie și consiliere
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Cristina Meleacă */}
          <Card className="bg-card border-border/50 shadow-sm">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-serif font-semibold text-primary">CM</span>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">Cristina Meleacă</h3>
                <p className="text-primary font-medium">Psihoterapeut</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/80">Peste 20 de ani de experiență în consiliere psihologică</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/80">
                    Specializată în terapia centrată pe emoții, art-terapie, consiliere cognitiv-comportamentală
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/80">Formator pentru părinți și profesori</p>
                </div>
              </div>

              <div className="bg-accent/20 p-6 rounded-lg">
                <Quote className="w-6 h-6 text-primary mb-3" />
                <p className="text-foreground/80 italic leading-relaxed text-pretty">
                  {
                    '"Fiecare întâlnire este o onoare și o oportunitate de a învăța și de a crește alături de cei care îmi permit să le fiu alături"'
                  }
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cosmin Meleacă */}
          <Card className="bg-card border-border/50 shadow-sm">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-serif font-semibold text-primary">CM</span>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">Cosmin Meleacă</h3>
                <p className="text-primary font-medium">Psihoterapeut</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/80">
                    Specialist în Psihoterapie cognitiv-comportamentală și hipnoterapie
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/80">Specializări în Terapie Sistemică, Schema Therapy și EFT</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/80">Practicant din 2015 cu dezvoltare continuă</p>
                </div>
              </div>

              <div className="bg-accent/20 p-6 rounded-lg">
                <Quote className="w-6 h-6 text-primary mb-3" />
                <p className="text-foreground/80 italic leading-relaxed text-pretty">
                  {
                    '"Este normal ca, din când în când, să mai și cădem. Important este să găsim puterea de a ne ridica"'
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
