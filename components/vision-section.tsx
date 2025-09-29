import { Card, CardContent } from "@/components/ui/card"
import { Sprout, Heart } from "lucide-react"

export function VisionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">
              Cum ar arăta viața ta după terapie?
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Imaginează-ți o versiune a ta care se simte liberă, conectată și în pace cu sine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
                  <Sprout className="w-6 h-6" /> Pentru tine personal:
                </h3>
                <div className="space-y-4">
                  <p className="text-foreground">
                    <strong>În loc să te simți copleșit de emoții, vei învăța să le folosești ca pe o busolă</strong>{" "}
                    care te ghidează către deciziile corecte pentru tine.
                  </p>
                  <p className="text-foreground">
                    <strong>În loc să reacționezi automat la situații stresante, vei avea puterea de a alege</strong>{" "}
                    cum răspunzi, bazându-te pe ceea ce îți dorești cu adevărat.
                  </p>
                  <p className="text-foreground">
                    <strong>
                      În loc să te lupți cu aceleași tipare din trecut, vei fi liber să construiești viitorul
                    </strong>{" "}
                    pe care ți-l dorești.
                  </p>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-primary font-medium">
                      <strong>Vei avea o relație blândă și înțelegătoare cu tine însuți</strong> - vei fi cel mai bun
                      prieten al tău, nu cel mai dur critic.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-accent-foreground flex items-center gap-2">
                  <Heart className="w-6 h-6 text-red-500" /> Pentru relația voastră:
                </h3>
                <div className="space-y-4">
                  <p className="text-foreground">
                    <strong>
                      În loc de certuri care nu duc nicăieri, veți avea conversații care vă aduc mai aproape.
                    </strong>
                  </p>
                  <p className="text-foreground">
                    <strong>
                      În loc să vă temeți să vă deschideți unul către celălalt, vulnerabilitatea va deveni podul
                    </strong>{" "}
                    care vă conectează.
                  </p>
                  <p className="text-foreground">
                    <strong>În loc să ghiciți ce simte partenerul, veți știi să vă comunicați nevoile</strong> clar și
                    cu dragoste.
                  </p>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <p className="text-accent-foreground font-medium">
                      <strong>Veți fi o echipă adevărată</strong> - nu doi oameni care trăiesc în aceeași casă, ci doi
                      parteneri care se susțin și se înțeleg.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Transformarea nu este doar posibilă - este inevitabilă
              </h3>
              <p className="text-lg text-muted-foreground text-balance">
                Când ai instrumentele potrivite, sprijinul necesar și curajul să începi, schimbarea devine o consecință
                naturală, nu o luptă constantă.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
