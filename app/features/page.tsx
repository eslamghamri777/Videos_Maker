import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const featureCards = [
  {
    title: 'AI Script Studio',
    text: 'Turn a simple idea into a structured, engaging script with narration cues, hooks, and scene flow.',
  },
  {
    title: 'Voice & Avatar Generation',
    text: 'Choose voices, visual styles, and AI presenters to make every video feel premium and customized.',
  },
  {
    title: 'Brand Templates',
    text: 'Create reusable templates with your colors, fonts, and visual identity for scale and consistency.',
  },
  {
    title: 'Smart Publishing',
    text: 'Export optimized versions for social platforms, websites, product launches, and digital campaigns.',
  },
  {
    title: 'Collaboration',
    text: 'Invite your team, review drafts, and create together without jumping between dozens of tools.',
  },
  {
    title: 'Performance Insights',
    text: 'Track engagement, completion, and results to refine your creative strategy and improve ROI.',
  },
];

const planFeatures = [
  'AI script generation',
  'Basic editing suite',
  'Social export presets',
  '3 videos per month',
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Features</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Create videos faster with a modern AI workflow</h1>
          <p className="mt-6 text-lg text-slate-300">
            Everything you need to ideate, generate, refine, and publish video content — all from one intuitive platform.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-xl text-sky-300">✦</div>
              <h2 className="text-2xl font-semibold text-white">{feature.title}</h2>
              <p className="mt-4 text-slate-300">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 md:p-12">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Plans</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Simple pricing for every stage</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                name: 'Starter',
                price: '$19',
                description: 'For individuals and solo creators',
                features: planFeatures,
              },
              {
                name: 'Pro',
                price: '$49',
                description: 'For growing teams and brands',
                features: [...planFeatures, 'Unlimited scene variations', 'Team collaboration'],
                featured: true,
              },
              {
                name: 'Studio',
                price: '$99',
                description: 'For marketing teams and agencies',
                features: [...planFeatures, 'Advanced analytics', 'Custom workflows'],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-6 ${
                  plan.featured
                    ? 'border-sky-500/40 bg-gradient-to-b from-sky-500/10 to-slate-900/60 shadow-glow'
                    : 'border-slate-800 bg-slate-950/60'
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{plan.name}</p>
                <div className="mt-5 flex items-end gap-2">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="pb-1 text-slate-400">/mo</span>
                </div>
                <p className="mt-4 text-slate-300">{plan.description}</p>
                <ul className="mt-6 space-y-3 text-slate-200">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/15 text-xs text-sky-300">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/"
                  className={`mt-8 block rounded-full px-5 py-3 text-center font-semibold transition ${
                    plan.featured
                      ? 'bg-sky-500 text-slate-950 hover:bg-sky-400'
                      : 'border border-slate-700 bg-slate-900 text-white hover:border-slate-500'
                  }`}
                >
                  Get started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
