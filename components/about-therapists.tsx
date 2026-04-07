import { Heart, Shield, Sparkles } from "lucide-react"

export function AboutTherapists() {
  return (
    <section id="despre-noi" className="py-20 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            De ce Aware Connections
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">
            Nu te reparÄƒm. Te Ã®nsoÈ›im.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl mx-auto">
            Nu Ã®ncercÄƒm sÄƒ te â€žreparÄƒm" pentru cÄƒ nu credem cÄƒ eÈ™ti stricat. Oferim spaÈ›iul È™i
            instrumentele ca tu sÄƒ Ã®È›i descoperi propria Ã®nÈ›elepciune interioarÄƒ.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Abordare personalizatÄƒ</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fiecare persoanÄƒ È™i fiecare cuplu este unic. AdaptÄƒm metoda la nevoile tale,
                nu invers.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Metode dovedite È™tiiÈ›ific</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                EFT are una dintre cele mai ridicate rate de succes Ã®n terapia de cuplu,
                validatÄƒ de zeci de studii.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">ExperienÈ›Äƒ combinatÄƒ</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Peste 30 de ani de experienÈ›Äƒ combinatÄƒ. È˜i ceva mai important: Ã®nÈ›elegem
                din interior ce Ã®nseamnÄƒ sÄƒ construieÈ™ti o relaÈ›ie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}