"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAllPosts } from "@/lib/blog-data"
import { Search, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const allPosts = getAllPosts()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Get unique categories
  const categories = Array.from(new Set(allPosts.map(post => post.category)))

  // Filter posts
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-pink-50/30">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Blog
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Explorează articole despre relații, terapie și dezvoltare personală
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 border-b bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Caută articole..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => setSelectedCategory(null)}
                variant={selectedCategory === null ? "default" : "outline"}
                className={selectedCategory === null ? "bg-gradient-to-r from-pink-600 to-purple-600" : ""}
              >
                Toate
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "bg-gradient-to-r from-pink-600 to-purple-600" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">Nu am găsit articole care să corespundă criteriilor.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group">
                    {/* Featured Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="text-xl font-serif font-semibold mb-3 group-hover:text-pink-600 transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-3 mt-4">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <div className="text-sm">
                          <p className="font-medium text-gray-900">{post.author.name}</p>
                          <p className="text-gray-500">{post.author.role}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
