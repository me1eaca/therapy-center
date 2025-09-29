import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-balance">
              "Dar cum să încep? E prea complicat..."
            </h2>
            <p className="text-xl text-muted-foreground text-balance">Primul pas nu trebuie să fie perfect.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-destructive/50">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold mb-4 text-destructive">Nu trebuie:</h3>
                <div className="space-y-2 text-left text-sm text-muted-foreground">
                  <p>• Să știi exact ce vrei să lucrezi</p>
                  <p>• Să ai toate problemele identificate și organizate</p>
                  <p>• Să fii "pregătit" pentru schimbare</p>
                  <p>• Să vii cu un plan detaliat</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold mb-4 text-primary">Trebuie doar:</h3>
                <div className="space-y-2 text-left text-sm text-foreground">
                  <p>• Să îți faci curaj să spui: "Am nevoie de sprijin"</p>
                  <p>• Să fii dispus să încerci ceva nou</p>
                  <p>• Să îți dai voie să fii vulnerabil pentru o oră</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Prima ședință este despre cunoaștere.</h3>
              <p className="text-muted-foreground mb-6 text-balance">
                Vei povesti despre situația ta, noi te vom asculta fără să te judecăm, și împreună vom vedea dacă putem
                lucra bine împreună.
              </p>
              <p className="text-lg font-medium text-primary">
                <strong>Nu e nimic de pierdut și totul de câștigat.</strong>
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-balance">Gata să faci primul pas?</h2>

            <div className="space-y-4">
              <p className="text-lg text-foreground text-balance">
                <strong>
                  Nu e prea târziu să începi. Nu e prea devreme să ceri ajutor. Nu ești prea complicat sau prea simplu.
                </strong>
              </p>
              <p className="text-xl text-primary font-medium text-balance">
                <strong>
                  Ești exact persoana pe care destinul a pregătit-o să întâlnească călătoria noastră de ghidare.
                </strong>
              </p>
            </div>

            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Programează prima ședință - fără obligații:</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Sună-ne pentru o conversație scurtă</p>
                      <p className="text-sm text-muted-foreground">
                        în care să vedem dacă suntem potriviți unul pentru celălalt
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Sau trimite-ne un mesaj</p>
                      <p className="text-sm text-muted-foreground">
                        cu întrebările tale - îți vom răspunde în 24 de ore
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6 text-center">
                  <strong>Prima consultație este despre încredere și conexiune.</strong> Dacă nu simți că putem lucra
                  bine împreună, nu există nicio presiune să continui.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Button size="lg" className="text-lg px-8 py-4">
                Programează Prima Ședință
              </Button>

              <div className="text-center">
                <h3 className="text-2xl font-serif font-semibold text-primary mb-2">Bun venit acasă la tine însuți!</h3>
                <p className="text-xl text-accent-foreground font-medium">Bun venit la Aware Connections Center!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
