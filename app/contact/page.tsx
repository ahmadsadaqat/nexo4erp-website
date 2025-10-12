import type React from "react"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export default function ContactPage() {
  const brandStyle = {
    // Using semantic tokens; keeping palette within 3-5 colors
    "--primary": "#42818C",
    "--primary-foreground": "white",
  } as React.CSSProperties

  return (
    <main style={brandStyle}>
      <section className="mx-auto max-w-5xl px-4 py-10 md:py-16">
        <div className="relative mb-8 md:mb-12 overflow-hidden rounded-xl bg-muted">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/office-bg.jpg)" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-background/70" aria-hidden="true" />
          <header className="relative z-10 p-6 md:p-10">
            <p className="text-sm text-muted-foreground">Get in touch</p>
            <h1 className="text-pretty text-3xl font-semibold tracking-tight md:text-4xl">Contact Us</h1>
            <p className="mt-2 max-w-prose text-muted-foreground">
              We’d love to hear from you. Fill out the form and we’ll get back within 1–2 business days.
            </p>
          </header>
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          <div className="md:col-span-2">
            <ContactInfo />
          </div>
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
