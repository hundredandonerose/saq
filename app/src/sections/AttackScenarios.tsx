import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'
import { UserCircle, FileText, Users, AlertTriangle, ShieldCheck } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const scenarios = [
  {
    id: 'ceo-fraud',
    icon: UserCircle,
    name: 'CEO Fraud',
    tagline: 'Impersonated executive wire request',
    steps: [
      { title: 'Executive Email Received', desc: 'Email claiming to be CFO requests urgent wire transfer', color: '#4A5568' },
      { title: 'Sender Metadata Mismatch', desc: 'SPF/DKIM fails, domain similar but not exact', color: '#F59E0B' },
      { title: 'LLM Content Analysis', desc: 'Urgency manipulation detected, writing style deviation', color: '#EF4444' },
      { title: 'ERP Context Check', desc: 'No matching purchase order, amount exceeds limit', color: '#F59E0B' },
      { title: 'SAQ Action: BLOCKED', desc: 'Email quarantined, security team alerted', color: '#10B981' },
    ],
    riskScore: 95,
    detections: [
      { text: 'SPF/DKIM authentication failed', color: '#EF4444' },
      { text: 'Urgency manipulation detected', color: '#EF4444' },
      { text: 'Writing style deviation from baseline', color: '#EF4444' },
      { text: 'No matching PO in ERP', color: '#F59E0B' },
      { text: 'Amount exceeds approval limit', color: '#F59E0B' },
    ],
  },
  {
    id: 'fake-invoice',
    icon: FileText,
    name: 'Fake Invoice',
    tagline: 'Altered banking details on invoice',
    steps: [
      { title: 'Invoice Email Received', desc: 'Vendor sends updated invoice with "new banking details"', color: '#4A5568' },
      { title: 'Vendor Pattern Analysis', desc: 'Banking detail change flagged as anomaly', color: '#F59E0B' },
      { title: 'ERP Cross-Reference', desc: 'New bank account not in vendor master data', color: '#EF4444' },
      { title: 'Communication Graph Check', desc: 'Sender IP differs from known infrastructure', color: '#F59E0B' },
      { title: 'SAQ Action: ALERT', desc: 'Finance team receives warning before payment', color: '#10B981' },
    ],
    riskScore: 87,
    detections: [
      { text: 'Banking details changed from baseline', color: '#EF4444' },
      { text: 'New account not in vendor master', color: '#EF4444' },
      { text: 'Sender IP/domain mismatch', color: '#F59E0B' },
      { text: 'Invoice amount within normal range', color: '#10B981' },
    ],
  },
  {
    id: 'supplier-impersonation',
    icon: Users,
    name: 'Supplier Impersonation',
    tagline: 'Fake supplier payment request',
    steps: [
      { title: 'Urgent Payment Request', desc: '"Supplier" requests expedited payment for overdue invoice', color: '#4A5568' },
      { title: 'Communication Pattern Anomaly', desc: 'First-time direct contact from this individual', color: '#F59E0B' },
      { title: 'Linguistic Analysis', desc: 'Non-native writing patterns inconsistent with supplier', color: '#EF4444' },
      { title: 'ERP Verification', desc: 'Invoice amount does not match any open purchase order', color: '#F59E0B' },
      { title: 'SAQ Action: QUARANTINED', desc: 'Email held, procurement team notified', color: '#10B981' },
    ],
    riskScore: 78,
    detections: [
      { text: 'First-time contact pattern', color: '#F59E0B' },
      { text: 'Linguistic style mismatch', color: '#EF4444' },
      { text: 'No matching PO found', color: '#F59E0B' },
      { text: 'Urgency tactics detected', color: '#EF4444' },
    ],
  },
]

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number]

