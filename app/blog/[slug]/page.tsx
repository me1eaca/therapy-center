"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReadingProgressBar } from "@/components/blog/reading-progress-bar"
import { ShareButtons } from "@/components/blog/share-buttons"
import { Newsletter } from "@/components/blog/newsletter"
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-data"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown"

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Articol negăsit</h1>
          <Link href="/blog">
            <Button>Înapoi la Blog</Button>
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3)
  const currentUrl = typeof window !== "undefined" ? window.location.href : ""

  return (
    <main className="min-h-screen bg-background">
      <ReadingProgressBar />
      <Header />

      {/* Back Button */}
      <div className="container mx-auto max-w-4xl px-4 pt-8">
        <Link href="/blog">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Înapoi la Blog
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <article className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-3">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-foreground">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.date).toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>

            <div className="flex items-center gap-1">
              <Clock className="w-5 h-5" />
              <span>{post.readTime} citire</span>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mb-8">
            <ShareButtons title={post.title} url={currentUrl} />
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12" style={{ textAlign: 'justify' }}>
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-serif font-bold mt-8 mb-4 text-foreground">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-serif font-semibold mt-8 mb-4 text-primary">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="text-foreground/80 leading-relaxed mb-4">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">{children}</blockquote>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-foreground">{children}</strong>
                ),
                hr: () => (
                  <hr className="my-8 border-t-2 border-border" />
                ),
                a: ({ href, children }) => (
                  <a 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {children}
                  </a>
                ),
                em: ({ children }) => (
                  <em className="italic text-muted-foreground">{children}</em>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Share Buttons (Bottom) */}
          <div className="py-8 border-t border-b border-border mb-12">
            <p className="text-sm text-muted-foreground mb-4">A fost util acest articol?</p>
            <ShareButtons title={post.title} url={currentUrl} />
          </div>

          {/* Newsletter */}
          <Newsletter />

          {/* Author Bio */}
          <div className="bg-secondary/30 rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={96}
                height={96}
                className="rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Despre {post.author.name}</h3>
                <p className="text-muted-foreground mb-4">{post.author.role}</p>
                <p className="text-foreground/80 leading-relaxed">
                  Psihoterapeut specializat în Terapia Centrată pe Emoții (EFT), dedicat ajutorării cuplurilor și indivizilor să creeze conexiuni autentice și sănătoase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 bg-secondary/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">
              Articole similare
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                  <article className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium mb-3 w-fit">
                        {relatedPost.category}
                      </span>

                      <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>

                      <p className="text-muted-foreground text-sm flex-1 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>

                      <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
