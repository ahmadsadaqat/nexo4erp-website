"use client"

import type * as React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

type Status = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setStatus("submitting")

    const formData = new FormData(e.currentTarget)
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong.")
      }
      setStatus("success")
      e.currentTarget.reset()
    } catch (err: any) {
      setError(err?.message || "Unable to send message.")
      setStatus("error")
    }
  }

  const isSubmitting = status === "submitting"
  const isSuccess = status === "success"

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-balance">Send us a message</CardTitle>
        <CardDescription>We’ll respond as soon as possible.</CardDescription>
      </CardHeader>

      <form onSubmit={onSubmit} noValidate aria-describedby="form-status">
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Jane Doe" required aria-required="true" autoComplete="name" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              placeholder="jane@example.com"
              required
              aria-required="true"
              autoComplete="email"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">
              Message <span className="sr-only">(required)</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="How can we help?"
              required
              aria-required="true"
              rows={6}
            />
          </div>

          <div
            id="form-status"
            aria-live="polite"
            className={cn("min-h-5 text-sm", isSuccess ? "text-foreground" : "text-destructive")}
          >
            {isSubmitting && <span className="text-muted-foreground">Sending…</span>}
            {status === "error" && error}
            {status === "success" && "Thanks! Your message has been sent."}
          </div>
        </CardContent>

        <CardFooter>
          <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
            {isSubmitting ? "Sending…" : "Send message"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
