'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Eyebrow from '@/components/Eyebrow'
import Tag from '@/components/Tag'
import AnimateInView from '@/components/AnimateInView'
import StatCounter from '@/components/StatCounter'

/* ─── Hero ─────────────────────────────────────────────────────────────── */
function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  const fade = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  })

  return (
    <section className="flex items-start justify-between px-5 md:px-[120px] py-[30px] md:py-[60px] gap-8 min-[1440px]:gap-6 flex-col min-[1440px]:flex-row">
      {/* Left column */}
      <div className="flex flex-col gap-8 md:gap-10 items-start w-full min-[1440px]:w-[592px]">
        {/* Eyebrow + headline */}
        <div className="flex flex-col gap-2 md:gap-[10px] w-full">
          <div style={fade(0)}>
            <Eyebrow label="Product Designer" className="pb-4 md:pb-6" />
          </div>

          {/* Mobile/tablet: single line heading */}
          <div className="min-[1440px]:hidden flex flex-col" style={fade(100)}>
            <h1
              className="text-[32px] md:text-[48px] font-light leading-[1.15] tracking-[-0.04em]"
              style={{ color: '#2b5ce6' }}
            >
              Designing for{' '}
              <strong className="font-bold">growth</strong>
              {'. '}Shipping what{' '}
              <strong className="font-bold">matters.</strong>
            </h1>
          </div>

          {/* Desktop: multi-line display */}
          <div className="hidden min-[1440px]:flex flex-col" style={fade(100)}>
            <h1 className="flex flex-col" aria-label="Designing for growth. Shipping what matters.">
              <span
                className="text-[96px] font-light leading-none tracking-[-0.04em]"
                style={{ color: '#2b5ce6' }}
              >
                Designing for
              </span>
              <span
                className="text-[96px] font-bold leading-[1.3] tracking-[-0.04em]"
                style={{ color: '#2b5ce6' }}
              >
                growth.
              </span>
              <span
                className="text-[96px] font-light leading-none tracking-[-0.04em]"
                style={{ color: '#2b5ce6' }}
              >
                Shipping what
              </span>
              <span
                className="text-[96px] font-bold leading-[1.3] tracking-[-0.04em]"
                style={{ color: '#2b5ce6' }}
              >
                matters.
              </span>
            </h1>
          </div>
        </div>

        {/* Mobile/tablet: photo between headline and stats */}
        <div className="min-[1440px]:hidden w-full flex justify-center" style={fade(200)}>
          <div className="relative w-[249px] h-[284px] rounded-[10px] overflow-hidden">
            <Image
              src="/images/hero-portrait.jpg"
              alt="Esther Moriarty"
              fill
              className="object-cover"
              priority
              sizes="249px"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-5 md:gap-10 items-center" style={fade(300)}>
          <StatCounter value="+10%" label="cvr uplift" />
          <StatCounter value="5+" label="Years" />
          <StatCounter value="0→1" label="launches" />
          <StatCounter value="20+" label="experiments" />
        </div>
      </div>

      {/* Desktop portrait */}
      <div
        className="hidden min-[1440px]:block relative w-[510px] h-[618px] rounded-[10px] overflow-hidden shrink-0"
        style={fade(200)}
      >
        <Image
          src="/images/hero-portrait.jpg"
          alt="Esther Moriarty"
          fill
          className="object-cover"
          priority
          sizes="510px"
        />
      </div>
    </section>
  )
}

/* ─── Case study card ───────────────────────────────────────────────────── */
interface CaseStudy {
  slug: string
  tags: string[]
  title: string
  subtitle: string
  description: string
  date: string
  screen: string
  screenAlt: string
  bgColor?: string
  rawScreen?: string
}

