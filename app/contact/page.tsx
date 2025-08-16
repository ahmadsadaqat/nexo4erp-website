// app/contact/page.tsx

import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <ContactForm />
    </main>
  );
}