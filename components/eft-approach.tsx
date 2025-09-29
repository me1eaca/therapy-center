import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Target, Award, Brain, Shield, Compass, Lightbulb } from "lucide-react"

export function EFTApproach() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
            Abordarea noastră - Terapia Centrată pe Emoții
          </h2>
          <p className="text-xl text-muted-foreground italic mb-8">
            Mai mult decât o tehnică pentru noi - este o filosofie
          </p>

          <div className="max-w-3xl mx-auto text-left space-y-6 text-foreground/80">
            <p className="text-lg leading-relaxed">
              Fie că lucrăm cu cupluri sau cu indivizi, această metodă oferă un cadru terapeutic profund umanist.
              Dezvoltată în anii '80 de către Sue Johnson, abordarea se bazează pe teoria atașamentului.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
              <p className="text-lg font-medium text-center italic text-foreground">
                "Această abordare se bazează pe înțelegerea că problemele din viața noastră apar adesea din nevoi
                emoționale neîmplinite și tipare de interacțiune care ne îndepărtează de conexiunea autentică."
              </p>
            </div>
          </div>
        </div>

        {/* EFT Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          <Card className="bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Pune emoția în centru</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Recunoaștem că emoțiile tale au sens și sunt ghidul către vindecarea autentică
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Este colaborativă</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Non-judicativă - te întâlnim acolo unde ești, fără să te judecăm
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Schimbarea tiparelor</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Urmărește schimbarea tiparelor profunde, nu doar simptomele superficiale
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Validată științific</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Este structurată și bazată pe cercetare științifică riguroasă
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-center text-foreground mb-12">
            Cum funcționează Terapia Centrată pe Emoții
          </h3>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Teoria atașamentului</h4>
                  <p className="text-foreground/80 leading-relaxed">
                    Ne arată că suntem făcuți pentru conexiune și siguranță emoțională. Când aceste nevoi fundamentale
                    nu sunt satisfăcute, dezvoltăm strategii de protecție care, în timp, pot deveni problematice.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Compass className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Înțelegerea tiparelor</h4>
                  <p className="text-foreground/80 leading-relaxed">
                    În terapie, te ajutăm să înțelegi aceste tipare și să descoperi modalități noi, mai sănătoase de
                    a-ți satisface nevoile emoționale.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Construirea siguranței</h4>
                  <p className="text-foreground/80 leading-relaxed">
                    Scopul este să construiești conexiuni mai sigure și mai satisfăcătoare, să îți reglezi mai bine
                    emoțiile și să dezvolți un sentiment mai solid de sine.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <div className="text-center mb-6">
                <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-4">Misiunea noastră</h4>
              </div>
              <p className="text-foreground/80 leading-relaxed text-center">
                La Aware Connections Center, folosim Terapia Centrată pe Emoții ca un vehicul pentru a facilita
                vindecarea, a aprofunda înțelegerea de sine și a celorlalți, și a construi fundația pentru relații mai
                conștiente și mai împlinitoare – atât cu partenerul de viață, cât și cu propria persoană.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced info section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-2xl border border-primary/10">
            <blockquote className="text-lg md:text-xl text-foreground/80 leading-relaxed text-pretty mb-6">
              "EFT recunoaște că emoțiile sunt nu doar reacții, ci și ghiduri inteligente către nevoile noastre cele mai
              profunde. Prin explorarea și transformarea acestor emoții, descoperim căi noi de a fi în relație cu noi
              înșine și cu ceilalți."
            </blockquote>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="text-left">
                <h5 className="font-semibold text-foreground mb-2">Pentru cupluri:</h5>
                <p className="text-sm text-foreground/70">Repararea și consolidarea legăturii emoționale</p>
              </div>
              <div className="text-left">
                <h5 className="font-semibold text-foreground mb-2">Pentru indivizi:</h5>
                <p className="text-sm text-foreground/70">Construirea unei baze emoționale interne sigure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