const caseStudies: CaseStudy[] = [
  {
    slug: 'recipe-preferences',
    tags: ['A/B test', 'acquisition', 'ios + web', '6 markets', '2 brands'],
    title: 'Recipe Preferences',
    subtitle: '+10% CVR. Two brands. Six markets.',
    description:
      'One solution for two teams. I built the case, ran a six-week experiment at 95% confidence, and delivered a +10% uplift in checkout conversion rate while simultaneously validating a retention hypothesis on skip rate and churn. Six markets, two brands.',
    date: 'Marley Spoon & Dinnerly 2024',
    screen: '/images/recipe-preferences-screen.jpg',
    screenAlt: 'Recipe Preferences feature screenshot',
    bgColor: '#ffffff',
    rawScreen: '/images/recipe-pref-desktop-mobile-mockup.png',
  },
  {
    slug: 'delivery-pricing',
    tags: ['feature', 'pricing ux', 'ios + web', '6 markets', '2 brands'],
    title: 'Delivery Pricing',
    subtitle: 'A 7.5m capacity crisis. Solved through pricing design.',
    description:
      'I turned a business-driven pricing mechanism into something that felt like a choice, not a penalty. No PM, no brief beyond the business problem. Monday volume dropped from 43% to 25%. €7.5m investment deferred.',
    date: 'Marley Spoon & Dinnerly 2024',
    screen: '/images/delivery-pricing-screen.jpg',
    screenAlt: 'Delivery Pricing feature screenshot',
    bgColor: '#ffffff',
    rawScreen: '/images/delivery-pricing-desktop-mobile-mockup.png',
  },
  {
    slug: 'saint-loba',
    tags: ['freelance', 'brand identity', 'webflow', 'cms build', 'shopify api'],
    title: 'Saint Loba',
    subtitle: 'Zero to live site. Brand identity to shipped product.',
    description:
      'A different kind of brief. Brand identity from scratch, Webflow build, CMS architecture, and Shopify API, so the client never needs a developer for routine updates. The site is live and the client manages it independently. Included here to show visual craft and implementation range alongside the product work.',
    date: 'Freelance 2025-2026',
    screen: '/images/saint-loba-screen.jpg',
    screenAlt: 'Saint Loba website screenshot',
    bgColor: '#edebe9',
    rawScreen: '/images/saint-loba-desktop-mobile-mockup.png',
  },
]

