import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail } from "lucide-react"

export function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-serif font-bold mb-4">Formular de Contact</h2>
                <p className="text-muted-foreground text-balance">
                  Completează formularul de mai jos și te vom contacta în cel mult 24 de ore.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nume *</Label>
                    <Input id="name" placeholder="Numele tău complet" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon *</Label>
                    <Input id="phone" type="tel" placeholder="Numărul tău de telefon" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="Adresa ta de email" required />
                </div>

                <div className="space-y-3">
                  <Label>Sunt interesat de: *</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="individual" />
                      <Label htmlFor="individual" className="text-sm font-normal">
                        Terapie individuală
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="couple" />
                      <Label htmlFor="couple" className="text-sm font-normal">
                        Terapie de cuplu
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="consultation" />
                      <Label htmlFor="consultation" className="text-sm font-normal">
                        Consultație inițială (pentru a vedea dacă suntem potriviți)
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mesajul tău</Label>
                  <Textarea
                    id="message"
                    placeholder="Povestește-ne pe scurt despre situația ta sau întrebările pe care le ai. Nu e nevoie să intri în detalii - doar ce simți că e important să știm pentru primul nostru contact."
                    rows={5}
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="privacy" required />
                  <Label htmlFor="privacy" className="text-sm font-normal text-muted-foreground">
                    Sunt de acord cu prelucrarea datelor personale în conformitate cu politica de confidențialitate și
                    înțeleg că informațiile vor fi folosite exclusiv pentru contactul profesional. *
                  </Label>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Trimite Mesajul
                </Button>

                <div className="text-center pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground italic text-balance">
                    "Primul pas spre vindecare este curajul de a recunoaște că ai nevoie de sprijin. Tu ai făcut deja
                    acest pas ajungând aici."
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Contact Direct</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />  +40 726 281 554 - Cosmin
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />  +40 728 954 712 - Cristina
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4" /> office@awareconnections.eu
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Contactează-ne pe WhatsApp</h3>
                  <div className="space-y-3">
                    <a 
                      href="https://wa.me/40726281554" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                    >
                      <Phone className="w-4 h-4" />  +40 726 281 554 - Cosmin
                    </a>
                    <a 
                      href="https://wa.me/40728954712" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                    >
                      <Phone className="w-4 h-4" />  +40 728 954 712 - Cristina
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
