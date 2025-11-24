"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQsPage() {
  const faqs = [
    {
      question: "What is Nexo4 ERP?",
      answer: "Nexo4 ERP is a comprehensive Enterprise Resource Planning solution designed to streamline business operations, including finance, inventory, sales, HR, and more, into a single integrated platform."
    },
    {
      question: "Is Nexo4 ERP suitable for small businesses?",
      answer: "Yes! Nexo4 ERP is built with modularity in mind. You can start with the essential modules you need and scale up as your business grows."
    },
    {
      question: "Can I customize the workflows?",
      answer: "Absolutely. We understand that every business is unique. Our platform allows for extensive customization of workflows, reports, and forms to match your specific operational requirements."
    },
    {
      question: "Is my data secure?",
      answer: "Security is our top priority. We use industry-standard encryption, regular backups, and strict access controls to ensure your data remains safe and confidential."
    },
    {
      question: "Do you offer implementation support?",
      answer: "Yes, we provide end-to-end implementation support, including data migration, user training, and post-launch assistance to ensure a smooth transition."
    },
    {
      question: "How is pricing determined?",
      answer: "Our pricing is tailored based on the modules you need, the number of users, and the level of customization required. Contact our sales team for a personalized quote."
    }
  ]

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background py-24">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/20 via-background to-background pointer-events-none" />

      <div className="container mx-auto px-5 max-w-[1150px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Everything you need to know about Nexo4 ERP. Can't find the answer you're looking for? <a href="/contact" className="text-teal-600 hover:underline font-medium">Contact us</a>.
            </p>
          </div>

          <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-slate-200 dark:border-slate-800">
                  <AccordionTrigger className="text-left text-lg font-medium text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors px-2">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 dark:text-slate-300 leading-relaxed px-2 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
