import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const companySizes = [
  '1–50 employees',
  '51–200 employees',
  '201–1000 employees',
  '1001–5000 employees',
  '5000+ employees',
]

const industries = [
  'Banking & Financial Services',
  'Oil & Gas',
  'State Enterprise / Government',
  'Telecommunications',
  'Manufacturing',
  'Other',
]

const m365Options = [
  'Full M365 deployment',
  'Partial M365 (selected services)',
  'Planning M365 migration',
  'Not using M365',
]

export default function ContactForm() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    jobTitle: '',
    companySize: '',
    industry: '',
    m365Usage: '',
    message: '',
  })

  useEffect(() => {
    const header = headerRef.current
    const form = formRef.current
    const contact = contactRef.current
    if (!header || !form || !contact) return

    gsap.from(header.children, {
      y: 40, opacity: 0, duration: 0.8, ease: 'expo.out', stagger: 0.1,
      scrollTrigger: { trigger: header, start: 'top 85%', once: true },
    })

    gsap.from(form, {
      y: 40, opacity: 0, duration: 0.8, ease: 'expo.out',
      scrollTrigger: { trigger: form, start: 'top 85%', once: true },
    })

    gsap.from(contact, {
      y: 40, opacity: 0, duration: 0.8, ease: 'expo.out', delay: 0.15,
      scrollTrigger: { trigger: contact, start: 'top 85%', once: true },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === header || t.trigger === form || t.trigger === contact) t.kill()
      })
    }
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission placeholder
    alert('Thank you for your interest! Our team will contact you within 24 hours.')
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 sm:py-32 lg:py-40"
      style={{
        background: 'linear-gradient(180deg, #0A1628 0%, #050B14 20%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-12 lg:mb-16">
          <div className="section-overline mb-4">Get In Touch</div>
          <h2
            className="font-display font-semibold text-silver-white leading-tight tracking-[-0.03em]"
            style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
          >
            Start Your Security Pilot
          </h2>
          <p
            className="font-display text-muted-silver mt-4"
            style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
          >
            {'\u049A\u0430\u0443\u0456\u043F\u0441\u0456\u0437\u0434\u0456\u043A \u043F\u0438\u043B\u043E\u0442\u044B\u043D \u0431\u0430\u0441\u0442\u0430\u04A3}\u044B\u0437'}
          </p>
          <p className="text-muted-silver text-base sm:text-lg max-w-[640px] mt-6 leading-relaxed">
            Complete the form below and our team will contact you within 24 hours to discuss your
            pilot program.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form Column */}
          <div ref={formRef} className="lg:col-span-3">
            <div className="glass-card p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-medium text-silver-white mb-1.5">
                      Full Name <span className="text-crimson-alert">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Your full name"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-silver-white mb-1.5">
                      Work Email <span className="text-crimson-alert">*</span>
                    </label>
                    <input
                      type="email"
                      name="workEmail"
                      placeholder="name@company.kz"
                      required
                      value={formData.workEmail}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-medium text-silver-white mb-1.5">
                      Company Name <span className="text-crimson-alert">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Company name"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-silver-white mb-1.5">
                      Job Title <span className="text-crimson-alert">*</span>
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      placeholder="Chief Information Security Officer"
                      required
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-medium text-silver-white mb-1.5">
                      Company Size
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className="form-input appearance-none cursor-pointer"
                    >
                      <option value="">Select company size</option>
                      {companySizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-silver-white mb-1.5">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="form-input appearance-none cursor-pointer"
                    >
                      <option value="">Select industry</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* M365 Usage */}
                <div>
                  <label className="block text-[13px] font-medium text-silver-white mb-1.5">
                    M365 Usage
                  </label>
                  <select
                    name="m365Usage"
                    value={formData.m365Usage}
                    onChange={handleChange}
                    className="form-input appearance-none cursor-pointer"
                  >
                    <option value="">Select M365 usage</option>
                    {m365Options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[13px] font-medium text-silver-white mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your current email security setup and any specific concerns..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input resize-none"
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn-primary w-full text-center">
                  Request Pilot
                </button>

                <p className="text-xs text-dark-silver text-center">
                  By submitting this form, you agree to our privacy policy. Your data will be
                  processed in accordance with Kazakhstan data protection regulations.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Info Column */}
          <div ref={contactRef} className="lg:col-span-2">
            <div className="glass-card p-8 lg:p-10">
              <h3 className="font-display font-semibold text-silver-white text-xl mb-8">
                Contact Information
              </h3>

              {/* Office Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-electric-teal flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-silver-white">SAQ Technologies</p>
                  <p className="text-sm text-muted-silver">Nur-Sultan Tower, 12th Floor</p>
                  <p className="text-sm text-muted-silver">Qabanbay Batyr Ave 18</p>
                  <p className="text-sm text-muted-silver">Astana 010000, Kazakhstan</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 mt-8">
                <Mail className="w-5 h-5 text-electric-teal flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-electric-teal">enterprise@saq.kz</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mt-8">
                <Phone className="w-5 h-5 text-electric-teal flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-silver-white">+7 (7172) 55-00-00</p>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-start gap-4 mt-8">
                <Clock className="w-5 h-5 text-electric-teal flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-silver">Response within 24 hours</p>
                  <p className="text-sm text-dark-silver">
                    Business hours: Mon–Fri, 9:00–18:00 (Astana time)
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 flex items-center justify-center">
                <div className="relative w-[200px] h-[150px]">
                  {/* Kazakhstan outline approximation */}
                  <svg viewBox="0 0 200 150" className="w-full h-full">
                    <path
                      d="M40,60 Q60,20 100,25 Q140,20 165,50 Q185,80 170,110 Q150,140 100,135 Q50,140 30,110 Q15,80 40,60 Z"
                      fill="rgba(0, 212, 170, 0.08)"
                      stroke="rgba(0, 212, 170, 0.15)"
                      strokeWidth="1"
                    />
                    {/* Astana dot */}
                    <circle cx="115" cy="48" r="4" fill="#00D4AA">
                      <animate
                        attributeName="r"
                        values="4;6;4"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="1;0.6;1"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="115"
                      cy="48"
                      r="8"
                      fill="none"
                      stroke="#00D4AA"
                      strokeWidth="1"
                      opacity="0.3"
                    >
                      <animate
                        attributeName="r"
                        values="6;12;6"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.3;0;0.3"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <text
                      x="115"
                      y="42"
                      textAnchor="middle"
                      fill="#00D4AA"
                      fontSize="8"
                      fontFamily="Inter"
                    >
                      Astana
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
