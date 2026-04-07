import Image from "next/image"
import { Quote } from "lucide-react"

export function Therapists() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            Echipa noastră
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Oameni înainte de terapeuți
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Înainte să fim specialiști în Terapia Centrată pe Emoții, suntem un cuplu care a
            învățat pe propria piele ce înseamnă să construiești o conexiune autentică.
          </p>
        </div>

        {/* Cristina */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-28">
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/cristina_meleaca_new.png"
                alt="Cristina Meleacă — Psihoterapeut EFT"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-primary/10 -z-10" />
          </div>

          <div className="flex flex-col justify-center gap-6 lg:pt-8">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
                Psihoterapeut EFT · EFIT · Art-terapie
              </p>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-1">
                Cristina Meleacă
              </h3>
              <p className="text-muted-foreground text-sm">Felicia-Cristina Meleacă</p>
            </div>

            <blockquote className="border-l-2 border-primary pl-5 py-1">
              <Quote className="w-5 h-5 text-primary/40 mb-2" />
              <p className="text-foreground/80 italic leading-relaxed font-serif text-lg">
                „Am învățat că vindecarea nu înseamnă să devii perfect. Înseamnă să devii întreg.”
              </p>
            </blockquote>

            <div className="space-y-4 text-foreground/75 leading-relaxed">
              <p>
                Am început această călătorie cu cei mai vulnerabili — copii din sistemul de adopție
                care nu înțelegeau de ce nu sunt destul de buni ca să fie iubiți. Șapte ani alături
                de ei m-au învățat că trauma nu e doar despre ce ți se întâmplă, ci despre ce
                nu se întâmplă când ar trebui.
              </p>
              <p>
                Doisprezece ani ca și consilier școlar în CJRAE — alături de elevi, părinți și
                profesori — m-au convins că judecata nu vindecă pe nimeni, dar empatia poate face
                minuni. Că părintele dificil de azi a fost copilul rănit de ieri.
              </p>
              <p>
                Când am descoperit Terapia Centrată pe Emoții, am simțit că am găsit limba pe care
                inima mea o vorbea de ani de zile. EFT nu judecă, nu etichetează — pur și simplu
                îi ajută pe oameni să înțeleagă că emoțiile lor au sens și că merită să fie iubiți
                exact așa cum sunt.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-5">
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                Formare profesională
              </p>
              <ul className="space-y-1.5 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  Psihoterapie sistemică centrată pe emoții — formare lungă durată
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  Program formativ de bază în art-terapie — Phronetik
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  Terapie de familie centrată pe emoții · Formare continuă
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  EFT World Summit 2024 · Workshop trauma în EFT
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cosmin — layout inversat */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="flex flex-col justify-center gap-6 lg:pt-8 order-2 lg:order-1">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
                Psihoterapeut EFT · EFIT · Traumatologie
              </p>
              <h3 className="text-3xl font-serif font-bold text-foreground">
                Cosmin Meleacă
              </h3>
            </div>

            <blockquote className="border-l-2 border-primary pl-5 py-1">
              <Quote className="w-5 h-5 text-primary/40 mb-2" />
              <p className="text-foreground/80 italic leading-relaxed font-serif text-lg">
                „Am învățat că cea mai mare putere nu e să controlezi totul, ci să ai curajul
                să fii vulnerabil.”
              </p>
            </blockquote>

            <div className="space-y-4 text-foreground/75 leading-relaxed">
              <p>
                Am ajuns în psihologie pe un drum ocolit — șapte ani de jurnalism investigativ
                m-au învățat să citesc între rânduri, să văd durerea din spatele furiei, să înțeleg
                că fiecare comportament are o logică emoțională. Fără să știu, mă pregăteam.
              </p>
              <p>
                Cinci ani de coordonat programe de formare pentru adulți m-au convins că oamenii
                nu au nevoie să fie reparați — au nevoie să fie văzuți. În 2015 am luat decizia
                care mi-a transformat existența: am devenit psihoterapeut. Nu pentru că aveam toate
                răspunsurile, ci pentru că înțelesesem că întrebările mele personale mă făceau să
                înțeleg mai bine întrebările altora.
              </p>
              <p>
                Îmi place să fiu martor la primul moment în care un client realizează că nu e
                stricat — că pur și simplu e uman. Și la primul moment când un cuplu care nu
                își mai vorbise de luni reușește să se privească în ochi și să-și spună adevărul
                cu dragoste.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-5">
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                Formare profesională
              </p>
              <ul className="space-y-1.5 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  Terapia de Cuplu Centrată pe Emoții (EFT) · Extindere EFIT
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  Psihoterapie Cognitiv-Comportamentală · Hipnoterapie
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  Schema Therapy · Terapie Sistemică · Traumatologie
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  EFT World Summit 2024 · Violența în cuplu · Sexualitate în terapie
                </li>
              </ul>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/cosmin_meleaca_1.jpg"
                alt="Cosmin Meleacă — Psihoterapeut EFT"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-primary/10 -z-10" />
          </div>
        </div>

        {/* Citat comun */}
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <div className="bg-secondary rounded-2xl p-10">
            <Quote className="w-8 h-8 text-primary/40 mx-auto mb-4" />
            <p className="text-xl font-serif text-foreground leading-relaxed mb-6">
              „Suntem dovada vie că relațiile pot fi vindecate, că intimitatea poate fi
              construită și că dragostea poate să crească chiar și după ani de zile împreună.”
            </p>
            <p className="text-sm font-semibold tracking-widest uppercase text-primary">
              Cristina &amp; Cosmin Meleacă
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}