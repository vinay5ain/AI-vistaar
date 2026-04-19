import { Card } from '../components/ui/Card.jsx'
import { SectionTitle } from '../components/ui/SectionTitle.jsx'

export function About() {
  return (
    <div className="space-y-20">

      {/* HEADER */}
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
          About AI VISTAAR
        </p>

        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[var(--color-ink)] sm:text-5xl">
          AI Vistaar – <span className="gradient-text">Vistaar of Technology</span>
        </h1>

        <p className="mt-4 text-lg text-[var(--color-ink-muted)]">
          A platform created for learners, by learners. We simplify the world of Artificial Intelligence so beginners can learn faster and stay inspired.
        </p>
      </header>

      {/* ABOUT SECTIONS */}
      <section className="grid gap-6 lg:grid-cols-2">

        <Card className="border-purple-500/20 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-500/5">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-600">
            About Section
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-[var(--color-ink)]">
            Learner-first AI education
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
            AI VISTAAR is built to make AI accessible. We remove jargon, provide simple examples, and help learners build strong fundamentals from day one.
          </p>
        </Card>

        <Card className="border-pink-500/20 bg-gradient-to-br from-pink-500/5 via-purple-600/5 to-blue-600/5">
          <p className="text-xs font-semibold uppercase tracking-widest text-pink-600">
            Website Purpose
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-[var(--color-ink)]">
            Share knowledge, simplify concepts
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
            We share AI knowledge, tools, and resources to build a strong learning community for beginners and curious minds.
          </p>
        </Card>

      </section>

      {/* FEATURES */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {[
          {
            title: 'Beginner-friendly',
            text: 'Simple explanations and structured learning for new learners.'
          },
          {
            title: 'Fast loading',
            text: 'Optimized UI for smooth performance on all devices.'
          },
          {
            title: 'Clean UI',
            text: 'Minimal and distraction-free design for better focus.'
          },
          {
            title: 'AI Focused',
            text: 'Built around modern AI learning and tools.'
          }
        ].map((item) => (
          <Card key={item.title} className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-600">
              {item.title}
            </p>
            <p className="mt-3 text-sm text-[var(--color-ink-muted)]">
              {item.text}
            </p>
          </Card>
        ))}

      </section>

      {/* STORY */}
      <section>
        <SectionTitle
          align="left"
          eyebrow="Story"
          title="From curiosity to innovation"
          subtitle="How AI VISTAAR started and what it stands for"
        />

        <div className="mt-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 shadow-[var(--shadow-soft)]">
          <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
            AI VISTAAR started with a simple goal — to make AI learning easy and accessible for everyone.
            What began as a small idea has now grown into a learning platform focused on simplifying complex concepts,
            helping students understand AI in a practical and beginner-friendly way.
          </p>
        </div>
      </section>

    </div>
  )
}