import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">

          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold">Aware Connections Center</h3>
            <p className="text-background/60 italic text-sm leading-relaxed">
              „Bun venit acasă la tine însuți."
            </p>
            <p className="text-background/50 text-xs leading-relaxed">
              Cosmin & Cristina Meleacă<br />
              Psihoterapeuți specializați în EFT și EFIT
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-widest uppercase text-background/50">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:office@awareconnections.eu"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  office@awareconnections.eu
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/40728954712"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  Cristina · WhatsApp · +40728954712
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/40726281554"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  Cosmin · WhatsApp · +40726281554
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-background/70 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Str. Grivița 78, Călărași<br />Online și în cabinet</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Servicii */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-widest uppercase text-background/50">
              Servicii
            </h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Terapie de cuplu (EFT)</li>
              <li>Terapie individuală (EFIT)</li>
              <li>Terapie de familie</li>
              <li>Traumatologie</li>
              <li>Terapie adolescenți</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-xs text-background/40">
            © 2025 Aware Connections Center · Toate drepturile rezervate
          </p>
        </div>
      </div>
    </footer>
  )
}