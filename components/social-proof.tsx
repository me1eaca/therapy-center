import { Card, CardContent } from "@/components/ui/card"
import { User, HandHeart, Heart, Microscope } from "lucide-react"
import Image from "next/image"

export function SocialProof() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-balance">
            "Dar cum să știu că sunteți oamenii potriviți pentru mine?"
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-left">
              <CardContent className="p-8">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 mx-auto relative">
                  <Image
                    src="/images/cosmin_meleaca_1.jpg"
                    alt="Cosmin Meleacă"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Cosmin Meleacă</h3>
                <p className="text-muted-foreground mb-4">
                  Specialist în psihoterapie cognitiv-comportamentală, hipnoterapie și Schema Therapy, cu o pasiune
                  deosebită pentru Terapia de Cuplu Centrată pe Emoții (EFT).
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm italic">
                    "Cred că fiecare persoană are în ea resurse uriașe de vindecare. Rolul meu este să te ajut să le
                    descoperi."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-left">
              <CardContent className="p-8">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 mx-auto relative">
                  <Image
                    src="/images/cristina_meleaca.jpg"
                    alt="Cristina Meleacă"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Cristina Meleacă</h3>
                <p className="text-muted-foreground mb-4">
                  Peste 20 de ani de experiență în consiliere psihologică, specializată în terapia centrată pe emoții,
                  art-terapie și consiliere cognitiv-comportamentală.
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm italic">
                    "Vindecarea începe când te simți cu adevărat văzut și acceptat. Aici, în siguranță, poți fi tu
                    însuți."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Să ne cunoști mai bine:</h3>
              <div className="space-y-4 text-left">
                <p className="text-foreground">
                  <strong>Suntem Cosmin și Cristina Meleacă - o echipă de terapeuți și parteneri în viață.</strong>
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <HandHeart className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium">Înțelegem din experiență proprie</p>
                    <p className="text-xs text-muted-foreground">
                      cât de provocatoare poate fi construirea unei relații sănătoase
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <Heart className="w-6 h-6 text-red-500" />
                    </div>
                    <p className="text-sm font-medium">Nu te vom judeca niciodată</p>
                    <p className="text-xs text-muted-foreground">
                      am trecut și noi prin provocări și știm că fiecare poveste merită respect
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <Microscope className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium">Folosim doar metode dovedite științific</p>
                    <p className="text-xs text-muted-foreground">
                      nu "sfaturi de bunătate", ci tehnici care funcționează cu adevărat
                    </p>
                  </div>
                </div>

                <p className="text-foreground">
                  <strong>Amândoi ne perfecționăm constant</strong> - participăm anual la seminarii și workshop-uri în
                  țară și străinătate pentru a fi la curent cu cele mai eficiente metode.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
