import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ParticleNetwork from '../components/ParticleNetwork'

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number]

const socialProofLogos = [
  'Kaspi Bank',
  'Halyk Bank',
  'KazMunayGas',
  '\u0421\u0430\u043c\u0440\u0443\u043a-\u041a\u0430\u0437\u044b\u043d\u0430',
  'KEGOC',
  'ForteBank',
]

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const scrollY = window.scrollY
      const headlineEl = sectionRef.current.querySelector('.hero-headline') as HTMLElement
      const subEl = sectionRef.current.querySelector('.hero-sub') as HTMLElement
      if (headlineEl && scrollY > 100) {
        const progress = Math.min((scrollY - 100) / 400, 1)
        const blur = progress * 10
        const opacity = 1 - progress
        headlineEl.style.filter = `blur(${blur}px)`
        headlineEl.style.opacity = String(opacity)
        headlineEl.style.transform = `translateY(${-progress * 30}px)`
        if (subEl) {
          subEl.style.filter = `blur(${blur}px)`
          subEl.style.opacity = String(opacity)
          subEl.style.transform = `translateY(${-progress * 20}px)`
        }
      } else if (headlineEl) {
        headlineEl.style.filter = 'blur(0px)'
        headlineEl.style.opacity = '1'
        headlineEl.style.transform = 'translateY(0)'
        if (subEl) {
          subEl.style.filter = 'blur(0px)'
          subEl.style.opacity = '1'
          subEl.style.transform = 'translateY(0)'
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#050B14' }}
    >
      {/* Particle Canvas Background */}
      <ParticleNetwork />

      {/* Vignette Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, #050B14 75%)',
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[900px] mx-auto pt-24">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.5 }}
          className="tag-pill mb-8"
        >
          AI-Powered Financial Fraud Prevention
        </motion.div>

        {/* Headline */}
        <div className="hero-headline will-change-transform">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOutExpo, delay: 0.6 }}
            className="font-display font-bold text-silver-white leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: 'clamp(40px, 8vw, 100px)' }}
          >
            Stop Financial Fraud
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOutExpo, delay: 0.68 }}
            className="font-display font-bold leading-[0.9] tracking-[-0.04em] mt-2"
            style={{ fontSize: 'clamp(40px, 8vw, 100px)' }}
          >
            <span className="text-gradient-teal">Before It Happens</span>
          </motion.h1>
        </div>

        {/* Kazakh Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 1.0 }}
          className="font-display font-medium text-muted-silver mt-6"
          style={{ fontSize: 'clamp(16px, 2vw, 22px)' }}
        >
          {'\u049A\u0430\u0440\u0436\u044B\u043B\u044B\u049B \u0430\u043B\u0430\u044F\u049B\u0442\u044B\u049B\u0442\u044B \u0442\u043E\u049B\u0442\u044B\u04A3\u044B\u0437'}
        </motion.p>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 1.1 }}
          className="text-muted-silver text-base sm:text-lg max-w-[640px] mt-6 leading-relaxed hero-sub will-change-transform"
        >
          Sentinel AI Kazakhstan protects your enterprise from CEO fraud, invoice
          scams, and payment anomalies — powered by a 4-layer AI detection engine.
        </motion.p>

        {/* CTA Group */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10"
        >
          <button onClick={() => handleNavClick('#contact')} className="btn-primary">
            Request Pilot
          </button>
          <button onClick={() => handleNavClick('#scenarios')} className="btn-secondary">
            Book Demo
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 1.5 }}
          className="text-dark-silver text-sm mt-3"
        >
          Free 14-day pilot for Kazakhstan enterprises
        </motion.p>
      </div>

      {/* Social Proof */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: easeOutExpo, delay: 1.5 }}
        className="relative z-10 mt-auto pb-12 w-full max-w-[1280px] mx-auto px-6"
      >
        <div className="border-t border-[rgba(255,255,255,0.06)] pt-8">
          <p className="text-center text-dark-silver text-sm mb-6">
            Trusted by leading Kazakh enterprises
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            {socialProofLogos.map((name) => (
              <span
                key={name}
                className="text-muted-silver text-sm sm:text-base font-medium tracking-wide opacity-50 hover:opacity-100 hover:text-electric-teal transition-all duration-300 cursor-default whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
