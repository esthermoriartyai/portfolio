import type { Metadata } from 'next'
import Image from 'next/image'
import CaseStudyLayout from '@/components/CaseStudyLayout'
import Eyebrow from '@/components/Eyebrow'
import Tag from '@/components/Tag'
import AnimateInView from '@/components/AnimateInView'

export const metadata: Metadata = {
  title: 'Saint Loba — Esther Moriarty',
  description:
    'Zero to live site. Brand identity, Webflow build, CMS architecture, and Shopify API integration. One designer, one commission.',
}

const tags = ['Brand Identity', 'Web Design', 'Webflow', 'Shopify API', 'Freelance']
const stats = [
  { value: 'E2E', label: 'Brief to live site' },
  { value: '3', label: 'Breakpoints' },
  { value: '2', label: 'CRM Databases' },
]

const bodyClass = 'text-[17px] font-light leading-[1.8]'
const bodyStyle = { color: 'rgba(43,92,230,0.75)' }

function Hi({ children }: { children: React.ReactNode }) {
  return (
    <strong className="font-semibold" style={{ color: '#2b5ce6' }}>
      {children}
    </strong>
  )
}

function InsightCard({ title, body }: { title: string; body: string }) {
  return (
    <div
      className="flex flex-col gap-2.5 p-5 md:p-8 rounded-[10px]"
      style={{ backgroundColor: 'rgba(43,92,230,0.06)' }}
    >
      <p className="text-[14px] font-semibold leading-[1.75]" style={{ color: '#2b5ce6' }}>
        {title}
      </p>
      <p className="text-[13px] font-light leading-[1.65]" style={{ color: 'rgba(43,92,230,0.75)' }}>
        {body}
      </p>
    </div>
  )
}

function SectionHeader({
  eyebrow,
  light,
  bold,
}: {
  eyebrow: string
  light: string
  bold?: string
}) {
  return (
    <div className="flex flex-col items-start w-full min-[1440px]:shrink-0 min-[1440px]:w-[588px]">
      <Eyebrow label={eyebrow} className="pb-4 md:pb-6" />
      <h2
        className="text-[24px] md:text-[56px] font-light leading-[1.1] tracking-[-0.03em]"
        style={{ color: '#2b5ce6' }}
        dangerouslySetInnerHTML={{
          __html: bold
            ? `${light}<span style="font-weight:600">${bold}</span>`
            : light,
        }}
      />
    </div>
  )
}

function TwoCol({
  eyebrow,
  light,
  bold,
  children,
}: {
  eyebrow: string
  light: string
  bold?: string
  children: React.ReactNode
}) {
  return (
    <AnimateInView>
      <section
        className="flex flex-col min-[1440px]:flex-row gap-8 min-[1440px]:gap-6 items-start px-5 md:px-[120px] py-[30px] md:py-[60px]"
        style={{ borderTop: '0.5px solid rgba(43,92,230,0.13)' }}
      >
        <SectionHeader eyebrow={eyebrow} light={light} bold={bold} />
        <div className="flex flex-col pt-0 min-[1440px]:pt-9 w-full min-[1440px]:w-[588px] space-y-4">
          {children}
        </div>
      </section>
    </AnimateInView>
  )
}

function FullHeader({
  eyebrow,
  light,
  bold,
  sub,
}: {
  eyebrow: string
  light: string
  bold?: string
  sub?: string
}) {
  return (
    <AnimateInView>
      <section
        className="px-5 md:px-[120px] pb-[30px] pt-[30px] md:pb-[60px] md:pt-[62px]"
        style={{ borderTop: '0.5px solid rgba(43,92,230,0.13)' }}
      >
        <div className="w-full md:max-w-[792px]">
          <Eyebrow label={eyebrow} className="pb-4 md:pb-6" />
          <h2
            className="text-[24px] md:text-[56px] font-light leading-[1.1] tracking-[-0.03em]"
            style={{ color: '#2b5ce6' }}
            dangerouslySetInnerHTML={{
              __html: bold
                ? `${light}<span style="font-weight:600">${bold}</span>`
                : light,
            }}
          />
          {sub && (
            <p
              className="mt-6 text-[17px] font-light leading-[1.8]"
              style={{ color: 'rgba(43,92,230,0.75)' }}
            >
              {sub}
            </p>
          )}
        </div>
      </section>
    </AnimateInView>
  )
}

