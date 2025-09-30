export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
    role: string
  }
  date: string
  readTime: string
  category: string
  featuredImage: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "pas-in-trei",
    title: "Pas în trei",
    excerpt: "Relațiile sunt ca un dans la doi. Când ne confruntăm cu dificultăți, învățăm să ne înțelegem ritmul.",
    author: {
      name: "Cristina Mihalache",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      role: "Psihoterapeut EFT"
    },
    date: "2025-01-15",
    readTime: "8 min",
    category: "Relații",
    featuredImage: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop",
    content: `
# Pas în trei

Relațiile sunt ca un dans la doi. Când ne confruntăm cu dificultăți, învățăm să ne înțelegem ritmul, să ne adaptăm pașii și să creăm împreună o armonie unică. Dar ce se întâmplă când dansul devine complicat, când pașii nu se mai potrivesc și când simțim că ne călcăm pe picioare?

## Ciclul emoțional în relații

În terapia de cuplu centrată pe emoții (EFT), identificăm patternuri repetitive care ne blochează în relații. Acestea sunt ca și cum am dansa aceiași pași, așteptându-ne la rezultate diferite.

### Pașii dansului emoțional:

**Pas 1: Nevoia ascunsă**
Fiecare dintre noi avem nevoi emoționale fundamentale - să fim văzuți, înțeleși, iubiți. Când aceste nevoi nu sunt satisfăcute, simțim o amenințare la adresa siguranței noastre emoționale.

**Pas 2: Emoția primară**
Sub comportamentele pe care le arătăm partenerului se ascund emoții primare - frică, tristețe, vulnerabilitate. Aceste emoții sunt adesea ascunse, chiar și de noi înșine.

**Pas 3: Reacția secundară**
Pentru a ne proteja de vulnerabilitate, adoptăm comportamente defensive - critică, retragere, atacare. Acestea sunt "pașii" pe care partenerul îi vede, dar care ascund adevărata emoție.

## Reconectarea prin vulnerabilitate

Terapia EFT ne învață să încetim dansul defensiv și să învățăm pași noi - pași bazați pe vulnerabilitate și autenticitate.

### Cum schimbăm pașii?

1. **Identificăm ciclul negativ** - Recunoaștem pașii repetitivi care ne îndepărtează
2. **Accesăm emoțiile primare** - Descoperim temerile și nevoile ascunse
3. **Împărtășim vulnerabilitatea** - Comunicăm autentic cu partenerul
4. **Creăm experiențe corective** - Învățăm să răspundem diferit la nevoile celuilalt

## Un dans nou

Când ambii parteneri înțeleg dansul lor emoțional și aleg să fie vulnerabili, magic se creează o nouă coregrafie - una bazată pe siguranță, încredere și conexiune autentică.

În cabinetul nostru, creăm spațiul sigur pentru a explora acești pași împreună. Nu este vorba despre a găsi pe cineva vinovat sau despre a schimba cine suntem. Este vorba despre a învăța să dansăm împreună, cu pași care ne aduc aproape, nu ne despart.

---

*Dacă simți că dansul din relația ta a devenit prea complicat, suntem aici să vă ajutăm să găsiți din nou ritmul.*
`
  }
]

export function getAllPosts(): BlogPost[] {
  return blogPosts
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category)
}

export function getRelatedPosts(currentSlug: string, category: string, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit)
}
