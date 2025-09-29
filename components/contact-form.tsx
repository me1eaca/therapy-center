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
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-4">Contact</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />  +40 726 281 554 - Cosmin
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />  +40 728 954 712 - Cristina
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" /> office@awareconnections.eu
                    </p>
                    <div className="mt-4 text-sm">
                      <p className="font-semibold text-foreground">Aware Connections Center</p>
                      <p>Str. Grivița 78</p>
                      <p>Călărași, județul Călărași</p>
                      <p>România</p>
                    </div>
                    <div className="mt-4">
                      <div className="relative">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424.1458552528441!2d27.32654568210206!3d44.19593913669462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b0230013ecea45%3A0x5099e5a33828dfb0!2sAware%20Connections%20Center!5e1!3m2!1sen!2sro!4v1759175477468!5m2!1sen!2sro" 
                          width="100%" 
                          height="200" 
                          style={{border:0}} 
                          allowFullScreen 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          className="rounded"
                        ></iframe>
                        <a 
                          href="https://www.google.com/maps/dir/?api=1&destination=44.19593913669462,27.32654568210206"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-200 rounded cursor-pointer"
                        >
                          <div className="bg-white px-3 py-1 rounded shadow-md opacity-0 hover:opacity-100 transition-opacity">
                            <span className="text-xs font-medium text-gray-700">Click pentru direcții</span>
                          </div>
                        </a>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        Click pe hartă pentru direcții
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-4">Chat WhatsApp</h3>
                  <div className="space-y-3">
                    <a 
                      href="https://wa.me/40726281554" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      +40 726 281 554 - Cosmin
                    </a>
                    <a 
                      href="https://wa.me/40728954712" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      +40 728 954 712 - Cristina
                    </a>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Ne poți adresa și în WhatsApp întrebările tale
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Răspundem de obicei în câteva ore în timpul săptămânii
                    </p>
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
