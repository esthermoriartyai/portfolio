import type { Metadata } from 'next'
import Image from 'next/image'
import CaseStudyLayout from '@/components/CaseStudyLayout'
import Eyebrow from '@/components/Eyebrow'
import Tag from '@/components/Tag'
import AnimateInView from '@/components/AnimateInView'

export const metadata: Metadata = {
  title: 'Delivery Pricing — Esther Moriarty',
  description:
    'A €7.5m capacity crisis. Solved through pricing design. Monday volume dropped from 43% to 25%.',
}

const tags = ['feature', 'pricing ux', 'ios + web']
const stats = [
  { value: '43→25%', label: 'peak day volume' },
  { value: '€7.5m', label: 'investment deferred' },
  { value: '6', label: 'markets' },
  { value: '2', label: 'brands' },
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
      <h2 className="flex flex-col">
        <span
          className="text-[24px] md:text-[56px] font-light leading-[1.1] tracking-[-0.03em]"
          style={{ color: '#2b5ce6' }}
          dangerouslySetInnerHTML={{ __html: light }}
        />
        {bold && (
          <span
            className="text-[24px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.03em]"
            style={{ color: '#2b5ce6' }}
          >
            {bold}
          </span>
        )}
      </h2>
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


export default function DeliveryPricingPage() {
  return (
    <CaseStudyLayout>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <AnimateInView>
        <section className="flex flex-col min-[1440px]:flex-row items-start justify-between gap-6 md:gap-10 px-5 md:px-[120px] py-[30px] md:py-[60px]">
          {/* Left: text content */}
          <div className="flex flex-col gap-6 md:gap-10 flex-1">
            <div className="flex flex-col gap-6">
              <Eyebrow label="Marley Spoon + Dinnerly" />
              <h1
                className="flex items-center gap-3 flex-wrap text-[48px] md:text-[96px] tracking-[-0.04em] leading-none"
                style={{ color: '#2b5ce6' }}
              >
                <span className="font-light">Delivery</span>
                <span className="font-bold leading-[1.3]">Pricing</span>
              </h1>
            </div>

            <p
              className="text-[16px] md:text-[21px] font-medium leading-[1.6] tracking-[-0.02em]"
              style={{ color: '#2b5ce6' }}
            >
              Marley Spoon needed to reshape customer behaviour without damaging customer trust. I was
              briefed on the business problem and the pricing structure. From there I owned the design
              end to end, with no PM, no interaction spec, and no copy brief. Six markets, two brands.
              One feature that resolved a €7.5m infrastructure crisis.
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
                    className="text-[36px] font-light leading-none tracking-[-0.04em]"
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
              src="/images/delivery-pricing-mockup.png"
              alt="Delivery Pricing — iOS delivery scheduling UI"
              width={1312}
              height={1485}
              className="w-full h-auto"
              sizes="(max-width: 1439px) calc(100vw - 40px), 440px"
              priority
            />
          </div>
        </section>
      </AnimateInView>

      {/* ── Business problem ──────────────────────────────────────────── */}
      <TwoCol
        eyebrow="The Business Problem"
        light="An operational crisis hiding inside a"
        bold="UX problem."
      >
        <p className={bodyClass} style={bodyStyle}>
          In Australia, <Hi>43% of all delivery volume was concentrated on Monday</Hi>, pushing
          production to its limits on weekends, when labour is least available and most expensive.
          The company was weeks away from breaching warehouse capacity.
        </p>
        <p className={bodyClass} style={bodyStyle}>
          Marley Spoon was actively considering opening a{' '}
          <Hi>second fulfilment centre at a cost of up to €7.5 million</Hi>. If a pricing mechanism
          could rebalance demand, they could serve 44,000 orders per week from existing
          infrastructure, deferring that investment entirely.
        </p>
        <p className={bodyClass} style={bodyStyle}>
          <Hi>The business solution was differentiated delivery pricing.</Hi> My design challenge was making
          that feel fair to customers. The PM briefed me on the business problem and the pricing
          structure, then left the project. I partnered directly with Engineering and aligned
          stakeholders across operations, finance, customer service, and C-level on every significant
          decision.
        </p>
        <p className={bodyClass} style={bodyStyle}>
          I conducted a competitor review, defined the interaction pattern, determined where and how
          pricing should appear in the funnel, identified the need for confirmation states, and wrote
          all six versions of the copy myself.
        </p>
      </TwoCol>

      {/* ── Business problem stats ────────────────────────────────────── */}
      <AnimateInView>
        <section className="flex flex-col md:flex-row gap-6 px-5 md:px-[120px] pb-[30px] md:pb-[60px]">
          {[
            { value: '43%', label: 'of AU delivery volume concentrated on Mondays' },
            { value: '2x', label: 'Peak production day vs daily average, an unsustainable imbalance' },
            { value: '€7.5m', label: 'Fulfilment centre investment under consideration to handle peak demand' },
          ].map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col gap-[10px] p-5 md:p-8 rounded-[10px] flex-1"
              style={{ backgroundColor: 'rgba(43,92,230,0.06)' }}
            >
              <p
                className="text-[36px] font-light leading-[1.33] tracking-[-0.04em]"
                style={{ color: '#2b5ce6' }}
              >
                {stat.value}
              </p>
              <p
                className="text-[13px] font-light leading-[1.65]"
                style={{ color: 'rgba(43,92,230,0.6)' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </section>
      </AnimateInView>

      {/* ── Discovery + Exploration ───────────────────────────────────── */}
      <TwoCol
        eyebrow="discovery + Exploration"
        light="The principle before the"
        bold="pattern."
      >
        <p className={bodyClass} style={bodyStyle}>
          Before opening Figma, I reviewed how other services handle variable pricing, covering meal
          kit competitors and delivery platforms. The consistent pattern across the best
          implementations was transparency at the point of selection:{' '}
          <Hi>pricing visible before commitment</Hi>, not revealed at checkout. That became the core
          design principle.
        </p>
        <p className={bodyClass} style={bodyStyle}>
          The existing delivery step had two dropdowns: one for day, one for time slot. No pricing
          was shown. Customers had no reason to choose one slot over another.
        </p>
        <p className={bodyClass} style={bodyStyle}>
          I explored three interaction patterns: keeping pricing inside the dropdown, a calendar-based
          view, and visible cards. The dropdown couldn&apos;t accommodate pricing clearly at mobile
          widths. The calendar added navigation complexity without benefit. Cards gave enough space to
          show the adjustment clearly, kept the selection scannable, and worked consistently across
          markets with different slot configurations.
        </p>
      </TwoCol>

      {/* ── The Design ────────────────────────────────────────────────── */}
      <AnimateInView>
        <section
          className="px-5 md:px-[120px] pt-[30px] md:pt-[62px] pb-[30px] md:pb-[60px]"
          style={{ borderTop: '0.5px solid rgba(43,92,230,0.13)' }}
        >
          <div className="w-full md:max-w-[792px]">
            <Eyebrow label="the design" className="pb-4 md:pb-6" />
            <h2 className="flex flex-col">
              <span
                className="text-[24px] md:text-[56px] font-light leading-[1.1] tracking-[-0.03em]"
                style={{ color: '#2b5ce6' }}
              >
                Pricing visible
              </span>
              <span
                className="text-[24px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.03em]"
                style={{ color: '#2b5ce6' }}
              >
                at the point of selection.
              </span>
            </h2>
            <div className="mt-6">
              <p className={bodyClass} style={bodyStyle}>
                The delivery details step previously showed two dropdowns, one for day and one for
                time slot, with no pricing shown at all. I kept the day selector as a dropdown but
                redesigned the time slot selector into visible cards, adding the surcharge or
                discount delta inline. Customers see +$1.99 or -$1.99 at the moment of selection.
                The mechanism works differently by market: in Australia, one time slot is available
                per day, so the pricing incentive is at the day level, Monday is surcharged, Friday
                discounted. In European markets with multiple time slots per day, pricing varies by
                window within a day. The surcharge or discount also appears as a line item in the
                checkout summary, ensuring the pricing is consistent and visible across both the
                selection step and the final confirmation.
              </p>
            </div>
          </div>
        </section>
      </AnimateInView>

      {/* ── Laptop mockup ─────────────────────────────────────────────── */}
      <AnimateInView>
        <section className="px-5 md:px-[120px] pb-[30px] md:pb-[60px]">
          {/* 1197×761 container matching Figma group dimensions */}
          <div className="relative w-full" style={{ aspectRatio: '1197/761' }}>
            {/* Screenshot: left=146px, top=103px, 903×576 inside 1197×761 */}
            <div
              className="absolute overflow-hidden"
              style={{
                left: `${(146 / 1197) * 100}%`,
                top: `${(103 / 761) * 100}%`,
                width: `${(903 / 1197) * 100}%`,
                height: `${(576 / 761) * 100}%`,
              }}
            >
              <Image
                src="/images/delivery-pricing-laptop-screen.png"
                alt="Delivery Pricing — delivery day selection with differentiated pricing"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* MacBook Pro frame overlay */}
            <Image
              src="/images/macbook-frame.png"
              alt=""
              fill
              className="object-contain pointer-events-none"
            />
          </div>
        </section>
      </AnimateInView>

      {/* ── Stakeholder Alignment ─────────────────────────────────────── */}
      <TwoCol
        eyebrow="stakeholder alignment"
        light="One feature."
        bold="Every team involved."
      >
        <p className={bodyClass} style={bodyStyle}>
          Shipping this required alignment across{' '}
          <Hi>more stakeholders than any other project I worked on</Hi>. Operations needed
          confidence the pricing mechanism would actually shift behaviour. Finance needed accuracy
          in how surcharges were represented. Customer service needed copy that would reduce inbound
          complaints. Engineering needed an interaction model that could flex across six markets with
          different pricing structures and slot configurations.{' '}
          <Hi>I coordinated all of it without a PM.</Hi>
        </p>
      </TwoCol>

      {/* ── Key Design Decisions — Heading ───────────────────────────── */}
      <AnimateInView>
        <section
          className="px-5 md:px-[120px] pt-[30px] md:pt-[62px] pb-[30px] md:pb-[60px]"
          style={{ borderTop: '0.5px solid rgba(43,92,230,0.13)' }}
        >
          <div className="w-full md:max-w-[805px]">
            <Eyebrow label="key design decisions" className="pb-4 md:pb-6" />
            <h2 className="flex flex-col">
              <span
                className="text-[24px] md:text-[56px] font-light leading-[1.1] tracking-[-0.03em]"
                style={{ color: '#2b5ce6' }}
              >
                Transparency over concealment.
              </span>
              <span
                className="text-[24px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.03em]"
                style={{ color: '#2b5ce6' }}
              >
                Choice over obligation.
              </span>
            </h2>
            <div className="mt-6">
              <p className={bodyClass} style={bodyStyle}>
                Each decision below resolved a real constraint between the business requirement, the
                customer experience, and the engineering implementation. The interaction pattern,
                where and how pricing appears in the funnel, the confirmation states, and all six
                versions of the copy.
              </p>
            </div>
          </div>
        </section>
      </AnimateInView>

      {/* ── Key Design Decisions — Cards ──────────────────────────────── */}
      <AnimateInView>
        <section className="px-5 md:px-[120px] pb-[30px] md:pb-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'I redesigned the time slot selector from dropdown to visible cards',
                body: 'The delivery details step previously had two dropdowns with no pricing shown. I redesigned the time slot selector into visible cards so any surcharge or discount is immediately visible when a day is selected. Pricing is present at the moment it\'s relevant.',
              },
              {
                title: 'I placed the pricing delta at the time slot level, not in the day dropdown',
                body: 'Showing pricing inside the day dropdown would have been too cramped, especially on mobile. The time slot card gives enough space to show the adjustment clearly. In AU with one slot per day this effectively communicates day-level pricing. In EU markets with multiple slots per day, customers can compare options within a single day.',
              },
              {
                title: 'Showed only the surcharge or discount delta, not the full shipping cost',
                body: 'The full shipping price is already shown on the plan selection step and at checkout. At step 3 I showed only what was new, the adjustment. This keeps the step focused without duplicating information the customer has already seen or will see again.',
              },
              {
                title: 'I identified the need for confirmation states',
                body: 'Selecting a time slot with variable pricing created a moment of uncertainty. The customer needed to know what they\'d just committed to. I identified this gap, designed the confirmation states into the flow, and wrote all six versions of the copy myself.',
              },
              {
                title: 'I designed six confirmation states across two pricing contexts',
                body: 'The message updates based on two variables: the slot selected and whether the customer has a free shipping voucher. Without a voucher: surcharge is neutral, standard is reassuring, discount is positive. With a voucher: all three open with "Congratulations!" but accurately communicate any surcharge or discount on top. Six states, each saying something true.',
              },
              {
                title: 'I defined the selected and hover states',
                body: 'Green outline for selected, pale green for hover. These were my decisions, reinforcing which slot is active and making the interaction feel responsive without adding visual noise.',
              },
            ].map((decision) => (
              <div
                key={decision.title}
                className="flex flex-col gap-[10px] p-5 md:p-8 rounded-[10px]"
                style={{ backgroundColor: 'rgba(43,92,230,0.06)' }}
              >
                <p
                  className="text-[14px] font-semibold leading-[1.75] tracking-[-0.01em]"
                  style={{ color: '#2b5ce6' }}
                >
                  {decision.title}
                </p>
                <p
                  className="text-[13px] font-light leading-[1.65]"
                  style={{ color: 'rgba(43,92,230,0.6)' }}
                >
                  {decision.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </AnimateInView>

      {/* ── Six Confirmation States — Heading ────────────────────────── */}
      <AnimateInView>
        <section
          className="px-5 md:px-[120px] pt-[30px] md:pt-[62px] pb-[30px] md:pb-[60px]"
          style={{ borderTop: '0.5px solid rgba(43,92,230,0.13)' }}
        >
          <div className="w-full md:max-w-[792px]">
            <Eyebrow label="Six Confirmation States" className="pb-4 md:pb-6" />
            <h2 className="flex flex-col">
              <span
                className="text-[24px] md:text-[56px] font-light leading-[1.1] tracking-[-0.03em]"
                style={{ color: '#2b5ce6' }}
              >
                Same step.
              </span>
              <span
                className="text-[24px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.03em]"
                style={{ color: '#2b5ce6' }}
              >
                Six different messages.
              </span>
            </h2>
            <div className="mt-6">
              <p className={bodyClass} style={bodyStyle}>
                The confirmation message updates automatically based on two variables: which time
                slot the customer selects, and whether they have a free shipping voucher. I
                identified the need for these states, designed them into the flow, and wrote all six
                versions of the copy. Each one is calibrated to make the customer feel informed
                rather than penalised.
              </p>
            </div>
          </div>
        </section>
      </AnimateInView>

      {/* ── Six Confirmation States — Images ──────────────────────────── */}
      <AnimateInView>
        <section className="px-5 md:px-[120px] pb-[30px] md:pb-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-[60px]">
            {[
              { label: 'default shipping', src: '/images/confirmation-default-shipping.png', w: 588, h: 126 },
              { label: 'free shipping', src: '/images/confirmation-free-shipping.png', w: 588, h: 120 },
              { label: 'default shipping + surcharge', src: '/images/confirmation-default-surcharge.png', w: 588, h: 130 },
              { label: 'default shipping + discount', src: '/images/confirmation-default-discount.png', w: 588, h: 123 },
              { label: 'free shipping + surcharge', src: '/images/confirmation-free-surcharge.png', w: 588, h: 151 },
              { label: 'free shipping + discount', src: '/images/confirmation-free-discount.png', w: 588, h: 124 },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-start gap-[10px]">
                <Tag label={item.label} />
                <Image
                  src={item.src}
                  alt={item.label}
                  width={item.w}
                  height={item.h}
                  className="w-full h-auto rounded-[4px]"
                />
              </div>
            ))}
          </div>
        </section>
      </AnimateInView>

      {/* ── Dinnerly — Heading ───────────────────────────────────────── */}
      <TwoCol
        eyebrow="Dinnerly"
        light="Different brand."
        bold="Cross-platform."
      >
        <p className={bodyClass} style={bodyStyle}>
          The same pricing logic surfaces in the iOS account area, where existing customers can
          reschedule their delivery, with consistent same-day selection and slot-level pricing
          visibility adapted for native mobile. In parallel, I designed the full feature for
          Dinnerly.
        </p>
        <p className={bodyClass} style={bodyStyle}>
          While Dinnerly targets a more budget and family-focused audience with a distinct visual
          identity, the underlying interaction logic and pricing model remain consistent.
        </p>
      </TwoCol>

      {/* ── Dinnerly — Phone mockups ──────────────────────────────────── */}
      <AnimateInView>
        <section className="px-5 md:px-[120px] pb-[30px] md:pb-[60px]">
          <div className="flex justify-center gap-[30px] xl:gap-[120px]">
            <Image
              src="/images/dinnerly-ms-phone.png"
              alt="Marley Spoon — iOS delivery scheduling with variable pricing"
              width={375}
              height={812}
              className="w-[47%] xl:w-[375px] h-auto"
            />
            <Image
              src="/images/dinnerly-dn-phone.png"
              alt="Dinnerly — iOS delivery scheduling with variable pricing"
              width={375}
              height={812}
              className="w-[47%] xl:w-[375px] h-auto"
            />
          </div>
        </section>
      </AnimateInView>

      {/* ── Design System ─────────────────────────────────────────────── */}
      <TwoCol
        eyebrow="design system"
        light="One pattern."
        bold="Applied system-wide."
      >
        <p className={bodyClass} style={bodyStyle}>
          After Delivery Pricing shipped, I added the redesigned time slot card component to the
          Marley Spoon design system for consistent cross-team use.
        </p>
        <p className={bodyClass} style={bodyStyle}>
          More significantly, I standardised the selection pattern system-wide. The green outline
          selected state and pale green hover state I defined were applied to all existing selector
          components. Any designer working on a selector anywhere in the product follows the same
          visual rules.
        </p>
      </TwoCol>

      {/* ── Results heading ───────────────────────────────────────────── */}
      <AnimateInView>
        <section
          className="px-5 md:px-[120px] pt-[30px] md:pt-[60px] pb-[30px] md:pb-[60px]"
          style={{ borderTop: '0.5px solid rgba(43,92,230,0.13)' }}
        >
          <div className="w-full md:max-w-[792px]">
            <Eyebrow label="results" className="pb-4 md:pb-6" />
            <h2 className="flex flex-col">
              <span
                className="text-[24px] md:text-[56px] font-light leading-[1.1] tracking-[-0.03em]"
                style={{ color: '#2b5ce6' }}
              >
                The feature worked.
              </span>
              <span
                className="text-[24px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.03em]"
                style={{ color: '#2b5ce6' }}
              >
                The investment was deferred.
              </span>
            </h2>
          </div>
        </section>
      </AnimateInView>

      {/* ── Results stats ─────────────────────────────────────────────── */}
      <AnimateInView>
        <section className="flex flex-col md:flex-row gap-6 px-5 md:px-[120px] pb-[30px] md:pb-[60px]">
          {[
            {
              value: '43→25%',
              label: 'Monday delivery volume reduced from 43% to 25%, a near halving of peak day concentration.',
            },
            {
              value: '€7.5m',
              label: 'Planned fulfilment centre investment deferred. The capacity pressure that had driven the business case was resolved.',
            },
            {
              value: '6 markets',
              label: 'AU, US, DE, NL, BE, and AT, each with different pricing structures and time slot configurations.',
            },
          ].map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col gap-[10px] p-5 md:p-8 rounded-[10px] flex-1"
              style={{ backgroundColor: 'rgba(43,92,230,0.06)' }}
            >
              <p
                className="text-[36px] font-light leading-none tracking-[-0.04em]"
                style={{ color: '#2b5ce6' }}
              >
                {stat.value}
              </p>
              <p
                className="text-[13px] font-light leading-[1.65]"
                style={{ color: 'rgba(43,92,230,0.6)' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </section>
      </AnimateInView>

      {/* ── Reflection ────────────────────────────────────────────────── */}
      <TwoCol
        eyebrow="reflection"
        light="Designing at the intersection of business<br/>and "
        bold="trust."
      >
        <p className={bodyClass} style={bodyStyle}>
          This was the most complex design problem I worked on at Marley Spoon, not because of UI
          complexity, but because of what was at stake. A pricing change in a subscription product
          touches customer trust directly. Get the framing wrong and you create churn. I was
          navigating that risk without a PM, which meant every call about tone, transparency, and
          interaction pattern was mine to own and defend.
        </p>
        <p className={bodyClass} style={bodyStyle}>
          The most important decision I made was the six-state confirmation copy. It would have been
          easy to write one neutral message everywhere. Instead I treated each pricing outcome as a
          different emotional moment, and that&apos;s why the feature launched without significant
          customer backlash.
        </p>
        <p className={bodyClass} style={bodyStyle}>
          If I were to do this again, I&apos;d push earlier for a formal test of the different copy
          framings, to validate that the celebratory &ldquo;Congratulations&rdquo; was actually
          driving behaviour shift rather than just feeling good in design review.
        </p>
      </TwoCol>

    </CaseStudyLayout>
  )
}
