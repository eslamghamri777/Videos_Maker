export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row lg:px-8">
        <p>© 2026 Videos Maker. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="mailto:hello@videosmaker.ai" className="hover:text-white">Contact</a>
          <a href="/features" className="hover:text-white">Features</a>
        </div>
      </div>
    </footer>
  );
}
