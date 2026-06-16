import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const layers = [
  {
    number: '01',
    name: 'RULES',
    fullName: 'Rules Engine',
    color: '#4A5568',
    description:
      'Traditional signature and pattern-based detection forms the foundation. Known fraud patterns are blocked instantly with zero false positives.',
    tags: ['Regex Patterns', 'Known Signatures', 'Policy Engine', 'Whitelist/Blacklist'],
    capabilities: [
      'Blocks 40% of known attacks immediately',
      'Zero-latency decision',
      'Custom policy builder',
      'Regulatory compliance templates',
    ],
  },
  {
    number: '02',
    name: 'ML DETECT',
    fullName: 'ML Anomaly Detection',
    color: '#00D4AA',
    description:
      'Statistical machine learning models detect behavioral anomalies in payment patterns, communication frequency, and transaction timing.',
    tags: ['Isolation Forest', 'Behavioral Baselines', 'Time-Series Analysis', 'Clustering'],
    capabilities: [
      'Learns normal behavior per user/department',
      'Detects statistical outliers in real-time',
      'Adaptive thresholds reduce false positives',
      'Unsupervised learning for new patterns',
    ],
  },
  {
    number: '03',
    name: 'LLM ANALYSIS',
    fullName: 'LLM Linguistic Analysis',
    color: '#33E0BF',
    description:
      'Large language models analyze email content, tone, urgency patterns, and linguistic fingerprints to detect social engineering and impersonation.',
    tags: ['GPT-4 Analysis', 'Tone Detection', 'Urgency Scoring', 'Linguistic Fingerprinting'],
    capabilities: [
      'Detects urgency manipulation tactics',
      'Identifies writing style deviations',
      'Cross-references sender history',
      'Analyzes attachments and links',
    ],
  },
  {
    number: '04',
    name: 'ERP CONTEXT',
    fullName: 'ERP Context Engine',
    color: '#10B981',
    description:
      'Deep integration with 1C, SAP, and other ERP systems provides business context that generic email security tools lack.',
    tags: ['1C Integration', 'SAP Connector', 'Vendor Master Sync', 'Payment Workflow'],
    capabilities: [
      'Cross-references vendor banking details',
      'Validates against purchase order data',
      'Detects out-of-band payment requests',
      'Enforces approval hierarchy rules',
    ],
  },
]


