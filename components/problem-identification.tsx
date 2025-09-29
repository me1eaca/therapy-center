import { Card, CardContent } from "@/components/ui/card"
import { User, Heart, ArrowRight } from "lucide-react"

export function ProblemIdentification() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-balance">
              Momentele care te-au adus aici sunt semnale de trezire
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
              Fiecare experiență dificilă este o invitație să descoperi cine ești cu adevărat și să trăiești mai
              autentic
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-primary relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-primary">Călătoria ta personală</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium mb-1">Te trezești dimineața deja obosit</p>
                      <p className="text-sm text-muted-foreground">
                        Corpul tău îți spune că ai nevoie de odihnă emoțională, nu doar fizică
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium mb-1">Trăiești pe pilot automat</p>
                      <p className="text-sm text-muted-foreground">
                        Sufletul tău cere să te reconnectezi cu ceea ce îți aduce bucurie
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium mb-1">Reacționezi în moduri care te surprind</p>
                      <p className="text-sm text-muted-foreground">
                        Emoții vechi cer să fie văzute, înțelese și vindecate
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium mb-1">Trecutul încă îți influențează prezentul</p>
                      <p className="text-sm text-muted-foreground">
                        Experiențele din trecut cer să fie integrate cu înțelepciune
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium mb-1">Revii în aceleași obiceiuri</p>
                      <p className="text-sm text-muted-foreground">
                        Ai nevoie de strategii noi pentru a crea schimbări durabile
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-accent-foreground">Relația ta de cuplu</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <ArrowRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium mb-1">Vă certați pentru aceleași lucruri</p>
                      <p className="text-sm text-muted-foreground">
                        Nevoi emoționale neîmplinite caută să fie exprimate și înțelese
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <ArrowRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium mb-1">Vorbiți, dar nu vă înțelegeți</p>
                      <p className="text-sm text-muted-foreground">
                        Aveți nevoie să învățați limbajul inimii celuilalt
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <ArrowRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium mb-1">Unul s-a închis emoțional</p>
                      <p className="text-sm text-muted-foreground">
                        Vulnerabilitatea cere un spațiu sigur pentru a se manifesta
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <ArrowRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium mb-1">Momente bune, apoi din nou conflicte</p>
                      <p className="text-sm text-muted-foreground">
                        Ciclurile repetitive pot fi întrerupte cu înțelegere și instrumente noi
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <ArrowRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium mb-1">Te întrebi dacă mai merită să luptați</p>
                      <p className="text-sm text-muted-foreground">
                        Iubirea voastră cere să fie redescoperită și hrănită în moduri noi
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-2xl p-8 border border-primary/10 max-w-4xl mx-auto">
              <p className="text-lg font-medium text-foreground text-balance leading-relaxed">
                <strong>
                  Fiecare dintre aceste experiențe nu este o problemă de rezolvat, ci o invitație să crești.
                </strong>
                Ele îți arată exact unde ai nevoie de vindecare, înțelegere și transformare.
              </p>
              <p className="text-primary font-semibold mt-4 text-balance">
                Și cel mai frumos lucru? Nu trebuie să faci asta singur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
