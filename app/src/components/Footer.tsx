import { Shield, Linkedin, Send, MessageCircle, MapPin, Mail, Phone } from 'lucide-react'

const productLinks = [
  'Email Guardian',
  'Communication Graph',
  'ERP-Aware Detection',
  'Phishing Simulation',
  'Pricing',
  'Security & Compliance',
]

const companyLinks = ['About SAQ', 'Careers', 'Blog', 'Press Kit', 'Contact']

export default function Footer() {
  return (
    <footer className="bg-deep-navy border-t border-[rgba(0,212,170,0.08)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-20 pb-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-electric-teal" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none text-silver-white tracking-tight">
                  SAQ
                </span>
                <span className="text-[8px] font-medium uppercase tracking-[0.14em] text-dark-silver">
                  Sentinel AI Kazakhstan
                </span>
              </div>
            </div>
            <p className="text-sm text-dark-silver max-w-[240px] leading-relaxed">
              AI-powered financial fraud prevention for enterprises in Kazakhstan and Central Asia.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-silver-white mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <span className="text-sm text-muted-silver hover:text-electric-teal transition-colors duration-200 cursor-default">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-silver-white mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <span className="text-sm text-muted-silver hover:text-electric-teal transition-colors duration-200 cursor-default">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-silver-white mb-4">
              Connect
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-muted-silver">
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </div>
              <div className="flex items-center gap-2 text-muted-silver">
                <Send className="w-4 h-4" />
                <span className="text-sm">Telegram</span>
              </div>
              <div className="flex items-center gap-2 text-muted-silver">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">WhatsApp</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-electric-teal" />
                <span className="text-sm text-electric-teal">enterprise@saq.kz</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-silver" />
                <span className="text-sm text-muted-silver">+7 (7172) 55-00-00</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-dark-silver" />
                <span className="text-sm text-dark-silver">Astana, Kazakhstan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-silver">
            &copy; 2025 SAQ Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-dark-silver">
            <span className="hover:text-muted-silver transition-colors cursor-default">
              Privacy Policy
            </span>
            <span>&middot;</span>
            <span className="hover:text-muted-silver transition-colors cursor-default">
              Terms of Service
            </span>
            <span>&middot;</span>
            <span className="hover:text-muted-silver transition-colors cursor-default">
              Cookie Policy
            </span>
          </div>
          <p className="text-sm text-dark-silver">Made in Kazakhstan</p>
        </div>
      </div>
    </footer>
  )
}
