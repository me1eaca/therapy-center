# Configurare Perplexity AI Integration

## Pași de configurare

### 1. Obține API Key de la Perplexity

1. Mergi la [Perplexity AI](https://www.perplexity.ai/)
2. Creează un cont sau loghează-te
3. Navighează la secțiunea API
4. Generează un API key nou

### 2. Configurează variabilele de mediu

1. Creează un fișier `.env.local` în root-ul proiectului
2. Adaugă următoarea linie:

```env
PERPLEXITY_API_KEY=your_actual_api_key_here
```

### 3. Instalează dependențele (dacă nu sunt deja instalate)

```bash
npm install
# sau
pnpm install
```

### 4. Rulează aplicația

```bash
npm run dev
# sau
pnpm dev
```

### 5. Accesează funcționalitatea

- Navighează la `/cautare` în browser
- Sau folosește linkul "Căutare IA" din header

## Funcționalități

### Căutare Inteligentă
- Răspunsuri în română
- Specializat în terapie și psihologie
- Surse verificate
- Copiere rapidă a răspunsurilor

### Interfață Utilizator
- Design responsive
- Loading states
- Error handling
- Toast notifications

## Structura fișierelor

```
├── app/
│   ├── api/perplexity/route.ts    # API endpoint
│   └── cautare/page.tsx           # Pagina de căutare
├── components/
│   └── perplexity-search.tsx      # Componenta principală
└── env.example                    # Template pentru variabile de mediu
```

## Configurare avansată

### Personalizare prompt
Editează `app/api/perplexity/route.ts` pentru a modifica promptul sistemului:

```typescript
content: `Ești un asistent specializat în terapie, psihologie și dezvoltare personală. 
Răspunde în română, oferind informații precise, utile și actualizate. 
Fii empatic și oferă sugestii practice când este posibil.`
```

### Parametri API
Modifică parametrii din request-ul către Perplexity:

```typescript
{
  model: "llama-3.1-sonar-small-128k-online",
  max_tokens: 1000,
  temperature: 0.7,
  // ... alte parametri
}
```

## Troubleshooting

### Eroare "API key not configured"
- Verifică că fișierul `.env.local` există
- Verifică că variabila `PERPLEXITY_API_KEY` este setată corect
- Restartează serverul de dezvoltare

### Eroare "Failed to get response from Perplexity"
- Verifică că API key-ul este valid
- Verifică că ai credit disponibil în contul Perplexity
- Verifică conexiunea la internet

### Răspunsuri în engleză
- Verifică promptul sistemului în `route.ts`
- Asigură-te că promptul specifică "Răspunde în română"

## Securitate

- Nu comite niciodată API key-ul în git
- Folosește `.env.local` pentru variabilele de mediu
- Adaugă `.env.local` în `.gitignore`

## Costuri

Perplexity AI oferă un plan gratuit cu limitări. Verifică [pricing page](https://www.perplexity.ai/pricing) pentru detalii actualizate.
