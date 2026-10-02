import CheckoutButton from "./components/CheckoutButton";
import ContactLink from "./components/ContactLink";

const INCLUDED = [
  "One Python hot-path dependency (or named bottleneck) rewritten in Rust via PyO3",
  "Drop-in wheel packaged for your target Python / platform matrix (abi3 where practical)",
  "Import-compatible API when feasible — often zero call-site changes",
  "Migration notes: install, verify, and roll forward",
  "Rollback plan: keep the pure-Python path available until you cut over",
  "Same playbook as the public sample (see proof below)",
];

const OUT_OF_SCOPE = [
  "Full application rewrites or multi-module migrations",
  "SaaS hosting, auth, dashboards, or ongoing retainers",
  "Guaranteeing a specific speedup ratio on your hardware",
  "Non-Python runtimes or language ports outside the agreed hot path",
  "Long-term maintenance beyond delivery of the wheel + notes",
];

const TIMELINE = [
  {
    day: "Day 0–1",
    title: "Scope lock",
    body: "You name one dependency or bottleneck. We confirm API surface, platforms, and success criteria.",
  },
  {
    day: "Day 2–4",
    title: "Rust/PyO3 build",
    body: "Implement the hot path in Rust, expose it with PyO3, and produce a drop-in wheel.",
  },
  {
    day: "Day 5–6",
    title: "Verify & document",
    body: "Smoke tests against your agreed cases, migration notes, and a clear rollback path.",
  },
  {
    day: "Day 7",
    title: "Handoff",
    body: "Deliver wheel artifact(s), notes, and next steps. Fixed price: $199.",
  },
];

const FAQ = [
  {
    q: "What exactly do I get for $199?",
    a: "One hot-path dependency (or named bottleneck) turned into a Rust/PyO3 drop-in wheel, plus migration notes and a rollback plan — same playbook as the public sample.",
  },
  {
    q: "Will my imports stay the same?",
    a: "When the original package API allows it, yes. The sample keeps `from rfc3339_validator import validate_rfc3339` unchanged. If your API cannot be mirrored 1:1, we agree on the shim before work starts.",
  },
  {
    q: "Do you guarantee a 5–7× speedup?",
    a: "No. The sample median speedups (5.81×–6.83×) are machine- and artifact-specific (Apple M4 Pro, macOS, CPython 3.14.6, abi3 wheel) from that repo’s BENCHMARK.md. Your results depend on the workload, CPU, and Python build.",
  },
  {
    q: "What if it doesn’t fit in 7 days?",
    a: "We lock a narrow scope on Day 0–1. If the hot path is too large for a fixed $199 / 7-day delivery, we say so before you pay and either shrink scope or decline.",
  },
  {
    q: "How do I buy / contact?",
    a: "Use Buy for $199 when checkout is configured, or email the contact address on this page. No account or SaaS signup required.",
  },
];

