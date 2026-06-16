import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Shield } from 'lucide-react'

const navLinks = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Modules', href: '#modules' },
  { label: 'Scenarios', href: '#scenarios' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Why SAQ', href: '#why-saq' },
  { label: 'Security', href: '#security' },
  { label: 'Contact', href: '#contact' },
]

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(5,11,20,0.85)] backdrop-blur-[16px] border-b border-[rgba(0,212,170,0.08)]'
            : 'bg-transparent border-b border-transparent'
        }`}
        style={{ height: '72px' }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-2 group"
          >
            <Shield className="w-5 h-5 text-electric-teal transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,212,170,0.5)]" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-[22px] leading-none text-silver-white tracking-tight">
                SAQ
              </span>
              <span className="text-[8px] font-medium uppercase tracking-[0.14em] text-dark-silver">
                Sentinel AI Kazakhstan
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[13px] font-medium uppercase tracking-[0.06em] text-muted-silver hover:text-electric-teal transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => handleNavClick('#contact')}
            className="hidden lg:block btn-primary text-[12px] py-3 px-6"
          >
            Request Pilot
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-silver-white p-2"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050B14] flex flex-col items-center justify-center"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: easeOutExpo,
                  delay: i * 0.06,
                }}
                onClick={() => handleNavClick(link.href)}
                className="text-xl font-medium uppercase tracking-[0.06em] text-muted-silver hover:text-electric-teal transition-colors duration-200 py-4"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.48 }}
              onClick={() => handleNavClick('#contact')}
              className="btn-primary mt-8"
            >
              Request Pilot
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
