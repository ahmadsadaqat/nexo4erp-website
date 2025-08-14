"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thanks! We will contact you shortly.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <main className="container mx-auto px-5 max-w-[1150px]">
      <section className="py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Contact Us</h1>
        <p className="text-slate-600 text-lg mb-8 max-w-3xl">
          We&apos;d love to learn about your processes and show you a tailored demo.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-3 max-w-lg">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white border-teal-500/20 focus:border-teal-600 focus:ring-teal-600/25"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white border-teal-500/20 focus:border-teal-600 focus:ring-teal-600/25"
          />
          <Textarea
            name="message"
            placeholder="Tell us about your use case…"
            value={formData.message}
            onChange={handleChange}
            required
            className="min-h-[120px] bg-white border-teal-500/20 focus:border-teal-600 focus:ring-teal-600/25"
          />
          <Button type="submit" className="bg-teal-700 hover:bg-teal-800 text-white">
            Send Message
          </Button>
        </form>

        <div className="mt-6 text-slate-500">
          Email: nexo4brother@gmail.com • Phone: 0313-4859727 • Website: nexo4erp.com
        </div>
      </section>
    </main>
  )
}
