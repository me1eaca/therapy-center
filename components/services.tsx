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
              <CardTitle className="text-2xl font-serif text-foreground">Terapie de Cuplu</CardTitle>
              <p className="text-lg text-primary font-medium">Redescoperiți legătura care v-a unit</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Beneficii cheie:</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80">Opriți ciclurile de certuri și retragere care vă lasă singuri</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80">Învățați să fiți accesibili, receptivi și implicați emoțional</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80">Reconstruiți încrederea: "Ești acolo pentru mine?"</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/20 p-4 rounded-lg">
                <p className="text-foreground/80 text-sm leading-relaxed text-center">
                  EFT nu vă învață să vă certați mai bine. Vă ajută să transformați dansul dureros al deconectării într-o legătură sigură unde puteți să vă regăsiți unul pe celălalt.
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
              <CardTitle className="text-2xl font-serif text-foreground">Terapie Individuală</CardTitle>
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
                    <p className="text-foreground/80">Transformă vulnerabilitatea în putere, nu în rușine</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80">Dezvoltă auto-compasiunea și acceptarea</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80">Construiește o relație sigură cu tine însuți</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80">Dezvoltă relații autentice care te susțin</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/20 p-4 rounded-lg">
                <p className="text-foreground/80 text-sm leading-relaxed">
                  EFIT nu lucrează doar cu simptomele. Explorăm rădăcinile emoționale care alimentează tiparele distructive din viața ta.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
