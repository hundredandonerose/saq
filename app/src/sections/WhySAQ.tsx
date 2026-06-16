import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Globe, Plug, MessageSquare, Headphones, Database, ShieldCheck } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const advantages = [
  {
    icon: Globe,
    title: 'CIS & Kazakhstan Localization',
    description:
      'Built with deep understanding of Kazakh business culture, communication patterns, and local fraud tactics. Content and alerts available in Kazakh, Russian, and English.',
  },
  {
    icon: Plug,
    title: 'Native 1C & SAP Integration',
    description:
      'Direct connectors for 1C:Enterprise and SAP — the dominant ERP systems in Kazakhstan. No middleware, no custom development required for basic integration.',
  },
  {
    icon: MessageSquare,
    title: 'Advanced Russian NLP',
    description:
      'Specialized natural language processing for Russian and Kazakh languages. Our LLM models are fine-tuned on CIS-specific fraud patterns and business communication.',
  },
  {
    icon: Database,
    title: 'Data Residency in Kazakhstan',
    description:
      'All data processing and storage within Kazakhstan borders. Full compliance with local data sovereignty requirements. Option for on-premise deployment.',
  },
  {
    icon: Headphones,
    title: 'Local Support Team',
    description:
      'Kazakhstan-based support team with understanding of local business context. Response within 2 hours during business hours. Dedicated account managers for Shield and Fortress plans.',
  },
  {
    icon: ShieldCheck,
    title: 'Local Regulatory Compliance',
    description:
      'Pre-configured compliance templates for Kazakh financial regulations, NBK requirements, and data protection standards. Regular updates as regulations evolve.',
  },
]

export default function WhySAQ() {
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
      y: 50, opacity: 0, duration: 0.8, ease: 'expo.out', stagger: 0.08,
      scrollTrigger: { trigger: cards, start: 'top 85%', once: true },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === header || t.trigger === cards) t.kill()
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="why-saq"
      className="relative py-24 sm:py-32 lg:py-40 bg-midnight-blue"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-16 lg:mb-20">
          <div className="section-overline mb-4">Why SAQ</div>
          <h2
            className="font-display font-semibold text-silver-white leading-tight tracking-[-0.03em]"
            style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
          >
            Built for Kazakhstan. Trusted by Enterprises.
          </h2>
          <p
            className="font-display text-muted-silver mt-4"
            style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
          >
            {'\u049A\u0430\u0437\u0430\u049B\u0441\u0442\u0430\u043D \u04AF\u0448\u0456\u043D \u0436\u0430\u0441\u0430\u043B\u0493\u0430\u043D. \u041A\u04D9\u0441\u0456\u043F\u043E\u0440\u044B\u043D\u0434\u0430\u0440 \u0441\u0435\u043D\u0435\u0442\u0456\u043D.'}
          </p>
          <p className="text-muted-silver text-base sm:text-lg max-w-[720px] mt-6 leading-relaxed">
            Unlike generic email security tools, SAQ is purpose-built for the Kazakh market with
            deep understanding of local threats, systems, and regulations.
          </p>
        </div>

        {/* Advantages Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {advantages.map((adv) => {
            const Icon = adv.icon
            return (
              <motion.div
                key={adv.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="glass-card glass-card-hover p-8 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-[#00D4AA15] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-electric-teal" />
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-silver-white text-lg lg:text-xl mb-3">
                  {adv.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-silver leading-relaxed">
                  {adv.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
