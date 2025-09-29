import { Button } from "@/components/ui/button"
import { Heart, Users, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6 text-balance">
            Primul pas către versiunea ta cea mai autentică
          </h2>

          <p className="text-xl text-muted-foreground mb-12 text-balance">
            Nu trebuie să fie perfect. Poți doar să îți faci curaj să spui: {"'Am nevoie de sprijin!'"}
          </p>

          {/* Three key messages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <p className="text-lg font-medium text-foreground text-balance">
                Meriți fericirea nu la un moment dat, ci acum!
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <p className="text-lg font-medium text-foreground text-balance">
                Meriți să ai relații care îți hrănesc sufletul!
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <p className="text-lg font-medium text-foreground text-balance">Meriți să te iubești cu blândețe!</p>
            </div>
          </div>

          {/* Primary CTA */}
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg">
            Programează Prima Ședință
          </Button>
        </div>
      </div>
    </section>
  )
}
