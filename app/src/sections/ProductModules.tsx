import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Mail, Network, Database, UserCheck, Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const modules = [
  {
    icon: Mail,
    status: 'MVP — AVAILABLE NOW',
    statusColor: '#10B981',
    title: 'Email Guardian',
    description:
      'Real-time email analysis that stops fraud before it reaches your inbox. The flagship module protecting your communication layer.',
    features: [
      'AI-powered email content and metadata analysis',
      'Real-time fraud scoring with explanation',
      'M365 & Google Workspace integration',
      'Attachment and link sandbox analysis',
      'Custom policy engine for enterprise workflows',
      'Alert dashboard with audit trail',
    ],
    cta: 'Request Pilot',
    ctaStyle: 'primary' as const,
    featured: true,
  },
  {
    icon: Network,
    status: 'COMING Q3 2025',
    statusColor: '#4A5568',
    title: 'Communication Graph',
    description:
      'Visualize communication patterns across your organization to detect anomalies in how employees interact with external parties.',
    features: [
      'Organization-wide communication mapping',
      'Anomaly detection in contact patterns',
      'External domain risk scoring',
      'Relationship strength indicators',
      'Cross-department interaction analysis',
      'Historical pattern comparison',
    ],
    cta: 'Join Waitlist',
    ctaStyle: 'secondary' as const,
    featured: false,
  },
  {
    icon: Database,
    status: 'COMING Q4 2025',
    statusColor: '#4A5568',
    title: 'ERP-Aware Detection',
    description:
      'Deep integration with 1C, SAP, and Oracle provides business-context-aware fraud detection that generic email security cannot match.',
    features: [
      '1C:Enterprise & SAP native connectors',
      'Vendor master data synchronization',
      'Purchase order cross-validation',
      'Payment workflow anomaly detection',
      'Approval hierarchy enforcement',
      'Multi-ERP environment support',
    ],
    cta: 'Join Waitlist',
    ctaStyle: 'secondary' as const,
    featured: false,
  },
  {
    icon: UserCheck,
    status: 'COMING Q1 2026',
    statusColor: '#4A5568',
    title: 'Phishing Simulation',
    description:
      'Train your workforce with realistic, AI-generated phishing scenarios tailored to your industry and organizational structure.',
    features: [
      'AI-generated realistic phishing templates',
      'Industry-specific attack scenarios',
      'Progress tracking and risk scoring per employee',
      'Automated training assignment',
      'Compliance reporting dashboard',
      'CIS-localized content (Kazakh, Russian)',
    ],
    cta: 'Join Waitlist',
    ctaStyle: 'secondary' as const,
    featured: false,
  },
]

export default function ProductModules() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const header = headerRef.current
    const cards = cardsRef.current
    if (!header || !cards) return

    gsap.from(header.children, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'expo.out',
      stagger: 0.1,
      scrollTrigger: { trigger: header, start: 'top 85%', once: true },
    })

    gsap.from(cards.children, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: 'expo.out',
      stagger: 0.12,
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
      id="modules"
      className="relative py-24 sm:py-32 lg:py-40"
      style={{
        background:
          'linear-gradient(180deg, #0A1628 0%, #050B14 30%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-16 lg:mb-20">
          <div className="section-overline mb-4">Product Modules</div>
          <h2
            className="font-display font-semibold text-silver-white leading-tight tracking-[-0.03em]"
            style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
          >
            Comprehensive Protection for Every Channel
          </h2>
          <p
            className="font-display text-muted-silver mt-4"
            style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
          >
            {'\u04D8\u0440 \u0430\u0440\u043D\u0430 \u04AF\u0448\u0456\u043D \u043A\u0435\u0448\u0435\u043D\u0434\u0456 \u049B\u043E\u0440\u0493\u0430\u043D\u044B\u0441'}
          </p>
          <p className="text-muted-silver text-base sm:text-lg max-w-[720px] mt-6 leading-relaxed">
            Four integrated modules work together to protect your enterprise across email,
            communication networks, ERP systems, and human awareness.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {modules.map((mod) => {
            const Icon = mod.icon
            const isFeatured = mod.featured

            return (
              <motion.div
                key={mod.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className={`relative p-8 lg:p-10 rounded-2xl transition-all duration-300 ${
                  isFeatured
                    ? 'accent-card animate-pulse-glow-subtle'
                    : 'glass-card glass-card-hover'
                }`}
              >
                {/* Status Tag */}
                <span
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.06em] mb-6"
                  style={{
                    background: `${mod.statusColor}20`,
                    color: mod.statusColor,
                    border: `1px solid ${mod.statusColor}40`,
                  }}
                >
                  {mod.status}
                </span>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    isFeatured ? 'bg-[#00D4AA15]' : 'bg-[#4A556820]'
                  }`}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{ color: isFeatured ? '#00D4AA' : '#9BA3AF' }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-display font-semibold text-silver-white mb-4"
                  style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}
                >
                  {mod.title}
                </h3>

                {/* Description */}
                <p className="text-muted-silver leading-relaxed mb-6">
                  {mod.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {mod.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-silver"
                    >
                      <Check className="w-4 h-4 text-electric-teal flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {mod.ctaStyle === 'primary' ? (
                  <button onClick={handleNavClick} className="btn-primary text-[12px] py-3 px-6">
                    {mod.cta}
                  </button>
                ) : (
                  <button
                    disabled
                    className="btn-secondary text-[12px] py-3 px-6 opacity-50 cursor-not-allowed"
                  >
                    {mod.cta}
                  </button>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
