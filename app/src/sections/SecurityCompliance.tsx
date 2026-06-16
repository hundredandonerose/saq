import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ShieldCheck, Lock, FileCheck, Key } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const badges = [
  { icon: ShieldCheck, name: 'ISO 27001' },
  { icon: Lock, name: 'SOC 2 Type II' },
  { icon: FileCheck, name: 'Kazakh Data Privacy' },
  { icon: Key, name: 'AES-256 Encryption' },
]

const tableData = [
  { standard: 'ISO 27001:2022', status: 'Certified', details: 'Information Security Management System certified by accredited body' },
  { standard: 'SOC 2 Type II', status: 'Certified', details: 'Trust Services Criteria for Security, Availability & Confidentiality' },
  { standard: 'Kazakh Data Privacy Law', status: 'Compliant', details: 'Full compliance with Kazakhstan Law on Personal Data Protection' },
  { standard: 'AES-256 Encryption', status: 'Implemented', details: 'At-rest and in-transit encryption using AES-256-GCM' },
  { standard: 'TLS 1.3', status: 'Implemented', details: 'All API and web traffic encrypted with TLS 1.3' },
]

const securityDetails = [
  'Penetration testing: Quarterly by certified third parties',
  'Vulnerability management: Continuous scanning with 24h SLA for critical',
  'Access controls: Role-based with MFA enforcement',
  'Audit logging: Complete immutable audit trail',
  'Incident response: 15-minute escalation for critical alerts',
  'Disaster recovery: 99.9% availability SLA, 4h RTO',
]

export default function SecurityCompliance() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const badgesRef = useRef<HTMLDivElement>(null)
  const tableRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const header = headerRef.current
    const badgesEl = badgesRef.current
    const tableEl = tableRef.current
    if (!header || !badgesEl || !tableEl) return

    gsap.from(header.children, {
      y: 40, opacity: 0, duration: 0.8, ease: 'expo.out', stagger: 0.1,
      scrollTrigger: { trigger: header, start: 'top 85%', once: true },
    })

    gsap.from(badgesEl.children, {
      scale: 0.8, opacity: 0, duration: 0.6, ease: 'expo.out', stagger: 0.1,
      scrollTrigger: { trigger: badgesEl, start: 'top 85%', once: true },
    })

    gsap.from(tableEl, {
      y: 30, opacity: 0, duration: 0.8, ease: 'expo.out',
      scrollTrigger: { trigger: tableEl, start: 'top 85%', once: true },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === header || t.trigger === badgesEl || t.trigger === tableEl) t.kill()
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="security"
      className="relative py-24 sm:py-32 lg:py-40 bg-deep-navy"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-16 lg:mb-20">
          <div className="section-overline mb-4">Security & Compliance</div>
          <h2
            className="font-display font-semibold text-silver-white leading-tight tracking-[-0.03em]"
            style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
          >
            Enterprise-Grade Security You Can Trust
          </h2>
          <p
            className="font-display text-muted-silver mt-4"
            style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
          >
            {'\u0421\u0435\u043D\u0435 \u0430\u043B\u0430\u0442\u044B\u043D \u043A\u04D9\u0441\u0456\u043F\u049B\u043E\u0439 \u0434\u0435\u04A3\u0433\u0435\u0439\u0434\u0435\u0433\u0456 \u049B\u0430\u0443\u0456\u043F\u0441\u0456\u0437\u0434\u0456\u043A'}
          </p>
          <p className="text-muted-silver text-base sm:text-lg max-w-[720px] mt-6 leading-relaxed">
            SAQ meets the highest international security standards while ensuring full compliance
            with Kazakhstan's data protection regulations.
          </p>
        </div>

        {/* Certification Badges */}
        <div
          ref={badgesRef}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mb-16 lg:mb-20"
        >
          {badges.map((badge) => {
            const Icon = badge.icon
            return (
              <div
                key={badge.name}
                className="flex flex-col items-center gap-3 group cursor-default"
              >
                <div className="w-24 h-24 sm:w-[120px] sm:h-[120px] rounded-full bg-[rgba(10,22,40,0.8)] border border-[rgba(0,212,170,0.15)] flex items-center justify-center transition-all duration-300 group-hover:border-electric-teal group-hover:scale-105">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-electric-teal" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-silver text-center">
                  {badge.name}
                </span>
              </div>
            )
          })}
        </div>

        {/* Compliance Table */}
        <div ref={tableRef} className="glass-card overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-[rgba(0,212,170,0.08)]">
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-electric-teal">
                    Standard
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-electric-teal">
                    Status
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-electric-teal">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr
                    key={row.standard}
                    className={`transition-colors duration-200 hover:bg-[rgba(0,212,170,0.05)] ${
                      i % 2 === 0 ? 'bg-[rgba(10,22,40,0.4)]' : 'bg-[rgba(10,22,40,0.6)]'
                    }`}
                  >
                    <td className="px-6 py-4 text-sm text-silver-white font-medium">
                      {row.standard}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 text-sm text-emerald-safe">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-safe" />
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-silver">
                      {row.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Security Architecture Note */}
        <div className="glass-card p-8 lg:p-10 max-w-[800px] mx-auto">
          <h3 className="font-display font-semibold text-silver-white text-xl mb-4">
            Security Architecture
          </h3>
          <p className="text-muted-silver leading-relaxed mb-6">
            SAQ employs a zero-trust architecture with defense in depth. All components run in
            isolated environments with strict access controls. Regular penetration testing and
            vulnerability assessments ensure ongoing security posture.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {securityDetails.map((detail) => (
              <div key={detail} className="flex items-start gap-2 text-sm text-muted-silver">
                <span className="w-1 h-1 rounded-full bg-electric-teal mt-2 flex-shrink-0" />
                {detail}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
