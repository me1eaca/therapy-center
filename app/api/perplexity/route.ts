import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json()

    if (!query) {
      return NextResponse.json(
        { error: "Query is required" },
        { status: 400 }
      )
    }

    const apiKey = process.env.PERPLEXITY_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        { error: "Perplexity API key not configured" },
        { status: 500 }
      )
    }

    // Call Perplexity API
    const response = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-sonar-small-128k-online",
        messages: [
          {
            role: "system",
            content: `Ești un asistent specializat în terapie, psihologie și dezvoltare personală. 
            Răspunde în română, oferind informații precise, utile și actualizate. 
            Fii empatic și oferă sugestii practice când este posibil.`
          },
          {
            role: "user",
            content: query
          }
        ],
        max_tokens: 1000,
        temperature: 0.7,
        return_citations: true,
        search_domain_filter: ["perplexity.ai"],
        return_images: false,
        return_related_questions: false,
        search_recency_filter: "month",
        top_p: 0.9,
        stream: false
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("Perplexity API error:", errorData)
      return NextResponse.json(
        { error: "Failed to get response from Perplexity" },
        { status: response.status }
      )
    }

    const data = await response.json()
    
    // Extract answer and sources from the response
    const answer = data.choices?.[0]?.message?.content || "Nu s-a putut obține un răspuns."
    const citations = data.citations || []
    
    // Format sources
    const sources = citations.map((citation: any) => ({
      title: citation.title || "Sursă necunoscută",
      url: citation.url || "#",
      snippet: citation.snippet || ""
    }))

    return NextResponse.json({
      answer,
      sources
    })

  } catch (error) {
    console.error("Perplexity API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
