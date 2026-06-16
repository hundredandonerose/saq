import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const mainStats = [
  {
    value: '<2%',
    numericValue: 2,
    prefix: '<',
    suffix: '%',
    label: 'FALSE POSITIVE RATE',
    context:
      'Industry average: 15-25%. SAQ\'s 4-layer AI dramatically reduces alert fatigue by correlating signals across rules, ML, LLM, and ERP context.',
    color: '#00D4AA',
  },
  {
    value: '<5min',
    numericValue: 5,
    prefix: '<',
    suffix: 'min',
    label: 'AVERAGE DETECTION TIME',
    context:
      'From email receipt to alert generation. Real-time analysis means fraudulent payment requests are caught before funds leave your organization.',
    color: '#00D4AA',
  },
  {
    value: '>60%',
    numericValue: 60,
    prefix: '>',
    suffix: '%',
    label: 'PILOT TO PAID CONVERSION',
    context:
      'Of enterprises that complete a 14-day pilot choose to deploy SAQ organization-wide. The results speak for themselves.',
    color: '#10B981',
  },
]

const miniMetrics = [
  { value: '99.7%', label: 'EMAIL ANALYSIS ACCURACY' },
  { value: '12+', label: 'ENTERPRISE CLIENTS IN KZ' },
  { value: '3', label: 'LANGUAGES SUPPORTED' },
  { value: '<15s', label: 'ALERT GENERATION TIME' },
]

export default function MetricsDashboard() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const miniRef = useRef<HTMLDivElement>(null)
  const testimonialRef = useRef<HTMLDivElement>(null)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const header = headerRef.current
    const stats = statsRef.current
    const mini = miniRef.current
    const testimonial = testimonialRef.current
    if (!header || !stats || !mini || !testimonial) return

    gsap.from(header.children, {
      y: 40, opacity: 0, duration: 0.8, ease: 'expo.out', stagger: 0.1,
      scrollTrigger: { trigger: header, start: 'top 85%', once: true },
    })

    ScrollTrigger.create({
      trigger: stats,
      start: 'top 85%',
      once: true,
      onEnter: () => setStatsVisible(true),
    })

    gsap.from(stats.children, {
      y: 60, opacity: 0, duration: 0.8, ease: 'expo.out', stagger: 0.2,
      scrollTrigger: { trigger: stats, start: 'top 85%', once: true },
    })

    gsap.from(mini.children, {
      y: 30, opacity: 0, duration: 0.6, ease: 'expo.out', stagger: 0.1,
      scrollTrigger: { trigger: mini, start: 'top 85%', once: true },
    })

    gsap.from(testimonial, {
      y: 30, opacity: 0, duration: 1, ease: 'expo.out',
      scrollTrigger: { trigger: testimonial, start: 'top 85%', once: true },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === header || t.trigger === stats || t.trigger === mini || t.trigger === testimonial) t.kill()
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 bg-midnight-blue"
    >
      {/* Subtle particle overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(0, 212, 170, 0.05) 0%, transparent 30%), radial-gradient(circle at 80% 70%, rgba(0, 212, 170, 0.03) 0%, transparent 25%)',
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-16 lg:mb-20">
          <div className="section-overline mb-4">Platform Metrics</div>
          <h2
            className="font-display font-semibold text-silver-white leading-tight tracking-[-0.03em]"
            style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
          >
            Numbers That Matter
          </h2>
          <p
            className="font-display text-muted-silver mt-4"
            style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
          >
            {'\u041C\u0430\u04A3\u044B\u0437\u0434\u044B \u0441\u0430\u043D\u0434\u0430\u0440'}
          </p>
        </div>

        {/* Main Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-20"
        >
          {mainStats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <StatCounter
                target={stat.numericValue}
                prefix={stat.prefix}
                suffix={stat.suffix}
                color={stat.color}
                enabled={statsVisible}
              />
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-silver mt-3 mb-4">
                {stat.label}
              </p>
              <p className="text-sm text-muted-silver leading-relaxed">
                {stat.context}
              </p>
            </div>
          ))}
        </div>

        {/* Mini Metrics Bar */}
        <div
          ref={miniRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-y border-[rgba(255,255,255,0.06)] py-8 mb-16 lg:mb-20"
        >
          {miniMetrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`text-center px-4 ${
                i > 0 ? 'lg:border-l border-[rgba(255,255,255,0.06)]' : ''
              } ${i % 2 === 1 ? 'border-l border-[rgba(255,255,255,0.06)] lg:border-l' : ''}`}
            >
              <span
                className="font-mono font-medium text-silver-white block mb-1"
                style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}
              >
                {metric.value}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.08em] text-dark-silver">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div
          ref={testimonialRef}
          className="glass-card p-8 sm:p-12 max-w-[720px] mx-auto text-center"
        >
          <Quote className="w-8 h-8 text-electric-teal/30 mx-auto mb-6" />
          <blockquote className="text-silver-white text-base sm:text-lg italic leading-relaxed mb-6">
            &ldquo;SAQ detected a sophisticated CEO fraud attempt that our existing email security
            completely missed. The LLM analysis identified linguistic patterns that were invisible
            to rule-based systems.&rdquo;
          </blockquote>
          <p className="text-sm text-muted-silver">
            — Chief Information Security Officer, Leading Kazakh Bank
          </p>
        </div>
      </div>
    </section>
  )
}

function StatCounter({
  target,
  prefix,
  suffix,
  color,
  enabled,
}: {
  target: number
  prefix: string
  suffix: string
  color: string
  enabled: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !enabled || hasAnimated.current) return
    hasAnimated.current = true

    const obj = { val: 0 }
    gsap.to(obj, {
      val: target,
      duration: 2.5,
      ease: 'expo.out',
      onUpdate: () => {
        el.textContent = `${prefix}${Math.round(obj.val)}${suffix}`
      },
    })
  }, [enabled, target, prefix, suffix])

  return (
    <span
      ref={ref}
      className="font-mono font-medium block"
      style={{ color, fontSize: 'clamp(40px, 5vw, 64px)' }}
    >
      {prefix}0{suffix}
    </span>
  )
}
