import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, User, CheckCircle } from "lucide-react"

export function Services() {
  return (
    <section id="servicii" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">Serviciile Noastre</h2>
          <p className="text-lg text-muted-foreground">
            Abordări terapeutice validate științific pentru vindecarea și creșterea personală
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Couple Therapy */}
          <Card className="bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-serif text-foreground">Terapie de Cuplu (EFT)</CardTitle>
              <p className="text-lg text-primary font-medium">Reparați și consolidați legătura dintre voi</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Beneficii cheie:</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80">De-escaladarea conflictelor</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80">Accesarea emoțiilor primare</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80">Construirea unei legături emoționale sigure</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/20 p-4 rounded-lg">
                <p className="text-foreground/80 text-sm leading-relaxed">
                  EFT are o rată ridicată de succes dovedită științific. Nu se concentrează pe compromis, ci pe esența
                  relației: legătura emoțională.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Individual Therapy */}
          <Card className="bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-serif text-foreground">Terapie Individuală (EFIT)</CardTitle>
              <p className="text-lg text-primary font-medium">Conectează-te cu un sine mai autentic și mai puternic</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Beneficii:</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80">
                      Înțelege legătura dintre experiențele trecute și problemele actuale
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80">Accesează și transformă emoțiile primare</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80">Dezvoltă auto-compasiunea și acceptarea</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80">Construiește o bază emoțională internă sigură</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/20 p-4 rounded-lg">
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Merge dincolo de simptome și abordează rădăcinile emoționale ale problemelor.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
