import Image from "next/image"
import { Quote } from "lucide-react"

export function Therapists() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            Echipa noastrÄƒ
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Oameni Ã®nainte de terapeuÈ›i
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            ÃŽnainte sÄƒ fim specialiÈ™ti Ã®n Terapia CentratÄƒ pe EmoÈ›ii, suntem un cuplu care a
            Ã®nvÄƒÈ›at pe propria piele ce Ã®nseamnÄƒ sÄƒ construieÈ™ti o conexiune autenticÄƒ.
          </p>
        </div>

        {/* Cristina */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-28">
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/cristina_meleaca_new.png"
                alt="Cristina MeleacÄƒ â€” Psihoterapeut EFT"
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
                Psihoterapeut EFT Â· EFIT Â· Art-terapie
              </p>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-1">
                Cristina MeleacÄƒ
              </h3>
              <p className="text-muted-foreground text-sm">Felicia-Cristina MeleacÄƒ</p>
            </div>

            <blockquote className="border-l-2 border-primary pl-5 py-1">
              <Quote className="w-5 h-5 text-primary/40 mb-2" />
              <p className="text-foreground/80 italic leading-relaxed font-serif text-lg">
                â€žAm Ã®nvÄƒÈ›at cÄƒ vindecarea nu Ã®nseamnÄƒ sÄƒ devii perfect. ÃŽnseamnÄƒ sÄƒ devii Ã®ntreg."
              </p>
            </blockquote>

            <div className="space-y-4 text-foreground/75 leading-relaxed">
              <p>
                Am Ã®nceput aceastÄƒ cÄƒlÄƒtorie cu cei mai vulnerabili â€” copii din sistemul de adopÈ›ie
                care nu Ã®nÈ›elegeau de ce nu sunt destul de buni ca sÄƒ fie iubiÈ›i. È˜apte ani alÄƒturi
                de ei m-au Ã®nvÄƒÈ›at cÄƒ trauma nu e doar despre ce È›i se Ã®ntÃ¢mplÄƒ, ci despre ce
                nu se Ã®ntÃ¢mplÄƒ cÃ¢nd ar trebui.
              </p>
              <p>
                Doisprezece ani ca È™i consilier È™colar Ã®n CJRAE â€” alÄƒturi de elevi, pÄƒrinÈ›i È™i
                profesori â€” m-au convins cÄƒ judecata nu vindecÄƒ pe nimeni, dar empatia poate face
                minuni. CÄƒ pÄƒrintele dificil de azi a fost copilul rÄƒnit de ieri.
              </p>
              <p>
                CÃ¢nd am descoperit Terapia CentratÄƒ pe EmoÈ›ii, am simÈ›it cÄƒ am gÄƒsit limba pe care
                inima mea o vorbea de ani de zile. EFT nu judecÄƒ, nu eticheteazÄƒ â€” pur È™i simplu
                Ã®i ajutÄƒ pe oameni sÄƒ Ã®nÈ›eleagÄƒ cÄƒ emoÈ›iile lor au sens È™i cÄƒ meritÄƒ sÄƒ fie iubiÈ›i
                exact aÈ™a cum sunt.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-5">
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                Formare profesionalÄƒ
              </p>
              <ul className="space-y-1.5 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  Psihoterapie sistemicÄƒ centratÄƒ pe emoÈ›ii â€” formare lungÄƒ duratÄƒ
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  Program formativ de bazÄƒ Ã®n art-terapie â€” Phronetik
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  Terapie de familie centratÄƒ pe emoÈ›ii Â· Formare continuÄƒ
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  EFT World Summit 2024 Â· Workshop trauma Ã®n EFT
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cosmin â€” layout inversat */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="flex flex-col justify-center gap-6 lg:pt-8 order-2 lg:order-1">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
                Psihoterapeut EFT Â· EFIT Â· Traumatologie
              </p>
              <h3 className="text-3xl font-serif font-bold text-foreground">
                Cosmin MeleacÄƒ
              </h3>
            </div>

            <blockquote className="border-l-2 border-primary pl-5 py-1">
              <Quote className="w-5 h-5 text-primary/40 mb-2" />
              <p className="text-foreground/80 italic leading-relaxed font-serif text-lg">
                â€žAm Ã®nvÄƒÈ›at cÄƒ cea mai mare putere nu e sÄƒ controlezi totul, ci sÄƒ ai curajul
                sÄƒ fii vulnerabil."
              </p>
            </blockquote>

            <div className="space-y-4 text-foreground/75 leading-relaxed">
              <p>
                Am ajuns Ã®n psihologie pe un drum ocolit â€” È™apte ani de jurnalism investigativ
                m-au Ã®nvÄƒÈ›at sÄƒ citesc Ã®ntre rÃ¢nduri, sÄƒ vÄƒd durerea din spatele furiei, sÄƒ Ã®nÈ›eleg
                cÄƒ fiecare comportament are o logicÄƒ emoÈ›ionalÄƒ. FÄƒrÄƒ sÄƒ È™tiu, mÄƒ pregÄƒteam.
              </p>
              <p>
                Cinci ani de coordonat programe de formare pentru adulÈ›i m-au convins cÄƒ oamenii
                nu au nevoie sÄƒ fie reparaÈ›i â€” au nevoie sÄƒ fie vÄƒzuÈ›i. ÃŽn 2015 am luat decizia
                care mi-a transformat existenÈ›a: am devenit psihoterapeut. Nu pentru cÄƒ aveam toate
                rÄƒspunsurile, ci pentru cÄƒ Ã®nÈ›elesesem cÄƒ Ã®ntrebÄƒrile mele personale mÄƒ fÄƒceau sÄƒ
                Ã®nÈ›eleg mai bine Ã®ntrebÄƒrile altora.
              </p>
              <p>
                ÃŽmi place sÄƒ fiu martor la primul moment Ã®n care un client realizeazÄƒ cÄƒ nu e
                stricat â€” cÄƒ pur È™i simplu e uman. È˜i la primul moment cÃ¢nd un cuplu care nu
                Ã®È™i mai vorbise de luni reuÈ™eÈ™te sÄƒ se priveascÄƒ Ã®n ochi È™i sÄƒ-È™i spunÄƒ adevÄƒrul
                cu dragoste.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-5">
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                Formare profesionalÄƒ
              </p>
              <ul className="space-y-1.5 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  Terapia de Cuplu CentratÄƒ pe EmoÈ›ii (EFT) Â· Extindere EFIT
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  Psihoterapie Cognitiv-ComportamentalÄƒ Â· Hipnoterapie
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  Schema Therapy Â· Terapie SistemicÄƒ Â· Traumatologie
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  EFT World Summit 2024 Â· ViolenÈ›a Ã®n cuplu Â· Sexualitate Ã®n terapie
                </li>
              </ul>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/cosmin_meleaca_1.jpg"
                alt="Cosmin MeleacÄƒ â€” Psihoterapeut EFT"
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
              â€žSuntem dovada vie cÄƒ relaÈ›iile pot fi vindecate, cÄƒ intimitatea poate fi
              construitÄƒ È™i cÄƒ dragostea poate sÄƒ creascÄƒ chiar È™i dupÄƒ ani de zile Ã®mpreunÄƒ."
            </p>
            <p className="text-sm font-semibold tracking-widest uppercase text-primary">
              Cristina &amp; Cosmin MeleacÄƒ
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}