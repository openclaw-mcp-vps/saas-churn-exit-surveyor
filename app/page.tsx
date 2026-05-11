export default function Home() {
  const faqs = [
    {
      q: "Which billing platforms does it support?",
      a: "ChurnSurveyor integrates with Stripe and Paddle via webhooks. Setup takes under 5 minutes."
    },
    {
      q: "How does the AI analysis work?",
      a: "Survey responses are analyzed to surface common cancellation reasons, sentiment trends, and actionable recommendations to reduce churn."
    },
    {
      q: "Can I customize the survey questions?",
      a: "Yes. You get a full survey editor to tailor questions, answer options, and follow-up logic to match your product."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          SaaS Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Guessing Why Users Cancel
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          ChurnSurveyor automatically triggers exit surveys the moment a subscription is cancelled, then uses AI to turn raw responses into clear churn insights.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $11/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">No credit card required to try. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: "⚡", title: "Webhook Triggered", desc: "Fires instantly on Stripe or Paddle cancellation events." },
          { icon: "🧠", title: "AI Insights", desc: "Aggregates responses and surfaces your top churn drivers." },
          { icon: "📊", title: "Live Dashboard", desc: "Track trends, filter by plan, and export raw data anytime." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">All-Inclusive</p>
          <p className="text-5xl font-bold text-white mb-1">$11</p>
          <p className="text-[#8b949e] mb-6">/month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited exit surveys",
              "Stripe & Paddle integration",
              "AI churn analysis",
              "Customizable questions",
              "CSV export",
              "Email digest reports"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} ChurnSurveyor. All rights reserved.
      </footer>
    </main>
  );
}
