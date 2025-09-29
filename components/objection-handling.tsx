import { Card, CardContent } from "@/components/ui/card"

export function ObjectionHandling() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* First Objection */}
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-balance">
              "Dar de ce să mă duc la terapie? Nu pot să mă descurc singur?"
            </h2>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">Să-ți spun ceva ce poate te va surprinde:</h3>
                <div className="space-y-4 text-left">
                  <p className="text-lg text-foreground">
                    <strong>
                      Cel mai puternic lucru pe care îl poți face este să recunoști când ai nevoie de ajutor.
                    </strong>{" "}
                    Gândește-te - când mașina ta se strică, o duci la mecanic. Când ai o problemă legală, mergi la
                    avocat. <strong>De ce ai trata mintea și inima ta diferit?</strong>
                  </p>
                  <p className="text-lg text-primary font-medium">
                    <strong>
                      Terapia nu înseamnă că ești slab. Înseamnă că ești destul de puternic să îți asumi
                      responsabilitatea pentru propria fericire.
                    </strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">46%</div>
                  <p className="text-sm text-muted-foreground">
                    dintre europeni au trecut prin probleme emoționale în ultimul an
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">75%</div>
                  <p className="text-sm text-muted-foreground">
                    dintre problemele emoționale încep înainte de 25 de ani
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3x</div>
                  <p className="text-sm text-muted-foreground">
                    mai repede se recuperează cei care cer ajutor profesional
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Second Objection */}
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-balance">
              "Dar oare funcționează cu adevărat terapia?"
            </h2>

            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-accent-foreground">Permite-mi să-ți arăt cifrele:</h3>
                <div className="space-y-4 text-left">
                  <p className="text-lg text-foreground">
                    <strong>Terapia Centrată pe Emoții (EFT) pe care o folosim are o rată de succes de 70-90%</strong> -
                    și aceste rezultate se mențin și după 2 ani de la terminarea terapiei.
                  </p>
                  <div className="bg-background rounded-lg p-6 space-y-2">
                    <p className="text-foreground">Să pun asta în perspectivă pentru tine:</p>
                    <p className="text-foreground">• Dacă ai avea o operație cu 90% șanse de reușită, ai face-o, nu?</p>
                    <p className="text-foreground">
                      • Dacă ai investi într-o afacere cu 70% șanse să îți schimbe viața, ai face-o, nu?
                    </p>
                  </div>
                  <p className="text-lg font-medium text-accent-foreground">
                    <strong>
                      EFT nu este doar "o teorie frumoasă" - este singura formă de terapie de cuplu care a dovedit
                      științific că creează schimbări durabile peste 2 ani.
                    </strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Third Objection */}
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-balance">"Dar costă prea mult..."</h2>

            <Card className="bg-muted border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Înțeleg această îngrijorare. Să vorbim deschis despre asta:
                </h3>
                <div className="space-y-6 text-left">
                  <p className="text-lg text-foreground">
                    <strong>Da, terapia costă bani.</strong> Dar să ne gândim la costul de a NU face nimic:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <p className="text-foreground">• Câte nopți nedormite?</p>
                      <p className="text-foreground">• Cât stres la serviciu din cauza problemelor de acasă?</p>
                      <p className="text-foreground">
                        • Câte zile în care nu ești cu adevărat prezent pentru cei dragi?
                      </p>
                    </div>
                    <div className="bg-destructive/10 rounded-lg p-4">
                      <p className="text-lg font-medium text-destructive">
                        Care este costul unei vieți în care te simți blocat și nefericit?
                      </p>
                    </div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-6">
                    <h4 className="font-semibold mb-2">Pentru cupluri specifice:</h4>
                    <p className="text-foreground mb-2">
                      • <strong>Costul unui divorț în România poate depăși 10.000 de euro</strong> (avocați, împărțirea
                      bunurilor, două gospodării separate)
                    </p>
                    <p className="text-foreground">
                      •{" "}
                      <strong>
                        Studiile arată că persoanele care merg la terapie individuală pentru probleme de cuplu au șanse
                        mai mari să divorțeze
                      </strong>{" "}
                      decât cei care vin împreună la terapie de cuplu
                    </p>
                  </div>
                  <p className="text-lg font-medium text-primary text-center">
                    <strong>
                      Noi vedem terapia ca pe o investiție în cea mai importantă relație din viața ta - cea cu tine
                      însuți și cu partenerul tău.
                    </strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