export default function SaintLobaPage() {
  return (
    <CaseStudyLayout>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <AnimateInView>
        <section className="flex flex-col min-[1440px]:flex-row items-start justify-between gap-6 md:gap-10 px-5 md:px-[120px] py-[30px] md:py-[60px]">
          {/* Left: text content */}
          <div className="flex flex-col gap-6 md:gap-10 flex-1">
            <div className="flex flex-col gap-6">
              <Eyebrow label="Freelance" />
              <h1
                className="flex items-center gap-3 flex-wrap text-[48px] md:text-[96px] tracking-[-0.04em] leading-none"
                style={{ color: '#2b5ce6' }}
              >
                <span className="font-light">Saint</span>
                <span className="font-bold leading-[1.3]">Loba</span>
              </h1>
            </div>

            <p
              className="text-[16px] md:text-[21px] font-medium leading-[1.6] tracking-[-0.02em]"
              style={{ color: '#2b5ce6' }}
            >
              Zero to live site. Brand identity, Webflow build, CMS architecture, and Shopify API
              integration. One designer, one commission. The site is live, the client manages it
              independently.
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>

            <div className="flex gap-10 items-center flex-wrap">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span
                    className="text-[28px] md:text-[36px] font-light leading-none tracking-[-0.04em]"
                    style={{ color: '#2b5ce6' }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-[10px] font-medium uppercase tracking-[0.12em]"
                    style={{ color: 'rgba(43,92,230,0.6)' }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: iPhone mockup */}
          <div className="w-full min-[1440px]:w-[440px] min-[1440px]:shrink-0">
            <Image
              src="/images/saint-loba-mobile-mockup.png"
              alt="Saint Loba — mobile site mockup"
              width={1312}
              height={1485}
              className="w-full h-auto"
              sizes="(max-width: 1439px) calc(100vw - 40px), 440px"
              priority
            />
          </div>
        </section>
      </AnimateInView>

      {/* ── The Brief ─────────────────────────────────────────────────── */}
      <TwoCol
        eyebrow="The Brief"
        light="From brief to live site.<br/>"
        bold="End to end."
      >
        <p className={bodyClass} style={bodyStyle}>
          Saint Loba is a cultural platform representing artists of colour, selling certified art
          print editions through their e-commerce site.
        </p>
        <p className={bodyClass} style={bodyStyle}>
          The client came with a mission, a name, and visual references, but no visual identity, no
          website, and no content.{' '}
          <Hi>
            My brief was to create everything from scratch and hand off a site the client could
            manage independently.
          </Hi>{' '}
          The constraints were real: no content ready at the start, a client unfamiliar with
          responsive design, and a hero section planned around a video that didn&apos;t exist yet.
        </p>
      </TwoCol>

      {/* ── Scope grid ────────────────────────────────────────────────── */}
      <AnimateInView>
        <section
          className="px-5 md:px-[120px] pb-[30px] md:pb-[60px]"
        >
          <div
            className="flex flex-col lg:flex-row overflow-hidden rounded-[10px]"
            style={{ border: '0.5px solid rgba(43,92,230,0.13)' }}
          >
            {[
              {
                label: 'Brand Identity',
                body: 'Visual identity from scratch. Typography, colour, editorial direction.',
              },
              {
                label: 'Web Design',
                body: 'Minimal editorial design across all pages, homepage, artists, shop, about, contact',
              },
              {
                label: 'Webflow Build',
                body: 'Full implementation including CMS and Shopify API integration',
              },
              {
                label: 'Client Handoff',
                body: 'CMS structured so the client adds products and artists without touching the design',
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col gap-2.5 px-6 py-5 flex-1${i > 0 ? ' border-t border-[rgba(43,92,230,0.13)] lg:border-t-0 lg:border-l lg:border-l-[rgba(43,92,230,0.13)]' : ''}`}
              >
                <p
                  className="text-[10px] font-medium uppercase tracking-[0.12em]"
                  style={{ color: 'rgba(43,92,230,0.6)' }}
                >
                  {item.label}
                </p>
                <p
                  className="text-[14px] font-light leading-[1.75]"
                  style={{ color: '#2b5ce6' }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </AnimateInView>

      {/* ── The Design ────────────────────────────────────────────────── */}
      <FullHeader
        eyebrow="The Design"
        light="Minimal and editorial<br/>"
        bold="across every page."
        sub="The visual direction was built around the work itself, art and photography that needed space and restraint, not a loud brand competing with it."
      />

      {/* ── Homepage + Shop screenshots ───────────────────────────────── */}
      <AnimateInView>
        <section className="px-5 md:px-[120px] pb-[30px] md:pb-[60px]">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 min-w-0 flex flex-col gap-[10px]">
              <div className="flex gap-[10px]">
                <Tag label="Homepage" />
                <Tag label="desktop" />
              </div>
              <Image
                src="/images/saint-loba-desktop.png"
                alt="Saint Loba homepage"
                width={1764}
                height={7404}
                className="w-full h-auto"
              />
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-[10px]">
              <div className="flex gap-[10px]">
                <Tag label="shop page" />
                <Tag label="desktop" />
              </div>
              <Image
                src="/images/saint-loba-shop.jpg"
                alt="Saint Loba shop page"
                width={865}
                height={4096}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </AnimateInView>

      {/* ── Artist + Product screenshots ──────────────────────────────── */}
      <AnimateInView>
        <section className="px-5 md:px-[120px] pb-[30px] md:pb-[60px]">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 min-w-0 flex flex-col gap-[10px]">
              <div className="flex gap-[10px]">
                <Tag label="artist page" />
                <Tag label="desktop" />
              </div>
              <Image
                src="/images/saint-loba-artist.jpg"
                alt="Saint Loba artist page"
                width={1000}
                height={4096}
                className="w-full h-auto"
              />
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-[10px]">
              <div className="flex gap-[10px]">
                <Tag label="product page" />
                <Tag label="desktop" />
              </div>
              <Image
                src="/images/saint-loba-product.jpg"
                alt="Saint Loba product page"
                width={2172}
                height={4096}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </AnimateInView>

      {/* ── About + Artists page screenshots ──────────────────────────── */}
      <AnimateInView>
        <section className="px-5 md:px-[120px] pb-[30px] md:pb-[60px]">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 min-w-0 flex flex-col gap-[10px]">
              <div className="flex gap-[10px]">
                <Tag label="about page" />
                <Tag label="desktop" />
              </div>
              <Image
                src="/images/saint-loba-about.jpg"
                alt="Saint Loba about page"
                width={1601}
                height={4096}
                className="w-full h-auto"
              />
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-[10px]">
              <div className="flex gap-[10px]">
                <Tag label="artists page" />
                <Tag label="desktop" />
              </div>
              <Image
                src="/images/saint-loba-artists-page.jpg"
                alt="Saint Loba artists page"
                width={1869}
                height={4096}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </AnimateInView>

      {/* ── Key Decisions header ──────────────────────────────────────── */}
      <FullHeader
        eyebrow="Key Decisions"
        light="Simplifying without<br/>losing the "
        bold="vision."
      />

      {/* ── Key decision cards row 1 ──────────────────────────────────── */}
      <AnimateInView>
        <section className="px-5 md:px-[120px] pb-[30px] md:pb-[60px] grid md:grid-cols-2 gap-6">
          <InsightCard
            title="I pushed to launch without the hero video and the fourth artist."
            body={`The client wanted to wait for a homepage video and a fourth artist before going live. Both were months away with no confirmed delivery date. Waiting would have meant an indefinite delay. I designed a cursor-tracking hero using the Saint Loba heading as the interactive element, and an "Announced soon" placeholder for the fourth artist slot. The site launched on time. Both placeholders held the vision without exposing the gap.`}
          />
          <InsightCard
            title="I made scope decisions the client couldn't make themselves."
            body="Client-side delays on content, micro-detail revisions, and requests for additional complexity threatened to push the project indefinitely. I prioritised getting a strong V1 live over adding complexity, and advocated for shipping and iterating over waiting and perfecting. The actual build took two weeks. Getting to launch took longer because I was managing content dependencies, not design ones."
          />
        </section>
      </AnimateInView>

      {/* ── Key decision cards row 2 ──────────────────────────────────── */}
      <AnimateInView>
        <section className="px-5 md:px-[120px] pb-[30px] md:pb-[60px] grid md:grid-cols-2 gap-6">
          <InsightCard
            title="I simplified the navigation to two states"
            body="The client wanted multiple different navigation bars. I pushed back and designed two — light and dark. Better for the user, and easier for the client to maintain in Webflow without risking inconsistency."
          />
          <InsightCard
            title="I designed per breakpoint, not per image"
            body="The client struggled to understand responsive design. Rather than fighting it, I designed specific image crops and layouts per breakpoint, some images visible on desktop and hidden on mobile, and vice versa."
          />
        </section>
      </AnimateInView>

      {/* ── Key decision cards row 3 ──────────────────────────────────── */}
      <AnimateInView>
        <section className="px-5 md:px-[120px] pb-[30px] md:pb-[60px] grid md:grid-cols-2 gap-6">
          <InsightCard
            title="I standardised all product images before CMS upload"
            body="The prints come in variable sizes and orientations. Uploading as-is would have broken the shop grid. I defined a content guideline: all product images on a portrait white background, making the grid consistent regardless of artwork dimensions."
          />
          <InsightCard
            title="I built for independence, not dependency"
            body="I architected the CMS so the client can add new products and artists without touching the design or involving a developer. Connected Shopify via API. The goal was a handoff where the client never needed to come back for routine updates."
          />
        </section>
      </AnimateInView>

      {/* ── Interactions header ───────────────────────────────────────── */}
      <FullHeader
        eyebrow="The Interactions"
        light="Every interaction<br/>has a "
        bold="reason."
        sub="The interactions below weren't added for polish. Each one serves a specific purpose: reducing friction, communicating context, or making the platform feel considered without competing with the work it exists to showcase."
      />

      {/* ── Interactions table ────────────────────────────────────────── */}
      <AnimateInView>
        <section className="px-5 md:px-[120px] pb-[30px] md:pb-[60px]">
          <div
            className="flex flex-col xl:flex-row overflow-hidden rounded-[10px]"
            style={{ border: '0.5px solid rgba(43,92,230,0.13)' }}
          >
            {[
              {
                label: 'Cursor-tracking hero',
                body: 'SAINT LOBA heading moves toward the cursor',
              },
              {
                label: 'Artist card hover',
                body: 'Photography first, bio text revealed on hover',
              },
              {
                label: 'Dark / light navbar',
                body: 'Switches per page context automatically',
              },
              {
                label: 'Product accordion',
                body: 'Progressive disclosure on product detail page',
              },
              {
                label: 'Scroll to top',
                body: 'Persistent on long pages, shop, artist profiles',
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col gap-2.5 px-6 py-5 flex-1${i > 0 ? ' border-t border-[rgba(43,92,230,0.13)] xl:border-t-0 xl:border-l xl:border-l-[rgba(43,92,230,0.13)]' : ''}`}
              >
                <p
                  className="text-[10px] font-medium uppercase tracking-[0.12em]"
                  style={{ color: 'rgba(43,92,230,0.6)' }}
                >
                  {item.label}
                </p>
                <p
                  className="text-[14px] font-light leading-[1.75]"
                  style={{ color: '#2b5ce6' }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </AnimateInView>

      {/* ── The Delivery ──────────────────────────────────────────────── */}
      <AnimateInView>
        <section
          className="flex flex-col min-[1440px]:flex-row gap-8 min-[1440px]:gap-6 items-start px-5 md:px-[120px] py-[30px] md:py-[60px]"
          style={{ borderTop: '0.5px solid rgba(43,92,230,0.13)' }}
        >
          <SectionHeader
            eyebrow="The Delivery"
            light="The brief was<br/>"
            bold="delivered in full."
          />
          <div className="flex flex-col pt-0 min-[1440px]:pt-9 w-full min-[1440px]:w-[588px] space-y-4">
            <p className={bodyClass} style={bodyStyle}>
              The site is live at <a href="https://saintloba.com/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">saintloba.com</a>. The client adds products, artists, and content
              independently without touching the design or involving a developer. The CMS
              architecture and Shopify API integration have held across updates since handoff.
              The grid stays perfect.
            </p>
          </div>
        </section>
      </AnimateInView>

      {/* ── Responsive Design header ──────────────────────────────────── */}
      <FullHeader
        eyebrow="Responsive Design"
        light="Across desktop,<br/>tablet and "
        bold="mobile."
      />

      {/* ── David Mesa responsive screenshots ────────────────────────── */}
      <AnimateInView>
        <section className="px-5 md:px-[120px] pb-[30px] md:pb-[60px]">
          <div className="flex flex-col xl:grid xl:grid-cols-[588fr_281fr_180fr] gap-6 xl:gap-[76px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex gap-[10px]">
                <Tag label="artist page" />
                <Tag label="desktop" />
              </div>
              <Image
                src="/images/saint-loba-david-desktop.jpg"
                alt="Saint Loba David Mesa — desktop"
                width={1030}
                height={4096}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex gap-[10px]">
                <Tag label="artist page" />
                <Tag label="tablet" />
              </div>
              <Image
                src="/images/saint-loba-david-tablet.jpg"
                alt="Saint Loba David Mesa — tablet"
                width={683}
                height={4096}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex gap-[10px]">
                <Tag label="artist page" />
                <Tag label="mobile" />
              </div>
              <Image
                src="/images/saint-loba-david-mobile.jpg"
                alt="Saint Loba David Mesa — mobile"
                width={254}
                height={4096}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </AnimateInView>

      {/* ── Reflection ────────────────────────────────────────────────── */}
      <AnimateInView>
        <section
          className="flex flex-col min-[1440px]:flex-row gap-8 min-[1440px]:gap-6 items-start px-5 md:px-[120px] py-[30px] md:py-[60px]"
          style={{ borderTop: '0.5px solid rgba(43,92,230,0.13)' }}
        >
          <SectionHeader
            eyebrow="Reflection"
            light="What this project taught me about<br/>"
            bold="client work."
          />
          <div className="flex flex-col pt-0 min-[1440px]:pt-9 w-full min-[1440px]:w-[588px] space-y-4">
            <p className={bodyClass} style={bodyStyle}>
              The biggest challenge wasn&apos;t the design. It was the process. The client had no
              content ready when we started, which meant designing with placeholders and adapting
              when real content arrived in different formats and ratios.
            </p>
            <p className={bodyClass} style={bodyStyle}>
              The client&apos;s focus on micro-details delayed the launch significantly. I shipped a
              considered set of V1 interactions and deliberately scoped more complex animations to a
              second iteration, prioritising getting the site live over adding complexity.
            </p>
            <p className={bodyClass} style={bodyStyle}>
              In retrospect I&apos;d advocate more firmly for an iterative launch approach from the
              start, and define content deadlines as project dependencies rather than treating them
              as the client&apos;s problem to solve. The placeholder solutions worked, but they were
              reactive. A content-first kickoff would have made them unnecessary.
            </p>
          </div>
        </section>
      </AnimateInView>
    </CaseStudyLayout>
  )
}