export default function AttackScenarios() {
  const [activeTab, setActiveTab] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const header = headerRef.current
    const tabs = tabsRef.current
    if (!header || !tabs) return

    gsap.from(header.children, {
      y: 40, opacity: 0, duration: 0.8, ease: 'expo.out', stagger: 0.1,
      scrollTrigger: { trigger: header, start: 'top 85%', once: true },
    })

    gsap.from(tabs.children, {
      y: 30, opacity: 0, duration: 0.6, ease: 'expo.out', stagger: 0.08,
      scrollTrigger: { trigger: tabs, start: 'top 85%', once: true },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === header || t.trigger === tabs) t.kill()
      })
    }
  }, [])

  const scenario = scenarios[activeTab]

  return (
    <section
      ref={sectionRef}
      id="scenarios"
      className="relative py-24 sm:py-32 lg:py-40 bg-midnight-blue"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-16 lg:mb-20">
          <div className="section-overline mb-4">Attack Scenarios</div>
          <h2
            className="font-display font-semibold text-silver-white leading-tight tracking-[-0.03em]"
            style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
          >
            See How SAQ Stops Real Attacks
          </h2>
          <p
            className="font-display text-muted-silver mt-4"
            style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
          >
            {'SAQ \u043D\u0430\u049B\u0442\u044B \u0448\u0430\u0431\u0443\u044B\u043B\u0434\u0430\u0440\u0434\u044B \u049B\u0430\u043B\u0430\u0439 \u0442\u043E\u049B\u0442\u0430\u0442\u0430\u0442\u044B\u043D\u044B\u043D \u043A\u04E9\u0440\u0456\u04A3\u0456\u0437'}
          </p>
          <p className="text-muted-silver text-base sm:text-lg max-w-[720px] mt-6 leading-relaxed">
            Three common attack patterns targeting enterprises in Kazakhstan — and how SAQ
            detects each one in real-time.
          </p>
        </div>

        {/* Tabs */}
        <div ref={tabsRef} className="flex flex-col sm:flex-row gap-4 mb-12">
          {scenarios.map((s, i) => {
            const Icon = s.icon
            const isActive = activeTab === i
            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(i)}
                className={`flex-1 flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 text-left ${
                  isActive
                    ? 'bg-[rgba(0,212,170,0.08)] border border-electric-teal/40'
                    : 'glass-card glass-card-hover border border-transparent'
                }`}
              >
                <Icon
                  className="w-8 h-8 flex-shrink-0"
                  style={{ color: isActive ? '#00D4AA' : '#9BA3AF' }}
                />
                <div>
                  <h4
                    className={`font-display font-medium ${
                      isActive ? 'text-silver-white' : 'text-muted-silver'
                    }`}
                  >
                    {s.name}
                  </h4>
                  <p className="text-xs text-dark-silver mt-0.5">{s.tagline}</p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Scenario Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={scenario.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: easeOutExpo }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-dark-silver/30" />
              <div className="space-y-6">
                {scenario.steps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: easeOutExpo }}
                    className="relative flex items-start gap-5 pl-2"
                  >
                    <div
                      className="relative z-10 w-[18px] h-[18px] rounded-full border-2 flex-shrink-0 mt-1"
                      style={{
                        borderColor: step.color,
                        background:
                          step.color === '#10B981'
                            ? step.color
                            : step.color === '#EF4444'
                            ? step.color
                            : 'transparent',
                      }}
                    />
                    <div>
                      <h5 className="font-display font-medium text-silver-white text-base mb-1">
                        {step.title}
                      </h5>
                      <p className="text-sm text-muted-silver leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Detection Panel */}
            <div className="glass-card p-6 lg:p-8">
              {/* Risk Score */}
              <div className="flex items-center gap-4 mb-8">
                <div className="text-center">
                  <AnimatedRiskScore score={scenario.riskScore} />
                  <p className="text-xs uppercase tracking-[0.08em] text-muted-silver mt-2">
                    Risk Score
                  </p>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-crimson-alert" />
                    <span className="text-sm font-medium text-crimson-alert">
                      Fraud Detected
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-safe" />
                    <span className="text-sm font-medium text-emerald-safe">
                      Action Taken:{' '}
                      {scenario.steps[4].title.replace('SAQ Action: ', '')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Detection Items */}
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.08em] text-muted-silver mb-4">
                  Detection Details
                </p>
                {scenario.detections.map((detection, i) => (
                  <motion.div
                    key={detection.text}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: detection.color }}
                    />
                    <span className="text-sm text-muted-silver">{detection.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Mock Interface Placeholder */}
              <div
                className="mt-8 rounded-xl p-6 border border-[rgba(0,212,170,0.1)]"
                style={{ background: 'rgba(5, 11, 20, 0.6)' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#EF444440]" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B40]" />
                  <div className="w-3 h-3 rounded-full bg-[#10B98140]" />
                  <span className="text-xs text-dark-silver ml-2">
                    SAQ Analysis Overlay
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-[rgba(0,212,170,0.1)] rounded w-full" />
                  <div className="h-2 bg-[rgba(0,212,170,0.08)] rounded w-4/5" />
                  <div className="h-2 bg-[rgba(0,212,170,0.06)] rounded w-3/5" />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div
                    className="px-3 py-1 rounded text-[11px] font-medium"
                    style={{
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#10B981',
                    }}
                  >
                    Blocked
                  </div>
                  <span className="text-xs text-dark-silver">
                    Email quarantined at{' '}
                    {new Date().toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

function AnimatedRiskScore({ score }: { score: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || hasAnimated.current) return
    hasAnimated.current = true

    const obj = { val: 0 }
    gsap.to(obj, {
      val: score,
      duration: 1.5,
      ease: 'expo.out',
      onUpdate: () => {
        el.textContent = Math.round(obj.val) + '%'
      },
    })

    return () => {
      hasAnimated.current = false
    }
  }, [score])

  return (
    <span
      ref={ref}
      className="font-mono font-medium text-crimson-alert"
      style={{ fontSize: 'clamp(40px, 4vw, 64px)' }}
    >
      0%
    </span>
  )
}
