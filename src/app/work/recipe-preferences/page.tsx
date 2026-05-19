import type { Metadata } from 'next'
import Image from 'next/image'
import CaseStudyLayout from '@/components/CaseStudyLayout'
import Eyebrow from '@/components/Eyebrow'
import Tag from '@/components/Tag'
import AnimateInView from '@/components/AnimateInView'

export const metadata: Metadata = {
  title: 'Recipe Preferences — Esther Moriarty',
  description:
    '+10% CVR uplift. Two brands. Six markets. A/B test I identified, built the case for, and led end to end.',
}

const tags = ['initiative owner', 'solo designer', 'a/B Test', 'ios + web']
const stats = [
  { value: '+10%', label: 'cvr uplift' },
  { value: '6', label: 'markets' },
  { value: '2', label: 'brands' },
]

/* ─── Reusable body text style ─────────────────────────────────────────── */
const bodyClass = 'text-[17px] font-light leading-[1.8]'
const bodyStyle = { color: 'rgba(43,92,230,0.75)' }

/* ─── Highlight span helper ─────────────────────────────────────────────── */
function Hi({ children }: { children: React.ReactNode }) {
  return (
    <strong className="font-semibold" style={{ color: '#2b5ce6' }}>
      {children}
    </strong>
  )
}

/* ─── Insight card ──────────────────────────────────────────────────────── */
function InsightCard({
  title,
  body,
}: {
  title: string
  body: string
}) {
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

/* ─── Section header helper ─────────────────────────────────────────────── */
function SectionHeader({
  eyebrow,
  light,
  bold,
  inline,
}: {
  eyebrow: string
  light: string
  bold?: string
  inline?: boolean
}) {
  return (
    <div className="flex flex-col items-start w-full min-[1440px]:shrink-0 min-[1440px]:w-[588px]">
      <Eyebrow label={eyebrow} className="pb-4 md:pb-6" />
      <h2 className={inline ? undefined : 'flex flex-col'}>
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

/* ─── Two-col prose section ─────────────────────────────────────────────── */
function TwoCol({
  eyebrow,
  light,
  bold,
  inline,
  children,
}: {
  eyebrow: string
  light: string
  bold?: string
  inline?: boolean
  children: React.ReactNode
}) {
  return (
    <AnimateInView>
      <section
        className="flex flex-col min-[1440px]:flex-row gap-8 min-[1440px]:gap-6 items-start px-5 md:px-[120px] py-[30px] md:py-[60px]"
        style={{ borderTop: '0.5px solid rgba(43,92,230,0.13)' }}
      >
        <SectionHeader eyebrow={eyebrow} light={light} bold={bold} inline={inline} />
        <div className="flex flex-col pt-0 min-[1440px]:pt-9 w-full min-[1440px]:w-[588px] space-y-4">
          {children}
        </div>
      </section>
    </AnimateInView>
  )
}

/* ─── Full-width heading section ─────────────────────────────────────────── */
function FullHeader({
  eyebrow,
  light,
  bold,
  sub,
  headingWidth = 'md:max-w-[792px]',
  bodyWidth,
  inline,
}: {
  eyebrow: string
  light: string
  bold?: string
  sub?: React.ReactNode
  headingWidth?: string
  bodyWidth?: string
  inline?: boolean
}) {
  return (
    <AnimateInView>
      <section
        className="px-5 md:px-[120px] pb-[30px] pt-[30px] md:pb-[60px] md:pt-[62px]"
        style={{ borderTop: '0.5px solid rgba(43,92,230,0.13)' }}
      >
        <div className={`w-full ${headingWidth}`}>
          <Eyebrow label={eyebrow} className="pb-4 md:pb-6" />
          <h2 className={inline ? undefined : 'flex flex-col'}>
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
          {sub && (
            <p
              className={`mt-6 text-[16px] font-light leading-[1.8] ${bodyWidth ?? ''}`}
              style={{ color: 'rgba(43,92,230,0.6)' }}
            >
              {sub}
            </p>
          )}
        </div>
      </section>
    </AnimateInView>
  )
}

/* ─── Single-column stacked section ──────────────────────────────────────── */
function StackedSection({
  eyebrow,
  light,
  bold,
  children,
  containerWidth = 'md:max-w-[588px]',
}: {
  eyebrow: string
  light: string
  bold?: string
  children?: React.ReactNode
  containerWidth?: string
}) {
  return (
    <AnimateInView>
      <section
        className="px-5 md:px-[120px] py-[30px] md:py-[60px]"
        style={{ borderTop: '0.5px solid rgba(43,92,230,0.13)' }}
      >
        <div className={`flex flex-col w-full ${containerWidth}`}>
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
          {children && (
            <div className="mt-6 space-y-4">
              {children}
            </div>
          )}
        </div>
      </section>
    </AnimateInView>
  )
}

export default function RecipePreferencesPage() {
  return (
    <CaseStudyLayout>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <AnimateInView>
        <section className="flex flex-col min-[1440px]:flex-row items-start justify-between gap-6 md:gap-10 px-5 md:px-[120px] py-[30px] md:py-[60px]">
          {/* Left: text content */}
          <div className="flex flex-col gap-6 md:gap-10 flex-1">
            <div className="flex flex-col gap-6">
              <Eyebrow label="Marley spoon + dinnerly" />
              <h1
                className="flex items-center gap-3 flex-wrap text-[48px] min-[1440px]:text-[72px] tracking-[-0.04em] leading-none"
                style={{ color: '#2b5ce6' }}
              >
                <span className="font-light">Recipe</span>
                <span className="font-bold leading-[1.3]">Preferences</span>
              </h1>
            </div>

            <p
              className="text-[16px] md:text-[21px] font-medium leading-[1.6] tracking-[-0.02em]"
              style={{ color: '#2b5ce6' }}
            >
              I identified the problem, built the case for prioritisation, and led the initiative end
              to end across two separate teams. The experiment ran for six weeks at 95% confidence. It
              won, delivering a +10% uplift in checkout conversion rate across two brands and six
              markets, while simultaneously reducing skip rate and churn on the retention side.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>

            {/* Stats */}
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
              src="/images/recipe-pref-iphone.png"
              alt="Recipe Preferences — iOS design mockup"
              width={6208}
              height={7029}
              className="w-full h-auto"
              sizes="(max-width: 1439px) calc(100vw - 40px), 440px"
              priority
            />
          </div>
        </section>
      </AnimateInView>

      {/* ── My role ───────────────────────────────────────────────────── */}
      <TwoCol eyebrow="my role" light="I started this.<br/>I led it end to end." bold="Across two teams.">
        <p className={bodyClass} style={bodyStyle}>
          <Hi>This initiative was my idea.</Hi> I identified the problem through data, built the
          prioritisation case, and presented it to the Head of Product to get it on the roadmap.
          From there I owned the project from discovery through delivery as the{' '}
          <Hi>sole designer across two separate teams</Hi> and both brands.
        </p>
        <p className={bodyClass} style={bodyStyle}>
          The feature served two goals with two different stakeholders. The Growth team needed it to
          move conversion. The Retention team needed it to reduce skip rate and churn. I was the
          link between them, aligning both on a single solution, a shared design system, and one
          ship.
        </p>
        <p className={bodyClass} style={bodyStyle}>
          For a significant portion of the project I was also operating without a Growth team Product
          Manager, partnering directly with the Engineering Manager to define scope, drive decisions,
          and keep the initiative moving.
        </p>
      </TwoCol>

      {/* ── What I did ────────────────────────────────────────────────────── */}
      <AnimateInView>
        <div className="px-5 md:px-[120px] pb-[30px] md:pb-[60px] overflow-x-auto">
          <div
            className="flex items-stretch rounded-[10px] overflow-hidden min-w-max"
            style={{ border: '0.5px solid rgba(43,92,230,0.13)' }}
          >
            {[
              { label: 'discovery', body: 'Problem definition, GA drop-off analysis, Hotjar VoC, competitor research' },
              { label: 'strategy', body: 'Hypothesis writing, test brief, scope definition, stakeholder alignment' },
              { label: 'design', body: 'Web funnel, account area, iOS app for Marley Spoon and Dinnerly' },
              { label: 'systems', body: 'New components added to design system post-ship, selection pattern standardised' },
            ].map((col, i) => (
              <div
                key={col.label}
                className="flex flex-col gap-[10px] px-6 py-5 w-[300px] shrink-0"
                style={i > 0 ? { borderLeft: '0.5px solid rgba(43,92,230,0.13)' } : undefined}
              >
                <p
                  className="text-[10px] font-medium uppercase tracking-[0.12em] whitespace-nowrap"
                  style={{ color: 'rgba(43,92,230,0.6)' }}
                >
                  {col.label}
                </p>
                <p className="text-[14px] font-light leading-[1.75]" style={{ color: '#2b5ce6' }}>
                  {col.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimateInView>

      {/* ── The problem ───────────────────────────────────────────────── */}
      <TwoCol eyebrow="the problem" light="The drop-off was loud.<br/>The reason " bold="was clear." inline>
        <p className={bodyClass} style={bodyStyle}>
          The /select-plan page was the first step in a four-step funnel: Plan, Account, Delivery,
          Checkout. It had a <Hi>54% abandonment rate</Hi>. Users who left at this step mostly
          didn&apos;t come back.
        </p>
        <p className={bodyClass} style={bodyStyle}>
          I pulled the <Hi>funnel data from Google Analytics</Hi> to identify where the biggest
          drop-off was happening. To understand why, <Hi>I set up a Hotjar VoC study</Hi> myself: I
          wrote the questions, ran the study, and analysed 500+ responses in Excel. I wrote up the
          findings in a data report and used it to build the prioritisation case.
        </p>
        <p className={bodyClass} style={bodyStyle}>
          The signal was consistent: <Hi>70% of Hotjar responses were menu-related.</Hi> Users
          couldn&apos;t evaluate whether Marley Spoon would fit their diet, taste, or lifestyle
          before committing to a plan. They were being asked to subscribe before they had any
          confidence the product was for them.
        </p>
        <p className={bodyClass} style={bodyStyle}>
          <Hi>I also conducted a competitor audit</Hi>. Leading meal kit brands were already
          surfacing personalised meal plan selection from the very first funnel step. The gap was
          clear. <Hi>I took the report to the Head of Product</Hi> and made the case.
        </p>
      </TwoCol>

      {/* ── Hypotheses ────────────────────────────────────────────────── */}
      <FullHeader
        eyebrow="Hypotheses"
        light="Two teams. Two hypotheses."
        bold="One solution."
        sub="As the feature touched both acquisition and retention, I wrote separate hypotheses for each team. Defining both hypotheses upfront meant that a single design solution had to work for two different contexts: the acquisition funnel and the account area. It also had to satisfy two different sets of success metrics. That shaped every decision that followed."
      />

      {/* Hypothesis cards */}
      <AnimateInView>
        <section className="px-5 md:px-[120px] pb-[30px] md:pb-[60px] grid md:grid-cols-2 gap-6">
          <InsightCard
            title="Growth Hypothesis"
            body="If we allow new customers to select their recipe preferences early in the funnel, then we expect an increase in conversion rate, because customers are more likely to subscribe when they can see their dietary needs are met before they commit."
          />
          <InsightCard
            title="Retention Hypothesis"
            body="If existing customers can select their recipe preferences in their account area, then they will be less likely to skip a delivery or churn, because they will be more satisfied with their auto-generated order when it reflects their actual taste and dietary preferences."
          />
        </section>
      </AnimateInView>

      {/* ── Design exploration ────────────────────────────────────────── */}
      <FullHeader
        eyebrow="design exploration"
        light="The direction "
        bold="I rejected."
        inline
        sub="Before committing to the card-based approach, I explored a photo-led direction, showing images of the meal categories rather than icons. I moved away from it because photos would have been unsustainable at scale. Category sets differ across brands and markets, and a photo-dependent component would have created a significant maintenance burden across twelve markets and two design systems. Icons gave us the flexibility to adapt and grow without rebuilding."
      />

      {/* Design exploration images */}
      <AnimateInView>
        <div className="flex flex-col min-[1400px]:flex-row items-start justify-between gap-8 min-[1400px]:gap-0 px-5 md:px-[120px] min-[1400px]:px-[240px] pb-[30px] md:pb-[60px]">
          <Image
            src="/images/recipe-preferences-explore-mobile.png"
            alt="Photo-led exploration — mobile"
            width={145}
            height={565}
            className="h-auto min-[1400px]:w-[145px] min-[1400px]:h-[565px]"
          />
          <Image
            src="/images/recipe-preferences-explore-desktop.png"
            alt="Photo-led exploration — desktop"
            width={757}
            height={501}
            className="w-full min-[1400px]:w-[757px] min-[1400px]:h-[501px] h-auto"
          />
        </div>
      </AnimateInView>

      {/* ── A/B Test ──────────────────────────────────────────────────── */}
      <FullHeader
        eyebrow="The A/B Test"
        light="Control vs "
        bold="Variant"
        inline
        sub="The variant added dietary preference cards above the plan configuration, reducing post-funnel friction while adding a personalisation signal upfront."
      />

      {/* A/B Test control vs variant */}
      <AnimateInView>
        <section className="flex flex-col xl:flex-row xl:justify-between gap-6 xl:gap-0 px-5 md:px-[120px] xl:px-[240px] pb-[30px] md:pb-[60px]">
          <div className="flex flex-col gap-4 w-full xl:w-[375px]">
            <Tag label="control" />
            <p className="text-[13px] font-light leading-[1.7]" style={{ color: 'rgba(43,92,230,0.6)' }}>
              No preference selection. Plan configuration only.
            </p>
            <Image
              src="/images/recipe-preferences-ab-control.png"
              alt="A/B test control — no preference selection"
              width={375}
              height={1990}
              className="w-full h-auto rounded-[4px]"
            />
          </div>
          <div className="flex flex-col gap-4 w-full xl:w-[375px]">
            <Tag label="variant" />
            <p className="text-[13px] font-light leading-[1.7]" style={{ color: 'rgba(43,92,230,0.6)' }}>
              Dietary preference cards added.
            </p>
            <Image
              src="/images/recipe-preferences-ab-variant.png"
              alt="A/B test variant — dietary preference cards added"
              width={375}
              height={2375}
              className="w-full h-auto rounded-[4px]"
            />
          </div>
        </section>
      </AnimateInView>

      {/* ── Dinnerly ──────────────────────────────────────────────────── */}
      <AnimateInView>
        <section
          className="px-5 md:px-[120px] pt-[30px] md:pt-[62px] pb-[30px] md:pb-[60px]"
          style={{ borderTop: '0.5px solid rgba(43,92,230,0.13)' }}
        >
          <div className="flex flex-col w-full md:max-w-[792px]">
            <Eyebrow label="dinnerly" className="pb-4 md:pb-6" />
            <h2>
              <span
                className="text-[24px] md:text-[56px] font-light leading-[1.1] tracking-[-0.03em]"
                style={{ color: '#2b5ce6' }}
              >
                Same logic,{' '}
              </span>
              <span
                className="text-[24px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.03em]"
                style={{ color: '#2b5ce6' }}
              >
                different brand.
              </span>
            </h2>
            <div className="mt-6 w-full md:max-w-[792px]">
              <p className={bodyClass} style={bodyStyle}>
                Dinnerly is a more budget and family-focused brand. I adapted the category set and
                applied Dinnerly&apos;s visual language throughout. Both brands shared the same
                underlying selection logic.
              </p>
            </div>
          </div>
        </section>
      </AnimateInView>

      {/* Dinnerly control vs variant */}
      <AnimateInView>
        <section className="flex flex-col xl:flex-row xl:justify-between gap-6 xl:gap-0 px-5 md:px-[120px] xl:px-[240px] pb-[30px] md:pb-[60px]">
          <div className="flex flex-col gap-4 w-full xl:w-[375px]">
            <Tag label="control" />
            <p className="text-[13px] font-light leading-[1.7]" style={{ color: 'rgba(43,92,230,0.6)' }}>
              Dinnerly control. No preferences.
            </p>
            <Image
              src="/images/recipe-preferences-dn-screen-v2.png"
              alt="Dinnerly recipe preferences control"
              width={1500}
              height={6552}
              className="w-full h-auto rounded-[4px]"
            />
          </div>
          <div className="flex flex-col gap-4 w-full xl:w-[375px]">
            <Tag label="variant" />
            <p className="text-[13px] font-light leading-[1.7]" style={{ color: 'rgba(43,92,230,0.6)' }}>
              Dinnerly variant. Brand-adapted preference cards.
            </p>
            <Image
              src="/images/recipe-preferences-dn-variant-v2.png"
              alt="Dinnerly recipe preferences variant"
              width={1500}
              height={8424}
              className="w-full h-auto rounded-[4px]"
            />
          </div>
        </section>
      </AnimateInView>

      {/* ── Desktop Funnel ────────────────────────────────────────────── */}
      <StackedSection eyebrow="Desktop Funnel" light="Responsive across" bold="all breakpoints." containerWidth="md:w-full">
        <p className={bodyClass} style={{ ...bodyStyle, maxWidth: '792px' }}>
          At desktop width, preference cards sit in a two-column layout alongside the plan
          configuration, keeping the conversion action always visible without scrolling.
        </p>
      </StackedSection>

      {/* Desktop mockup */}
      <AnimateInView>
        <div className="px-5 md:px-[120px] pb-[30px] md:pb-[60px]">
          <Image
            src="/images/recipe-pref-laptop-mockup.png"
            alt="Recipe preferences desktop funnel — MacBook mockup"
            width={4788}
            height={3044}
            className="w-full h-auto"
          />
        </div>
      </AnimateInView>

      {/* ── Key design decisions ──────────────────────────────────────── */}
      <FullHeader
        eyebrow="Key Design Decisions"
        light="The interface resolves contradictions so users "
        bold="don't have to."
        headingWidth="md:max-w-[912px]"
        inline
        bodyWidth="md:max-w-[792px]"
        sub={
          <>
            <Hi>These decisions were mine.</Hi>{' '}
            Each one resolved a real constraint between the UI, the data model, and the engineering
            implementation.
          </>
        }
      />

      {/* Decision cards */}
      <AnimateInView>
        <section className="px-5 md:px-[120px] pb-[30px] md:pb-[60px] grid md:grid-cols-3 gap-6">
          <InsightCard
            title="I defined categories as a union, not an intersection"
            body="Selecting Vegetarian + Kid-Friendly returns recipes that match either, not both. An intersection model would have produced too few results. I made this call and aligned Engineering on the implementation."
          />
          <InsightCard
            title="I defined Everyday Variety as a reset state"
            body="Everyday Variety means 'no preference, show me everything.' Selecting it deselects all others; selecting any other category deselects it. A precise UI behaviour that matched the underlying data model exactly."
          />
          <InsightCard
            title="I defined that Vegetarian disables protein selection"
            body="In the account area, selecting Vegetarian or Vegan automatically disables protein preferences, because allowing both would create contradictory selections. The interface removes that burden from the user."
          />
        </section>
      </AnimateInView>

      {/* ── iOS App ───────────────────────────────────────────────────── */}
      <StackedSection eyebrow="iOS App" light="Cross-platform." bold="Both brands." containerWidth="md:max-w-[792px]">
        <p className={bodyClass} style={bodyStyle}>
          I designed the iOS account area for both brands, applying the same selection logic while
          adapting to native mobile patterns and each brand&apos;s visual identity.
        </p>
      </StackedSection>

      {/* iOS screens */}
      <AnimateInView>
        <section className="flex flex-col xl:flex-row xl:justify-between gap-6 xl:gap-0 px-5 md:px-[120px] xl:px-[240px] pb-[30px] md:pb-[60px]">
          <div className="w-full xl:w-[375px]">
            <Image
              src="/images/Frame 4074.png"
              alt="Recipe preferences iOS — Marley Spoon"
              width={375}
              height={994}
              className="w-full h-auto rounded-[4px]"
            />
          </div>
          <div className="w-full xl:w-[375px]">
            <Image
              src="/images/Frame 4075.png"
              alt="Recipe preferences iOS — Dinnerly"
              width={375}
              height={1043}
              className="w-full h-auto rounded-[4px]"
            />
          </div>
        </section>
      </AnimateInView>

      {/* ── Design system ─────────────────────────────────────────────── */}
      <TwoCol eyebrow="Design System" light="Shipping was step one.<br/>Formalising was " bold="step two." inline>
        <p className={bodyClass} style={bodyStyle}>
          After Recipe Preferences shipped, I added the new components to the Marley Spoon design
          system, the preference card, ingredient preference pills, and selection states, so they
          could be used consistently by other teams across web and iOS.
        </p>
        <p className={bodyClass} style={bodyStyle}>
          I also updated existing selector components across the system to follow the same visual
          rules: green outline for selected state, pale green for hover. Rather than leaving the new
          pattern as a one-off, I propagated it system-wide.
        </p>
      </TwoCol>

      {/* ── Results ───────────────────────────────────────────────────── */}
      <FullHeader
        eyebrow="Results"
        light="The test won."
        bold="Both hypotheses were validated."
        headingWidth="md:max-w-[837px]"
      />

      {/* Results stats */}
      <AnimateInView>
        <section className="px-5 md:px-[120px] pb-[30px] md:pb-[60px] grid md:grid-cols-3 gap-6">
          <InsightCard
            title="+10%"
            body="Conversion rate uplift on completed checkout, across both brands and twelve markets. The test ran for six weeks at 95% statistical confidence."
          />
          <InsightCard
            title="-15%"
            body="Drop-off rate on the select-plan page."
          />
          <InsightCard
            title="Retention"
            body="Positive results on skip rate, churn rate, and feature engagement rate, validating the retention hypothesis alongside the growth result."
          />
        </section>
      </AnimateInView>

      {/* ── Reflection ────────────────────────────────────────────────── */}
      <TwoCol eyebrow="Reflection" light="What I'd do " bold="differently." inline>
        <p className={bodyClass} style={bodyStyle}>
          This project clarified something important about how I want to work: the most durable
          solutions are the ones that solve for multiple stakeholders at once, not just the loudest
          one in the room. Designing for both Growth and Retention with a single feature, and having
          both hypotheses validated, was the most complex coordination challenge I had owned to that
          point.
        </p>
        <p className={bodyClass} style={bodyStyle}>
          This project reinforced the value of validating with data before committing to a full
          build. Starting with a focused A/B test gave the team confidence and stakeholder alignment
          before scaling across all surfaces and markets.
        </p>
        <p className={bodyClass} style={bodyStyle}>
          Operating without a PM was challenging but clarifying. It pushed me to develop stronger
          instincts around prioritisation, stakeholder communication, and how to keep a complex
          initiative moving without a dedicated owner.
        </p>
      </TwoCol>
    </CaseStudyLayout>
  )
}
