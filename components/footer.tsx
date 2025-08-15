import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-7 text-slate-600 dark:text-slate-400">
      <div className="container mx-auto px-5 max-w-[1150px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-700 dark:text-slate-300">© 2025 Nexo4 ERP. All rights reserved.</div>
          <div className="flex gap-3">
            <Link href="https://www.linkedin.com/company/nexo4erp" className="text-slate-600 dark:text-slate-400 hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
              LinkedIn
            </Link>
            <Link href="http://instagram.com/nexo4erp" className="text-slate-600 dark:text-slate-400 hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
