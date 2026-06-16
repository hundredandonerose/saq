import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { UserCircle, FileText, Users, CreditCard, ShieldAlert } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const attackVectors = [
  {
    icon: UserCircle,
    color: '#EF4444',
    stat: '$4.2M',
    statLabel: 'Average loss per incident in Central Asia',
    title: 'CEO Fraud / BEC',
    description:
      'Attackers impersonate executives to authorize fraudulent wire transfers. The most costly attack vector for Kazakh enterprises.',
  },
  {
    icon: FileText,
    color: '#F59E0B',
    stat: '68%',
    statLabel: 'Of Kazakh enterprises report invoice fraud attempts',
    title: 'Fake Invoice Schemes',
    description:
      'Fraudulent invoices with altered banking details slip through approval workflows, exploiting weak verification processes.',
  },
  {
    icon: Users,
    color: '#EF4444',
    stat: '3x',
    statLabel: 'Increase in supplier impersonation since 2023',
    title: 'Supplier Impersonation',
    description:
      'Compromised or spoofed supplier emails requesting payment to attacker-controlled accounts.',
  },
  {
    icon: CreditCard,
    color: '#F59E0B',
    stat: '92%',
    statLabel: 'Of attacks start with email compromise',
    title: 'Banking Detail Swap',
    description:
      'Legitimate vendor payment details are replaced with fraudulent ones mid-transaction, often going unnoticed for weeks.',
  },
  {
    icon: ShieldAlert,
    color: '#EF4444',
    stat: '$1.8M',
    statLabel: 'Average time to detect: 47 days',
    title: 'Payment Approval Anomalies',
    description:
      'Unusual payment patterns bypass traditional rule-based systems that cannot detect behavioral context.',
  },
]

function AnimatedStat({ value, suffix = '', prefix = '' }: { value: string; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const numericMatch = value.match(/[\d.]+/)
    if (!numericMatch) {
      el.textContent = value
      return
    }

    const numericValue = parseFloat(numericMatch[0])
    const hasDecimal = value.includes('.')

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        if (hasAnimated) return
        setHasAnimated(true)
        const obj = { val: 0 }
        gsap.to(obj, {
          val: numericValue,
          duration: 2,
          ease: 'expo.out',
          onUpdate: () => {
            if (hasDecimal) {
              el.textContent = prefix + obj.val.toFixed(1) + suffix
            } else {
              el.textContent = prefix + Math.round(obj.val) + suffix
            }
          },
        })
      },
    })

    return () => {
      trigger.kill()
    }
  }, [value, suffix, prefix, hasAnimated])

  return <span ref={ref}>{value}</span>
}

export default function ProblemStatement() {
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
      scrollTrigger: {
        trigger: header,
        start: 'top 85%',
        once: true,
      },
    })

    gsap.from(cards.children, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: 'expo.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: cards,
        start: 'top 85%',
        once: true,
      },
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
      id="problem"
      className="relative py-24 sm:py-32 lg:py-40"
      style={{
        background:
          'linear-gradient(135deg, #050B14 0%, #0A1628 50%, #050B14 100%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="mb-16 lg:mb-20">
          <div className="section-overline mb-4">The Threat Landscape</div>
          <h2
            className="font-display font-semibold text-silver-white leading-tight tracking-[-0.03em]"
            style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
          >
            Five Attack Vectors Targeting Your Enterprise
          </h2>
          <p
            className="font-display text-muted-silver mt-4"
            style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
          >
            {'\u0421\u0456\u0437\u0434\u0456\u04A3 \u043A\u04D9\u0441\u0456\u043F\u043E\u0440\u043D\u044B\u04A3}\u044B\u0437\u0434\u044B \u043D\u044B\u0441\u0430\u043D\u0430\u0434\u0493\u0430\u043D \u0431\u0435\u0441 \u0448\u0430\u0431\u0443\u044B\u043B \u0432\u0435\u043A\u0442\u043E\u0440\u044B'}
          </p>
          <p className="text-muted-silver text-base sm:text-lg max-w-[720px] mt-6 leading-relaxed">
            Financial fraud in Kazakhstan is evolving. Sophisticated attackers exploit
            communication channels, ERP systems, and human trust — costing enterprises
            millions annually.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6"
        >
          {attackVectors.map((vector) => {
            const Icon = vector.icon
            return (
              <div
                key={vector.title}
                className="glass-card glass-card-hover p-6 lg:p-8 transition-all duration-300"
                style={{ borderBottom: `2px solid ${vector.color}` }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                  style={{ background: `${vector.color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: vector.color }} />
                </div>

                {/* Stat */}
                <div
                  className="font-mono font-medium text-silver-white mb-1"
                  style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
                >
                  <AnimatedStat value={vector.stat} />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-silver mb-4">
                  {vector.statLabel}
                </p>

                {/* Title */}
                <h3 className="font-display font-semibold text-silver-white text-lg lg:text-xl mb-3">
                  {vector.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-silver leading-relaxed">
                  {vector.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
