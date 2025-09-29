import { Card, CardContent } from "@/components/ui/card"
import { Eye, Users, Heart, Lightbulb, Compass } from "lucide-react"

export function About() {
  return (
    <section id="despre-noi" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
              Aware Connections Center
            </h2>
            <p className="text-xl md:text-2xl text-primary font-medium italic mb-8">Un vis devenit realitate</p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
              <p className="text-lg leading-relaxed">
                Aware Connections Center s-a născut din visul nostru de a crea un spațiu unde oamenii să se simtă cu
                adevărat în siguranță să își exploreze experiențele interioare fără teama de a fi judecați, etichetați
                sau "reparați". Numele nu a fost ales întâmplător:
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Lightbulb className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-xl font-semibold text-primary">Aware</h3>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      Pentru că vindecarea începe cu conștientizarea. Nu poți transforma ceea ce nu recunoști. Multe
                      dintre problemele noastre continuă să ne afecteze tocmai pentru că operează sub nivelul
                      conștiinței, ca niște programări automate moștenite din experiențe trecute.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-accent/5 border-accent/20">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Users className="w-8 h-8 text-accent mr-3" />
                      <h3 className="text-xl font-semibold text-accent">Connections</h3>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      Pentru că nu suntem făcuți să existăm în izolare. Vindecarea autentică se întâmplă în relație - cu
                      tine însuți, cu alții, cu viața în general. Chiar și atunci când lucrezi individual, procesul
                      terapeutic e profund relațional.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 my-12">
                <p className="text-lg font-medium text-center text-foreground italic">
                  "Aici, în cabinetele noastre, nu există întrebări 'prea personale', emoții 'prea intense' sau povești
                  'prea complicate'. Există doar ființe umane curajoase care vor să trăiască autentic, să iubească și să
                  se conecteze cu ele însele."
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                Aware Connections Center suntem noi, Cosmin și Cristina. Ca echipă de terapeuți și parteneri în viață,
                înțelegem profund importanța unei conexiuni sigure și conștiente.
              </p>

              <p className="text-lg leading-relaxed">
                Chiar dacă folosim în practica noastră diverse forme de terapie, pe care le-am studiat de-a lungul
                anilor, preferăm perspectiva și tehnicile derivate din Terapia centrată pe emoții (EFT) aplicată la
                indivizi, cupluri și familii. EFT este mai mult decât o tehnică pentru noi - este o filosofie aliniată
                cu valorile noastre cu care rezonăm profund.
              </p>
            </div>
          </div>

          {/* Enhanced promises section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-center text-foreground mb-12">
              Promisiunea noastră pentru tine
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-4">Acceptare completă</h4>
                  <p className="text-foreground/80 leading-relaxed text-pretty">
                    Îți promitem că vei fi văzut, auzit și acceptat exact așa cum ești tu - nu după ce te vei
                    "îmbunătăți", nu după ce vei fi "vindecat", ci acum, în întreaga ta complexitate umană.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Compass className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-4">Instrumente pentru viață</h4>
                  <p className="text-foreground/80 leading-relaxed text-pretty">
                    Nu îți promitem că vei fi "vindecat" complet. Îți promitem că vei dezvolta o relație diferită cu
                    propriile experiențe și că vei căpăta instrumente cu care să navighezi prin provocările vieții cu
                    înțelepciune și compasiune.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-4">Durerea vindecării</h4>
                  <p className="text-foreground/80 leading-relaxed text-pretty">
                    Nu îți promitem că nu vei mai avea probleme. Îți promitem că vei putea discerne între durere și
                    suferință, pentru că "Durerea este inevitabilă, suferința este opțională".
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-12 text-center">
            <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-udqjlpU7DwJRE0py3lHd5uIP995u8i.png')] bg-cover bg-center opacity-10 rounded-2xl"></div>
            <div className="relative z-10">
              <blockquote className="text-xl md:text-2xl font-medium text-foreground italic mb-4">
                "În final, totul va fi bine. Dacă nu e bine, înseamnă că încă nu este finalul"
              </blockquote>
              <cite className="text-muted-foreground">- proverb indian</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
