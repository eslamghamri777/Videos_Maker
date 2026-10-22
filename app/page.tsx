import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const features = [
  'AI-powered script generation',
  'Natural voiceovers and avatars',
  'Instant captions and edits',
  'Built for creators, teams, and brands',
];

const steps = [
  {
    number: '01',
    title: 'Describe your idea',
    text: 'Type a prompt, script, or topic and let the AI build a video strategy for you.',
  },
  {
    number: '02',
    title: 'Generate visuals',
    text: 'Create scenes, transitions, music, and voiceovers with a few clicks.',
  },
  {
    number: '03',
    title: 'Publish instantly',
    text: 'Export the final video in seconds and share it across all your channels.',
  },
];

const testimonials = [
  { quote: 'We replaced 3 editing tools with one creation workflow.', name: 'Aisha M.', role: 'Marketing Lead' },
  { quote: 'The AI script generator helped us ship content we normally never had time to make.', name: 'Noah K.', role: 'Content Creator' },
  { quote: 'It feels like having a full creative studio at my fingertips.', name: 'Leila S.', role: 'Startup Founder' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="bg-mesh">
        <SiteHeader />

        <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-200">
                AI video creation, simplified
              </div>

              <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Turn ideas into stunning videos in minutes.
              </h1>

              <p className="mt-6 max-w-xl text-lg text-slate-300">
                Videos Maker helps teams and creators generate high-quality videos using AI — from script to final export — without the complexity of traditional editing tools.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/features"
                  className="rounded-full bg-sky-500 px-6 py-3 text-center text-base font-semibold text-slate-950 transition hover:bg-sky-400"
                >
                  Explore Features
                </Link>
                <Link
                  href="#how-it-works"
                  className="rounded-full border border-slate-700 bg-slate-900/60 px-6 py-3 text-center text-base font-semibold text-white transition hover:border-slate-500"
                >
                  How it works
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-sky-400" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-500/30 via-purple-500/20 to-fuchsia-500/20 blur-3xl" />

              <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 p-5 shadow-glow">
                <div className="rounded-[1.5rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400" />
                      <span className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                    <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
                      AI Project
                    </span>
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                    <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                      <span>Prompt</span>
                      <span>Ready</span>
                    </div>
                    <p className="text-lg font-medium text-white">
                      “Create a cinematic product launch video for a new AI app.”
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Scenes</p>
                        <p className="mt-2 text-2xl font-bold text-sky-300">8</p>
                      </div>
                      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Voice</p>
                        <p className="mt-2 text-2xl font-bold text-violet-300">AI</p>
                      </div>
                    </div>

                    <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-violet-500" />
                    </div>
                    <p className="mt-3 text-right text-xs text-slate-400">Rendering 82%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">How it works</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">From prompt to publish in three steps</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/40">
              <div className="mb-6 inline-flex rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-sm font-semibold text-sky-300">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-slate-300">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/60 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Why creators choose us</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Built to make video creation effortless</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ['AI Script Builder', 'Generate scripts, hooks, and messaging that match your goal.'],
              ['Smart Editing', 'Trim, cut, and enhance clips with AI-assisted tools.'],
              ['Brand Consistency', 'Keep your colors, tone, and voice aligned across every video.'],
              ['Fast Export', 'Publish optimized versions for social, web, and campaigns.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-lg text-sky-300">
                  ✦
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Feedback</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Loved by creators and marketing teams</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <div className="mb-5 text-sky-300">★★★★★</div>
              <p className="text-lg leading-relaxed text-slate-200">“{item.quote}”</p>
              <div className="mt-8 border-t border-slate-800 pt-4">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-[2rem] border border-sky-500/30 bg-gradient-to-r from-sky-500/15 via-violet-500/10 to-fuchsia-500/15 p-8 text-center shadow-glow md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Ready to create?</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Build your next video with AI.</h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/features" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200">
              View all features
            </Link>
            <a href="mailto:hello@videosmaker.ai" className="rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 font-semibold text-white transition hover:border-slate-500">
              Contact sales
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