export default function Home() {
  return (
    <>
      <header className="section-pad border-b border-card-border/80">
        <div className="container-narrow flex items-center justify-between gap-4 py-4">
          <a href="#top" className="font-semibold tracking-tight">
            Rust<span className="text-accent">/PyO3</span> Hot-Path
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted sm:flex">
            <a href="#included" className="hover:text-foreground">
              Included
            </a>
            <a href="#proof" className="hover:text-foreground">
              Proof
            </a>
            <a href="#timeline" className="hover:text-foreground">
              Timeline
            </a>
            <a href="#faq" className="hover:text-foreground">
              FAQ
            </a>
          </nav>
          <CheckoutButton />
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="section-pad relative overflow-hidden py-16 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(245,158,11,0.25), transparent)",
            }}
          />
          <div className="container-narrow relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="badge mb-5">
                Fixed price · One dependency · 7-day playbook
              </span>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
                Python hot path too slow?{" "}
                <span className="text-accent">$199</span> for a Rust/PyO3
                drop-in.
              </h1>
              <p className="prose-muted mt-6 max-w-2xl text-lg">
                You pick <strong className="text-foreground">one</strong> hot-path
                dependency (or named bottleneck). I deliver a Rust/PyO3 wheel you
                can install like any other package, plus migration notes and a
                rollback plan — same playbook as the public sample below.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <CheckoutButton size="lg" />
                <a href="#proof" className="btn-secondary">
                  See sample proof
                </a>
              </div>
              <p className="mt-4 text-sm text-muted">
                Questions?{" "}
                <ContactLink /> · No SaaS, no auth, no retainers.
              </p>
            </div>

            <aside className="card p-6 md:p-8">
              <p className="text-sm font-medium uppercase tracking-wider text-muted">
                Offer at a glance
              </p>
              <p className="mt-3 text-4xl font-bold tracking-tight">
                $199
                <span className="ml-2 text-base font-medium text-muted">
                  fixed
                </span>
              </p>
              <ul className="mt-6 space-y-3 text-sm prose-muted">
                <li className="flex gap-2">
                  <span className="text-success">✓</span>
                  Drop-in wheel + migration notes + rollback
                </li>
                <li className="flex gap-2">
                  <span className="text-success">✓</span>
                  Import-compatible when the API allows
                </li>
                <li className="flex gap-2">
                  <span className="text-success">✓</span>
                  ~7-day delivery after scope lock
                </li>
                <li className="flex gap-2">
                  <span className="text-danger">✕</span>
                  Not a full rewrite · Not a speedup guarantee
                </li>
              </ul>
            </aside>
          </div>
        </section>

        {/* Who it's for */}
        <section className="section-pad border-t border-card-border py-16">
          <div className="container-narrow">
            <h2 className="text-3xl font-bold tracking-tight">Who it’s for</h2>
            <p className="prose-muted mt-3 max-w-2xl">
              Teams that already know where time goes — and want a surgical
              Rust fix without a multi-month rewrite.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Python services with a known hotspot",
                  body: "Profilers point at one library or function. You want a faster wheel, not a new architecture.",
                },
                {
                  title: "Maintainers shipping wheels",
                  body: "You’re open to PyO3 / maturin-style packaging and care about import compatibility and rollback.",
                },
                {
                  title: "Builders who want a fixed price",
                  body: "One dependency, clear deliverables, $199. If scope doesn’t fit, we say so before payment.",
                },
              ].map((item) => (
                <div key={item.title} className="card p-6">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="prose-muted mt-2 text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Included / out of scope */}
        <section
          id="included"
          className="section-pad border-t border-card-border py-16"
        >
          <div className="container-narrow grid gap-8 lg:grid-cols-2">
            <div className="card p-6 md:p-8">
              <h2 className="text-2xl font-bold tracking-tight">
                What’s included
              </h2>
              <ul className="mt-6 space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3 text-sm prose-muted">
                    <span className="mt-0.5 text-success" aria-hidden>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6 md:p-8">
              <h2 className="text-2xl font-bold tracking-tight">Out of scope</h2>
              <ul className="mt-6 space-y-3">
                {OUT_OF_SCOPE.map((item) => (
                  <li key={item} className="flex gap-3 text-sm prose-muted">
                    <span className="mt-0.5 text-danger" aria-hidden>
                      ✕
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Sample proof */}
        <section
          id="proof"
          className="section-pad border-t border-card-border py-16"
        >
          <div className="container-narrow">
            <h2 className="text-3xl font-bold tracking-tight">Sample proof</h2>
            <p className="prose-muted mt-3 max-w-3xl">
              Same playbook you’ll get: a Rust/PyO3 drop-in that keeps the
              original import path, shipped as an abi3 wheel, with published
              benchmarks.
            </p>

            <div className="mt-8 card overflow-hidden">
              <div className="border-b border-card-border bg-accent-soft px-6 py-4 md:px-8">
                <p className="text-sm font-medium text-accent-hover">
                  fast-rfc3339-validator-rs
                </p>
                <p className="mt-1 font-mono text-sm text-muted">
                  from rfc3339_validator import validate_rfc3339
                </p>
              </div>
              <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
                <div>
                  <h3 className="font-semibold">Links</h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>
                      <a
                        className="link"
                        href="https://github.com/lowmiaq-gmail/fast-rfc3339-validator-rs"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub repo
                      </a>
                    </li>
                    <li>
                      <a
                        className="link"
                        href="https://pypi.org/project/fast-rfc3339-validator-rs/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        PyPI package
                      </a>
                    </li>
                    <li className="prose-muted">
                      Import unchanged:{" "}
                      <code className="rounded bg-black/40 px-1.5 py-0.5 font-mono text-xs text-foreground">
                        from rfc3339_validator import validate_rfc3339
                      </code>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Benchmark (published)</h3>
                  <p className="prose-muted mt-3 text-sm">
                    On{" "}
                    <strong className="text-foreground">
                      Apple M4 Pro, macOS, CPython 3.14.6, abi3 wheel
                    </strong>
                    : median speedups{" "}
                    <strong className="text-foreground">5.81×–6.83×</strong>{" "}
                    across three workloads. Source:{" "}
                    <code className="font-mono text-xs">BENCHMARK.md</code> in
                    the sample repo.
                  </p>
                  <p className="mt-3 rounded-lg border border-card-border bg-black/30 p-3 text-xs text-muted">
                    These numbers are machine- and artifact-specific — not a
                    universal guarantee for your stack or hardware.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section
          id="timeline"
          className="section-pad border-t border-card-border py-16"
        >
          <div className="container-narrow">
            <h2 className="text-3xl font-bold tracking-tight">
              7-day timeline
            </h2>
            <p className="prose-muted mt-3 max-w-2xl">
              Clock starts after scope lock. Fixed price stays $199 when the
              agreed hot path fits this cadence.
            </p>
            <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {TIMELINE.map((step, i) => (
                <li key={step.day} className="card relative p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {step.day}
                  </span>
                  <h3 className="mt-2 font-semibold">
                    <span className="mr-2 text-muted">{i + 1}.</span>
                    {step.title}
                  </h3>
                  <p className="prose-muted mt-2 text-sm">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="section-pad border-t border-card-border py-16"
        >
          <div className="container-narrow max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">FAQ</h2>
            <div className="mt-8 space-y-4">
              {FAQ.map((item) => (
                <details
                  key={item.q}
                  className="card group open:border-accent/40"
                >
                  <summary className="cursor-pointer list-none px-6 py-4 font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {item.q}
                      <span className="text-muted transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="prose-muted border-t border-card-border px-6 py-4 text-sm">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="cta"
          className="section-pad border-t border-card-border py-16 md:py-24"
        >
          <div className="container-narrow">
            <div className="card relative overflow-hidden px-6 py-12 text-center md:px-12">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(245,158,11,0.18), transparent)",
                }}
              />
              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Ready to speed up one hot path?
                </h2>
                <p className="prose-muted mx-auto mt-4 max-w-xl">
                  Fixed <strong className="text-foreground">$199</strong>. One
                  dependency. Drop-in Rust/PyO3 wheel, migration notes, and
                  rollback — same playbook as the sample.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <CheckoutButton size="lg" />
                  <ContactLink className="btn-secondary no-underline">
                    Email to discuss scope
                  </ContactLink>
                </div>
                <p className="mt-4 text-sm text-muted">
                  Prefer email first?{" "}
                  <ContactLink />
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="section-pad border-t border-card-border py-8">
        <div className="container-narrow flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Rust/PyO3 Hot-Path Offer · Fixed $199
          </p>
          <p>
            Contact: <ContactLink />
          </p>
        </div>
      </footer>
    </>
  );
}
