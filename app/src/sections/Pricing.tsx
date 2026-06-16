import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const plans = [
  {
    name: 'GUARD',
    price: '$5',
    period: '/user/month',
    tagline: 'Essential email protection for growing teams',
    featured: false,
    features: [
      { text: 'Email Guardian (MVP) — full access', included: true },
      { text: 'M365 & Google Workspace integration', included: true },
      { text: 'AI fraud scoring & alerts', included: true },
      { text: 'Basic policy engine', included: true },
      { text: 'Email support', included: true },
      { text: 'Communication Graph', included: false },
      { text: 'ERP-Aware Detection', included: false },
      { text: 'Phishing Simulation', included: false },
      { text: 'Dedicated account manager', included: false },
    ],
    cta: 'Start Free Pilot',
    ctaStyle: 'secondary' as const,
  },
  {
    name: 'SHIELD',
    price: '$8',
    period: '/user/month',
    tagline: 'Advanced protection for security-conscious enterprises',
    featured: true,
    badge: 'MOST POPULAR',
    features: [
      { text: 'Email Guardian (MVP) — full access', included: true },
      { text: 'M365 & Google Workspace integration', included: true },
      { text: 'AI fraud scoring & alerts', included: true },
      { text: 'Advanced policy engine with custom rules', included: true },
      { text: 'Communication Graph (early access)', included: true },
      { text: 'ERP-Aware Detection (early access)', included: true },
      { text: 'Priority support', included: true },
      { text: 'Phishing Simulation', included: false },
      { text: 'Dedicated account manager', included: false },
    ],
    cta: 'Start Free Pilot',
    ctaStyle: 'primary' as const,
  },
  {
    name: 'FORTRESS',
    price: 'Custom',
    period: '',
    tagline: 'Maximum security for large enterprises and critical infrastructure',
    featured: false,
    features: [
      { text: 'Everything in Shield', included: true },
      { text: 'Phishing Simulation', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Custom ML model training', included: true },
      { text: 'On-premise deployment option', included: true },
      { text: 'SLA guarantee (99.9%)', included: true },
      { text: '24/7 phone support', included: true },
      { text: 'Data residency compliance audit', included: true },
      { text: 'Custom ERP connector development', included: true },
    ],
    cta: 'Contact Sales',
    ctaStyle: 'secondary' as const,
  },
]

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const header = headerRef.current
    const cards = cardsRef.current
    if (!header || !cards) return

    gsap.from(header.children, {
      y: 40, opacity: 0, duration: 0.8, ease: 'expo.out', stagger: 0.1,
      scrollTrigger: { trigger: header, start: 'top 85%', once: true },
    })

    gsap.from(cards.children, {
      y: 60, opacity: 0, duration: 0.8, ease: 'expo.out', stagger: 0.15,
      scrollTrigger: { trigger: cards, start: 'top 85%', once: true },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === header || t.trigger === cards) t.kill()
      })
    }
  }, [])

  const handleNavClick = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative py-24 sm:py-32 lg:py-40"
      style={{
        background:
          'radial-gradient(ellipse at 50% 0%, rgba(0, 212, 170, 0.03) 0%, transparent 50%), #050B14',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-16 lg:mb-20">
          <div className="section-overline mb-4">Pricing</div>
          <h2
            className="font-display font-semibold text-silver-white leading-tight tracking-[-0.03em]"
            style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
          >
            Protection That Scales With Your Enterprise
          </h2>
          <p
            className="font-display text-muted-silver mt-4"
            style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
          >
            {'\u041A\u04D9\u0441\u0456\u043F\u043E\u0440\u043D\u044B\u04A3}\u044B\u0437\u0431\u0435\u043D \u0431\u0456\u0440\u0433\u0435 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0442\u0430\u043B\u0430\u0442\u044B\u043D \u049B\u043E\u0440\u0493\u0430\u043D\u044B\u0441'}
          </p>
          <p className="text-muted-silver text-base sm:text-lg max-w-[720px] mt-6 leading-relaxed">
            Transparent pricing per user. Start with Guard and upgrade as your security needs grow.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-[20px] p-8 lg:p-10 ${
                plan.featured
                  ? 'pricing-card-featured lg:-translate-y-5'
                  : 'pricing-card'
              }`}
              style={{
                borderColor: plan.featured
                  ? 'rgba(0, 212, 170, 0.4)'
                  : plan.name === 'FORTRESS'
                  ? 'rgba(232, 236, 241, 0.15)'
                  : undefined,
              }}
            >
              {/* Featured Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="tag-pill bg-electric-teal/20 text-electric-teal text-[11px] px-4 py-1.5">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <p
                className={`text-xs font-semibold uppercase tracking-[0.12em] mb-4 ${
                  plan.featured ? 'text-electric-teal' : 'text-muted-silver'
                }`}
              >
                {plan.name}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-3">
                <span
                  className="font-mono font-medium text-silver-white"
                  style={{ fontSize: 'clamp(40px, 4vw, 56px)' }}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-muted-silver">{plan.period}</span>
                )}
              </div>

              {/* Tagline */}
              <p className="text-sm text-muted-silver mb-8">{plan.tagline}</p>

              {/* CTA */}
              {plan.ctaStyle === 'primary' ? (
                <button
                  onClick={handleNavClick}
                  className="btn-primary w-full text-center block mb-8"
                >
                  {plan.cta}
                </button>
              ) : (
                <button
                  onClick={handleNavClick}
                  className="btn-secondary w-full text-center block mb-8"
                >
                  {plan.cta}
                </button>
              )}

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature.text}
                    className={`flex items-start gap-3 text-sm ${
                      feature.included ? 'text-muted-silver' : 'text-dark-silver'
                    }`}
                  >
                    {feature.included ? (
                      <Check className="w-4 h-4 text-electric-teal flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-4 h-4 text-dark-silver flex-shrink-0 mt-0.5" />
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Notes */}
        <div className="text-center mt-12 space-y-2">
          <p className="text-sm text-dark-silver">
            All plans include a 14-day free pilot. No credit card required.
          </p>
          <p className="text-sm text-dark-silver">
            Volume discounts available for 500+ users.
          </p>
        </div>
      </div>
    </section>
  )
}
