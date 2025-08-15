import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm bg-white/70 dark:bg-slate-900/70 border-b border-teal-500/8 dark:border-teal-500/20">
      <div className="container mx-auto px-5 max-w-[1150px]">
        <nav className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2.5">
            <Link href="/" title="Nexo4 ERP">
              <Image src="/logo.svg" alt="Nexo4 ERP Logo" width={136} height={34} className="h-[34px] w-auto" />
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            {[
              { href: "/", label: "Home" },
              { href: "/features", label: "Features" },
              { href: "/industries", label: "Industries" },
              { href: "/about", label: "About" },
              { href: "/careers", label: "Careers" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-800 dark:text-slate-200 font-semibold ml-4.5 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              asChild
              variant="outline"
              className="bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-400 border-teal-500/15 dark:border-teal-500/30 shadow-lg hover:-translate-y-0.5 transition-transform"
            >
              <Link href="/contact">Book a Demo</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
