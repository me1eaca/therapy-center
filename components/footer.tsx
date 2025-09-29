export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-semibold mb-2">Aware Connections Center</h3>
            <p className="text-background/80 italic">Un vis devenit realitate</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-3">Navigare</h4>
              <div className="space-y-2 text-sm">
                <a href="#acasa" className="block text-background/80 hover:text-background transition-colors">
                  Acasă
                </a>
                <a href="#despre-noi" className="block text-background/80 hover:text-background transition-colors">
                  Despre Noi
                </a>
                <a href="#servicii" className="block text-background/80 hover:text-background transition-colors">
                  Servicii
                </a>
                <a href="#contact" className="block text-background/80 hover:text-background transition-colors">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Servicii</h4>
              <div className="space-y-2 text-sm">
                <p className="text-background/80">Terapie de Cuplu (EFT)</p>
                <p className="text-background/80">Terapie Individuală (EFIT)</p>
                <p className="text-background/80">Consiliere Psihologică</p>
                <p className="text-background/80">Art-terapie</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <div className="space-y-2 text-sm">
                <p className="text-background/80">contact@awareconnections.ro</p>
                <p className="text-background/80">+40 XXX XXX XXX</p>
                <p className="text-background/80">Luni - Vineri: 9:00 - 19:00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8">
            <p className="text-sm text-background/60">© 2025 Aware Connections Center. Toate drepturile rezervate.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