function CaseStudyCard({ cs, index }: { cs: CaseStudy; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <AnimateInView delay={index * 80}>
      <article
        className="flex flex-col min-[1440px]:flex-row gap-6 items-start px-5 md:px-[120px] py-[30px] md:py-[60px]"
        style={{ borderTop: '0.5px solid rgba(43,92,230,0.13)' }}
      >
        {/* MacBook mockup */}
        <Link
          href={`/work/${cs.slug}`}
          className="relative block select-none w-full min-[1440px]:w-auto min-[1440px]:shrink-0"
          aria-label={`View ${cs.title} case study`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onMouseDown={(e) => {
            ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px) scale(0.98)'
          }}
          onMouseUp={(e) => {
            ;(e.currentTarget as HTMLElement).style.transform = hovered
              ? 'translateY(-4px)'
              : 'translateY(0)'
          }}
          style={{
            transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
            transition: 'transform 0.3s ease, filter 0.3s ease',
            filter: hovered ? 'drop-shadow(0 12px 24px rgba(43,92,230,0.12))' : 'none',
          }}
        >
          {/* MacBook frame + screen, or raw mockup */}
          <div className="relative w-full min-[1440px]:w-[588px]" style={{ aspectRatio: '588/374' }}>
            {cs.rawScreen ? (
              <Image
                src={cs.rawScreen}
                alt={cs.screenAlt}
                fill
                className="object-cover object-top rounded-[6px]"
                sizes="(max-width: 1439px) calc(100vw - 40px), 588px"
              />
            ) : (
              <>
                {/* Screenshot inside MacBook */}
                <div
                  className="absolute overflow-hidden"
                  style={{
                    left: '12.94%',
                    top: '13.54%',
                    width: '74.18%',
                    height: '72.89%',
                    backgroundColor: cs.bgColor,
                  }}
                >
                  <Image
                    src={cs.screen}
                    alt={cs.screenAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1439px) calc((100vw - 40px) * 0.74), 436px"
                  />
                </div>
                {/* MacBook frame on top */}
                <Image
                  src="/images/macbook-frame.png"
                  alt=""
                  fill
                  className="relative z-10 pointer-events-none"
                  sizes="(max-width: 1439px) calc(100vw - 40px), 588px"
                  aria-hidden
                />
              </>
            )}
          </div>
        </Link>

        {/* Card info */}
        <div className="flex flex-col justify-between gap-4 min-[1440px]:px-9 min-[1440px]:py-8 py-0 min-[1440px]:h-[360px] w-full">
          <div className="flex flex-col gap-4">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {cs.tags.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>

            <Link href={`/work/${cs.slug}`} className="group select-none">
              <h2
                className="text-[22px] md:text-[32px] font-medium leading-[1.15] tracking-[-0.025em] group-hover:opacity-70 group-active:opacity-40 transition-opacity"
                style={{ color: '#2b5ce6' }}
              >
                {cs.title}
              </h2>
            </Link>

            <p
              className="text-[14px] font-medium leading-[1.6] tracking-[-0.02em]"
              style={{ color: '#2b5ce6' }}
            >
              {cs.subtitle}
            </p>

            <p
              className="text-[15px] font-light leading-[1.75]"
              style={{ color: 'rgba(43,92,230,0.75)' }}
            >
              {cs.description}
            </p>
          </div>

          <p
            className="text-[12px] font-light leading-[1.65]"
            style={{ color: 'rgba(43,92,230,0.6)' }}
          >
            {cs.date}
          </p>
        </div>
      </article>
    </AnimateInView>
  )
}

/* ─── About ─────────────────────────────────────────────────────────────── */
function About() {
  return (
    <AnimateInView>
      <section
        id="about"
        className="flex flex-col min-[1440px]:flex-row gap-8 min-[1440px]:gap-6 items-start px-5 md:px-[120px] py-[30px] md:py-[60px]"
        style={{ borderTop: '0.5px solid rgba(43,92,230,0.13)' }}
      >
        {/* Left */}
        <div className="flex flex-col items-start w-full min-[1440px]:w-[588px] min-[1440px]:shrink-0">
          <Eyebrow label="About" className="pb-4 md:pb-6" />
          {/* Mobile/tablet: inline heading */}
          <h2
            className="min-[1440px]:hidden text-[28px] md:text-[40px] font-light leading-[1.15] tracking-[-0.03em]"
            style={{ color: '#2b5ce6' }}
            aria-label="Outcomes over output. Always."
          >
            Outcomes over <strong className="font-bold">output.</strong>
            <br />
            Always.
          </h2>
          {/* Desktop: stacked heading */}
          <h2
            className="hidden min-[1440px]:flex flex-col"
            aria-label="Outcomes over output. Always."
          >
            <span
              className="text-[56px] font-light leading-[1.1] tracking-[-0.03em]"
              style={{ color: '#2b5ce6' }}
            >
              Outcomes over
            </span>
            <span
              className="text-[56px] font-bold leading-[1.1] tracking-[-0.03em]"
              style={{ color: '#2b5ce6' }}
            >
              output.
            </span>
            <span
              className="text-[56px] font-light leading-[1.1] tracking-[-0.03em]"
              style={{ color: '#2b5ce6' }}
            >
              Always.
            </span>
          </h2>
        </div>

        {/* Right */}
        <div className="flex flex-col pt-0 min-[1440px]:pt-9 w-full min-[1440px]:w-[588px]">
          <div
            className="text-[16px] font-light leading-[1.8] space-y-4"
            style={{ color: '#2b5ce6' }}
          >
            <p>
              I&apos;m a Product Designer based in Berlin. For two years at Marley Spoon I was the{' '}
              <strong className="font-medium">sole designer across Growth and Retention</strong>
              {' '}owning the acquisition funnel across two brands and six markets.
            </p>
            <p>
              I initiated experiments, wrote hypotheses, defined success metrics, and shipped
              features that moved real numbers, including a{' '}
              <strong className="font-semibold">+10% CVR uplift</strong> from an A/B test I{' '}
              <span className="font-light">led end to end</span>. For part of that time I was also{' '}
              <strong className="font-semibold">operating without a Product Manager</strong>,
              partnering directly with Engineering to keep initiatives moving.
            </p>
            <p>
              I&apos;ve also designed and{' '}
              <strong className="font-semibold">built client websites end to end</strong>, brand
              identity, Figma, Webflow, CMS architecture, Shopify API, which keeps me close to
              implementation in a way that makes me a better collaborator with engineers.
            </p>
            <p>
              AI is a core part of my workflow, from research and ideation through design and build.
              I&apos;m experienced in prompt engineering, creating Custom GPTs, vibe-coding
              prototypes, Claude Code and building time-saving automations. I completed a{' '}
              <strong className="font-bold">300-hour AI for Business certification</strong> in early
              2026.
            </p>
          </div>
        </div>
      </section>
    </AnimateInView>
  )
}

/* ─── Skills ─────────────────────────────────────────────────────────────── */
const skills = [
  {
    category: 'Product & Growth',
    items: [
      'A/B testing & experimentation',
      'Hypothesis writing',
      'KPI definition',
      'Product discovery',
      'Roadmap collaboration',
      'Stakeholder alignment',
    ],
  },
  {
    category: 'Design',
    items: [
      'Interaction design',
      'Information architecture',
      'Design systems',
      'Responsive design',
      'Visual & brand design',
      'Prototyping',
    ],
  },
  {
    category: 'Research & Analytics',
    items: [
      'Amplitude',
      'Hotjar & VoC',
      'UserTesting.com',
      'Moderated user testing',
      'Competitive analysis',
      'Behavioural analytics',
    ],
  },
  {
    category: 'Tools & Build',
    items: [
      'Figma',
      'Webflow',
      'Framer',
      'Notion',
      'Claude & AI tools',
      'Jira / Confluence',
    ],
  },
]

function Skills() {
  return (
    <AnimateInView>
      <section
        id="skills"
        className="px-5 md:px-[120px] py-[30px] md:pb-[60px] pt-[30px] md:pt-[62px]"
        style={{ borderTop: '0.5px solid rgba(43,92,230,0.13)' }}
      >
        <Eyebrow label="Skills & Tools" className="pb-6 md:pb-8" />

        {/* Desktop: 4-column bordered table */}
        <div
          className="hidden lg:flex rounded-[10px] border overflow-hidden"
          style={{ borderColor: 'rgba(43,92,230,0.13)', borderWidth: '0.5px' }}
        >
          {skills.map((col, i) => (
            <div
              key={col.category}
              className="flex flex-col gap-6 p-6 flex-1"
              style={{
                borderRight:
                  i < skills.length - 1 ? '0.5px solid rgba(43,92,230,0.13)' : 'none',
              }}
            >
              <p
                className="text-[10px] font-medium uppercase tracking-[0.12em]"
                style={{ color: 'rgba(43,92,230,0.6)' }}
              >
                {col.category}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="text-[13px] font-light leading-[1.65]"
                    style={{ color: '#2b5ce6' }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile/tablet: 2×2 grid */}
        <div className="lg:hidden grid grid-cols-2 gap-3">
          {skills.map((col) => (
            <div
              key={col.category}
              className="flex flex-col gap-5 px-[10px] py-5 rounded-[10px] border"
              style={{ borderColor: 'rgba(43,92,230,0.13)', borderWidth: '0.5px' }}
            >
              <p
                className="text-[10px] font-medium uppercase tracking-[0.12em]"
                style={{ color: 'rgba(43,92,230,0.6)' }}
              >
                {col.category}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="text-[13px] font-light leading-[1.65]"
                    style={{ color: '#2b5ce6' }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </AnimateInView>
  )
}

/* ─── Experience ─────────────────────────────────────────────────────────── */
const experience = [
  {
    period: '2024 - Present',
    role: 'Independent designer',
    company: 'Freelance',
    description:
      'Designed and built client websites end to end — brand identity, Figma, Webflow, CMS, and Shopify API integration. Completed a 300-hour AI for Business certification at WBS Coding School.',
  },
  {
    period: '2022 — 2024',
    role: 'Product Designer',
    company: 'Marley Spoon',
    description:
      'Sole designer across Growth and Retention. Owned the acquisition funnel strategy across two brands, two teams, three surfaces, and six markets. Initiated and shipped A/B tests delivering a +10% CVR uplift. Operated with extended ownership during a 6-month PM gap.',
  },
  {
    period: '2021 — 2022',
    role: 'UX/UI Designer',
    company: 'ANCC Studio',
    description:
      'Designed web and mobile experiences for international clients including ZARA and WiSEED. Delivered high-fidelity prototypes and contributed to brand-aligned design systems.',
  },
]

function Experience() {
  return (
    <AnimateInView>
      <section
        id="experience"
        className="flex flex-col gap-5 px-5 md:px-[120px] py-[30px] md:py-[60px]"
        style={{ borderTop: '0.5px solid rgba(43,92,230,0.13)' }}
      >
        <Eyebrow label="Experience" />
        {experience.map((job) => (
          <div key={job.company} className="flex flex-col md:flex-row gap-4 md:gap-[120px]">
            <div className="shrink-0 pt-0 md:pt-1.5 md:w-[88px]">
              <p
                className="text-[10px] font-medium uppercase tracking-[0.12em] whitespace-nowrap"
                style={{ color: 'rgba(43,92,230,0.6)' }}
              >
                {job.period}
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex flex-col gap-1">
                <p
                  className="text-[14px] font-semibold leading-[1.75]"
                  style={{ color: '#2b5ce6' }}
                >
                  {job.role}
                </p>
                <p
                  className="text-[12px] font-light leading-[1.65]"
                  style={{ color: 'rgba(43,92,230,0.6)' }}
                >
                  {job.company}
                </p>
              </div>
              <p
                className="text-[14px] font-light leading-[1.75]"
                style={{ color: 'rgba(43,92,230,0.75)' }}
              >
                {job.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </AnimateInView>
  )
}

/* ─── Education ──────────────────────────────────────────────────────────── */
const education = [
  {
    year: '2026',
    title: 'AI for Business',
    institution: 'WBS Coding School · 300 hours · EU AI Act certified',
  },
  {
    year: '2024',
    title: 'Product-Led Growth Certification',
    institution: 'ADPList',
  },
  {
    year: '2021',
    title: 'UX Design Certification',
    institution: 'CareerFoundry · 800 hours',
  },
  {
    year: '2014',
    title: 'BA Art History, First Class Honours',
    institution: 'University of Nottingham',
  },
]

function Education() {
  return (
    <AnimateInView>
      <section
        id="education"
        className="flex flex-col gap-5 px-5 md:px-[120px] py-[30px] md:py-[60px]"
        style={{ borderTop: '0.5px solid rgba(43,92,230,0.13)' }}
      >
        <div className="pb-2">
          <Eyebrow label="Education & Certifications" />
        </div>
        {/* Desktop: 2-column grid */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {education.map((ed) => (
            <div
              key={ed.year}
              className="flex flex-col gap-3.5 p-8 rounded-[10px]"
              style={{ backgroundColor: 'rgba(43,92,230,0.06)' }}
            >
              <p
                className="text-[10px] font-medium uppercase tracking-[0.12em]"
                style={{ color: 'rgba(43,92,230,0.6)' }}
              >
                {ed.year}
              </p>
              <div className="flex flex-col gap-2.5">
                <p
                  className="text-[14px] font-semibold leading-[1.75]"
                  style={{ color: '#2b5ce6' }}
                >
                  {ed.title}
                </p>
                <p
                  className="text-[13px] font-light leading-[1.65]"
                  style={{ color: 'rgba(43,92,230,0.6)' }}
                >
                  {ed.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile: single column */}
        <div className="md:hidden flex flex-col gap-4">
          {education.map((ed) => (
            <div
              key={ed.year}
              className="flex flex-col gap-3 px-[10px] py-5 rounded-[10px]"
              style={{ backgroundColor: 'rgba(43,92,230,0.06)' }}
            >
              <p
                className="text-[10px] font-medium uppercase tracking-[0.12em]"
                style={{ color: 'rgba(43,92,230,0.6)' }}
              >
                {ed.year}
              </p>
              <div className="flex flex-col gap-2">
                <p
                  className="text-[14px] font-semibold leading-[1.75]"
                  style={{ color: '#2b5ce6' }}
                >
                  {ed.title}
                </p>
                <p
                  className="text-[13px] font-light leading-[1.65]"
                  style={{ color: 'rgba(43,92,230,0.6)' }}
                >
                  {ed.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimateInView>
  )
}

/* ─── Contact ────────────────────────────────────────────────────────────── */
function Contact() {
  return (
    <AnimateInView>
      <section
        id="contact"
        className="flex flex-col md:flex-row items-start justify-between gap-8 px-5 md:px-[120px] py-[30px] md:pb-[60px] md:pt-[62px]"
        style={{ borderTop: '0.5px solid rgba(43,92,230,0.13)' }}
      >
        <div className="flex flex-col items-start">
          <Eyebrow label="Contact" className="pb-4 md:pb-6" />
          <h2 className="flex flex-col" aria-label="Let's work together.">
            <span
              className="text-[28px] md:text-[56px] font-light leading-[1.1] tracking-[-0.03em]"
              style={{ color: '#2b5ce6' }}
            >
              Let&apos;s work
            </span>
            <span
              className="text-[28px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.03em]"
              style={{ color: '#2b5ce6' }}
            >
              together.
            </span>
          </h2>
        </div>

        <nav
          className="flex flex-row md:flex-col items-start justify-between md:justify-start gap-3 md:gap-4 md:pt-9 w-full md:w-auto"
          aria-label="Contact links"
        >
          <a
            href="mailto:moriarty.esther@gmail.com"
            className="text-[14px] font-light leading-normal tracking-[0.01em] underline decoration-solid hover:opacity-60 active:opacity-30 transition-opacity select-none"
            style={{ color: '#2b5ce6' }}
          >
            Email ↗
          </a>
          <a
            href="https://linkedin.com/in/esthermoriarty"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-light leading-normal tracking-[0.01em] underline decoration-solid hover:opacity-60 active:opacity-30 transition-opacity select-none"
            style={{ color: '#2b5ce6' }}
          >
            LinkedIn ↗
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-light leading-normal tracking-[0.01em] underline decoration-solid hover:opacity-60 active:opacity-30 transition-opacity select-none"
            style={{ color: '#2b5ce6' }}
          >
            Download CV ↗
          </a>
        </nav>
      </section>
    </AnimateInView>
  )
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="pt-12 md:pt-[60px]">
        <Hero />
        <section id="work" aria-label="Work">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.slug} cs={cs} index={i} />
          ))}
        </section>
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
