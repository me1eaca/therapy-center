"use client"

import { Button } from "@/components/ui/button"
import { Heart, Shield, Sparkles } from "lucide-react"

export function HeroSection() {
  const handleCTAClick = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="acasa"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5"
    >
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight text-balance">
              Transformarea ta începe aici
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-medium text-balance max-w-3xl mx-auto">
              Descoperă puterea de a trăi autentic, de a iubi profund și de a te conecta cu adevăratul tău eu
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-serif font-semibold text-foreground text-balance leading-relaxed">
              În final totul va fi bine. Dacă nu e bine, înseamnă că nu este finalul.
            </p>
          </div>

          <div className="space-y-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6 text-balance">
                Știi că meriți mai mult decât să trăiești pe pilot automat
              </h2>

              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Relații autentice</h3>
                      <p className="text-muted-foreground">
                        Conectează-te profund cu cei dragi, fără măști sau pretexte
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Pace interioară</h3>
                      <p className="text-muted-foreground">Eliberează-te de anxietate și găsește liniștea în furtună</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Sparkles className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Încredere în sine</h3>
                      <p className="text-muted-foreground">Redescoperă-ți valoarea și puterea de a lua decizii bune</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Iubire de sine</h3>
                      <p className="text-muted-foreground">
                        Tratează-te cu aceeași blândețe cu care îi tratezi pe cei dragi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 max-w-3xl mx-auto">
              <p className="text-lg font-medium text-foreground text-balance leading-relaxed">
                <strong>Nu ești stricat și nu ai nevoie să fii reparat.</strong> Ești o ființă umană curajoasă care
                merită să trăiască din plin, să iubească profund și să fie iubită la fel de profund.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xl font-semibold text-primary text-balance">
                Faptul că ești aici înseamnă că deja ai curajul să cauți soluții
              </p>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                La Aware Connections Center nu există povești prea complicate sau emoții prea intense. Există doar
                oameni curajoși care vor să trăiască autentic.
              </p>
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={handleCTAClick}
            >
              Începe Transformarea Ta
            </Button>
            <p className="text-sm text-muted-foreground">
              Nu e prea târziu să începi. Nu e prea devreme să ceri ajutor.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
