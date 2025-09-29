import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export function PromiseSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">
              Promisiunea noastră pentru tine
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Transparență, onestitate și angajament autentic pentru călătoria ta de vindecare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="border-l-4 border-l-destructive/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-destructive">NU îți promitem că va fi ușor.</h3>
                  <p className="text-muted-foreground text-sm">
                    Vindecarea și creșterea autentică necesită curaj, timp și angajament.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">ÎȚI promitem că nu vei fi singur în acest proces.</h3>
                  <p className="text-muted-foreground text-sm">
                    Vei avea alături călăuze care înțeleg din experiență proprie cât de provocatoare și cât de frumoasă
                    poate fi călătoria către un sine autentic.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-destructive/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-destructive">NU îți promitem că vei fi "vindecat" complet.</h3>
                  <p className="text-muted-foreground text-sm">
                    ÎȚI promitem că vei dezvolta o relație diferită cu propriile experiențe și că vei căpăta instrumente
                    cu care să navighezi prin inevitabilele provocări ale vieții cu înțelepciune, compasiune și în
                    conexiune cu tine.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-destructive/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-destructive">NU îți promitem că nu vei mai avea probleme.</h3>
                  <p className="text-muted-foreground text-sm">
                    ÎȚI promitem că vei putea discerne între durere și suferință, pentru că{" "}
                    <strong>"Durerea este inevitabilă, suferința este opțională"</strong>.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">
                    ÎȚI promitem că vei fi văzut, auzit și acceptat exact așa cum ești tu
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Nu după ce te vei "îmbunătăți", nu după ce vei fi "vindecat", ci acum, în întreaga ta complexitate
                    umană.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">Cea mai importantă promisiune:</h3>
                  <p className="text-foreground text-sm">
                    <strong>
                      Vei descoperi că meriți iubire, respect și fericire - nu pentru că ai făcut ceva să le meriți, ci
                      pentru că exiști.
                    </strong>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mt-12 bg-card border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-serif font-semibold mb-6">Tu meriți...</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-foreground">
                      <strong>Să te iubești cu aceeași blândețe</strong> cu care îl iubești pe cel mai drag om din viața
                      ta
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-foreground">
                      <strong>Să ai relații care îți hrănesc sufletul</strong>, nu care îl epuizează
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-foreground">
                      <strong>Să fii fericit NU la un moment dat în viitor, ci ACUM</strong>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-foreground">
                      <strong>Să trăiești autentic</strong>, conectat cu tine însuți și cu cei pe care îi iubești
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
