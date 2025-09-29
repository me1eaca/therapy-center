import { Button } from "@/components/ui/button"
import { Heart, Users, Shield } from "lucide-react"

export function Hero() {
  return (
    <section id="acasa" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-secondary/30" />

      <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eBtjGcCPl7PJLqAAlhF1GAQqUeg8Ai.png')] bg-cover bg-center opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6 text-balance">
            Bun venit acasă la tine însuți!
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed">
            Un vis devenit realitate - un spațiu sigur unde poți explora experiențele interioare fără teama de a fi
            judecat
          </p>

          <div className="max-w-4xl mx-auto mb-12 space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
              La Aware Connections Center nu există întrebări {"'prea personale'"}, emoții {"'prea intense'"} sau
              povești {"'prea complicate'"}. Există doar ființe umane curajoase care vor să trăiască autentic, să
              iubească și să se conecteze cu ele însele.
            </p>

            <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
              <p className="text-lg font-medium text-foreground italic">
                "Primul pas nu trebuie să fie perfect. Poți doar să îți faci curaj să spui: 'Am nevoie de sprijin! Vreau
                să trăiesc autentic! Sunt pregătit să încep această călătorie!'"
              </p>
            </div>
          </div>

          <div className="mb-16 space-y-6">
            <div className="space-y-3 mb-8">
              <p className="text-lg font-semibold text-primary">Meriți fericirea nu la un moment dat, ci acum!</p>
              <p className="text-lg font-semibold text-accent">
                Meriți să ai relații care îți hrănesc sufletul, nu care îl epuizează!
              </p>
              <p className="text-lg font-semibold text-secondary-foreground">
                Meriți să te iubești cu aceeași blândețe cu care ai iubi pe cel mai drag om din viața ta!
              </p>
            </div>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg">
              Începe Călătoria Ta Către Autenticitate
            </Button>

            <p className="text-sm text-muted-foreground mt-4">
              Nu e prea târziu să începi. Nu e prea devreme să ceri ajutor. Nu ești prea complicat sau prea simplu.
            </p>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Peste 20 de ani</h3>
              <p className="text-sm text-muted-foreground">de experiență în consiliere</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Terapie EFT</h3>
              <p className="text-sm text-muted-foreground">validată științific</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Spațiu sigur</h3>
              <p className="text-sm text-muted-foreground">fără judecată</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
