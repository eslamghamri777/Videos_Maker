import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-lg font-bold text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-violet-500 text-base font-black text-slate-950">
            V
          </span>
          Videos Maker
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <Link href="/" className="transition hover:text-white">Home</Link>
          <Link href="/features" className="transition hover:text-white">Features</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/features" className="hidden rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-white transition hover:border-slate-500 sm:inline-flex">
            Explore
          </Link>
          <Link href="/" className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
            Start free
          </Link>
        </div>
      </div>
    </header>
  );
}
