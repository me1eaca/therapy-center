import { Card, CardContent } from "@/components/ui/card"
import { Target, Microscope, HandHeart } from "lucide-react"

export function AboutTherapists() {
  return (
    <section id="despre-noi" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">
              De ce să alegi Aware Connections Center?
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Pentru că înțelegem că fiecare călătorie de vindecare este unică și merită respect, compasiune și
              expertiză profesională.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Abordare Personalizată</h3>
                <p className="text-muted-foreground text-sm">
                  Fiecare persoană și fiecare cuplu este unic. Adaptăm metodele la nevoile tale specifice, nu invers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Microscope className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Metode Dovedite Științific</h3>
                <p className="text-muted-foreground text-sm">
                  Folosim exclusiv tehnici cu eficacitate demonstrată: EFT, CBT, Schema Therapy, Art-terapie.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <HandHeart className="w-8 h-8 text-chart-2" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Echipă de Specialiști</h3>
                <p className="text-muted-foreground text-sm">
                  Peste 20 de ani de experiență combinată în terapie individuală și de cuplu.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-serif font-semibold">Formarea Noastră Continuă</h3>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Certificări și Specializări:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Terapia Centrată pe Emoții (EFT) - Nivel 3</li>
                      <li>• Psihoterapie Cognitiv-Comportamentală</li>
                      <li>• Schema Therapy</li>
                      <li>• Art-terapie și terapie expresivă</li>
                      <li>• Hipnoterapie clinică</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-accent-foreground">Dezvoltare Profesională:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Workshop-uri anuale internaționale</li>
                      <li>• Supervizare clinică continuă</li>
                      <li>• Cercetare în domeniul terapiei de cuplu</li>
                      <li>• Membru în asociații profesionale</li>
                      <li>• Publicații în reviste de specialitate</li>
                    </ul>
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