export default function SolutionArchitecture() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const diagramRef = useRef<HTMLDivElement>(null)
  const [activeLayer, setActiveLayer] = useState<number | null>(null)

  useEffect(() => {
    const header = headerRef.current
    const diagram = diagramRef.current
    if (!header || !diagram) return

    gsap.from(header.children, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'expo.out',
      stagger: 0.1,
      scrollTrigger: { trigger: header, start: 'top 85%', once: true },
    })

    gsap.from(diagram.querySelector('.hub-center'), {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: 'expo.out',
      scrollTrigger: { trigger: diagram, start: 'top 80%', once: true },
    })

    gsap.from(diagram.querySelectorAll('.layer-node'), {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: 'expo.out',
      stagger: 0.15,
      delay: 0.3,
      scrollTrigger: { trigger: diagram, start: 'top 80%', once: true },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === header || t.trigger === diagram) t.kill()
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="solution"
      className="relative py-24 sm:py-32 lg:py-40 bg-midnight-blue"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-16 lg:mb-20">
          <div className="section-overline mb-4">Our Solution</div>
          <h2
            className="font-display font-semibold text-silver-white leading-tight tracking-[-0.03em]"
            style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
          >
            4-Layer AI Detection Architecture
          </h2>
          <p
            className="font-display text-muted-silver mt-4"
            style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
          >
            {'4 \u0434\u0435\u04A3\u0433\u0435\u0439\u043B\u0456 \u0436\u0430\u0441\u0430\u043D\u0434\u044B \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442 \u0430\u043D\u044B\u049B\u0442\u0430\u0443 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430\u0441\u044B'}
          </p>
          <p className="text-muted-silver text-base sm:text-lg max-w-[720px] mt-6 leading-relaxed">
            SAQ combines rules-based logic, machine learning, large language models, and ERP
            context to detect fraud that other systems miss.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div ref={diagramRef} className="relative mb-12">
          {/* SVG Connection Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
            style={{ zIndex: 1 }}
          >
            {layers.map((layer, i) => {
              const xMap = ['50%', '100%', '50%', '0%']
              const yMap = ['0%', '50%', '100%', '50%']
              return (
                <line
                  key={`line-${layer.number}`}
                  x1="50%"
                  y1="50%"
                  x2={xMap[i]}
                  y2={yMap[i]}
                  stroke={layer.color}
                  strokeWidth="2"
                  strokeDasharray="8 4"
                  opacity="0.3"
                  className="animate-dash-flow"
                />
              )
            })}
          </svg>

          {/* Hub and Nodes Container */}
          <div className="relative flex flex-col items-center gap-8 lg:block lg:h-[500px]">
            {/* Central Hub */}
            <div
              className="hub-center relative z-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full flex flex-col items-center justify-center animate-pulse-glow cursor-pointer lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
              style={{
                background:
                  'radial-gradient(circle, rgba(0, 212, 170, 0.2) 0%, transparent 70%)',
                border: '2px solid #00D4AA',
              }}
              onClick={() => setActiveLayer(null)}
            >
              <span className="font-display font-bold text-2xl sm:text-3xl text-electric-teal">
                SAQ
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-silver">
                CORE ENGINE
              </span>
            </div>

            {/* Layer Nodes - Desktop: diamond, Mobile: grid */}
            <div className="grid grid-cols-2 gap-4 lg:absolute lg:inset-0 lg:grid-cols-1 lg:gap-0">
              {layers.map((layer, i) => {
                const isActive = activeLayer === i
                return (
                  <button
                    key={layer.number}
                    className={`layer-node relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center transition-all duration-300 lg:absolute ${
                      isActive ? 'scale-110' : 'hover:scale-105'
                    }`}
                    style={{
                      background: isActive
                        ? `${layer.color}20`
                        : 'rgba(10, 22, 40, 0.8)',
                      border: `2px solid ${isActive ? layer.color : layer.color + '80'}`,
                      boxShadow: isActive
                        ? `0 0 30px ${layer.color}40`
                        : 'none',
                      top: ['15%', '50%', '85%', '50%'][i],
                      left: ['50%', '85%', '50%', '15%'][i],
                      transform: 'translate(-50%, -50%)',
                    }}
                    onClick={() => setActiveLayer(isActive ? null : i)}
                  >
                    <span
                      className="font-mono text-xl sm:text-3xl font-medium"
                      style={{ color: layer.color }}
                    >
                      {layer.number}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-silver mt-1">
                      {layer.name}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Layer Detail Cards */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {activeLayer !== null && (
              <motion.div
                key={activeLayer}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <div
                  className="glass-card p-6 lg:p-8"
                  style={{
                    borderLeft: `3px solid ${layers[activeLayer].color}`,
                  }}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="font-mono text-2xl font-medium"
                      style={{ color: layers[activeLayer].color }}
                    >
                      {layers[activeLayer].number}
                    </span>
                    <h3 className="font-display font-semibold text-xl text-silver-white">
                      {layers[activeLayer].fullName}
                    </h3>
                  </div>
                  <p className="text-muted-silver leading-relaxed mb-6">
                    {layers[activeLayer].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {layers[activeLayer].tags.map((tag) => (
                      <span key={tag} className="tag-pill text-[11px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {layers[activeLayer].capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2 text-sm text-muted-silver">
                        <Check
                          className="w-4 h-4 text-electric-teal flex-shrink-0 mt-0.5"
                        />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Show all layer summaries when none selected */}
          {activeLayer === null && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {layers.map((layer) => (
                <button
                  key={layer.number}
                  className="glass-card glass-card-hover p-5 text-left transition-all duration-300"
                  style={{ borderLeft: `3px solid ${layer.color}` }}
                  onClick={() =>
                    setActiveLayer(layers.findIndex((l) => l.number === layer.number))
                  }
                >
                  <span
                    className="font-mono text-lg font-medium"
                    style={{ color: layer.color }}
                  >
                    {layer.number}
                  </span>
                  <h4 className="font-display font-medium text-silver-white mt-2 mb-2">
                    {layer.fullName}
                  </h4>
                  <p className="text-xs text-muted-silver leading-relaxed">
                    {layer.description.slice(0, 80)}...
                  </p>
                  <span className="text-electric-teal text-xs mt-3 inline-block">
                    Click to expand &rarr;
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
