import { Heart, Shield, Sparkles } from "lucide-react"

export function AboutTherapists() {
  return (
    <section id="de-ce-aware-connections" className="py-20 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            De ce Aware Connections
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">
            Nu te reparăm. Te însoțim.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl mx-auto">
            Nu încercăm să te „reparăm" pentru că nu credem că ești stricat. Oferim spațiul și
            instrumentele ca tu să îți descoperi propria înțelepciune interioară.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Abordare personalizată</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fiecare persoană și fiecare cuplu este unic. Adaptăm metoda la nevoile tale,
                nu invers.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Metode dovedite științific</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                EFT are una dintre cele mai ridicate rate de succes în terapia de cuplu,
                validată de zeci de studii.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Experiență combinată</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Peste 30 de ani de experiență combinată. Și ceva mai important: înțelegem
                din interior ce înseamnă să construiești o relație.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}