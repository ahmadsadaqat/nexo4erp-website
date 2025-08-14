import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-7 text-slate-600">
      <div className="container mx-auto px-5 max-w-[1150px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© 2025 Nexo4 ERP. All rights reserved.</div>
          <div className="flex gap-3">
            <Link href="#" className="text-slate-600 hover:text-teal-700 transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-slate-600 hover:text-teal-700 transition-colors">
              Facebook
            </Link>
            <Link href="#" className="text-slate-600 hover:text-teal-700 transition-colors">
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
