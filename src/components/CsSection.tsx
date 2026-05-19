import Eyebrow from '@/components/Eyebrow'
import AnimateInView from '@/components/AnimateInView'

interface CsSectionProps {
  eyebrow: string
  headingLight: string
  headingBold?: string
  body?: React.ReactNode
  right?: React.ReactNode
  fullWidth?: boolean
  noBorderTop?: boolean
}

export default function CsSection({
  eyebrow,
  headingLight,
  headingBold,
  body,
  right,
  fullWidth = false,
  noBorderTop = false,
}: CsSectionProps) {
  return (
    <AnimateInView>
      <section
        className={`flex flex-col ${fullWidth ? '' : 'md:flex-row'} gap-8 md:gap-6 items-start px-5 md:px-[120px] py-[30px] md:py-[60px]`}
        style={noBorderTop ? {} : { borderTop: '0.5px solid rgba(43,92,230,0.13)' }}
      >
        {/* Left / heading column */}
        <div className={`flex flex-col items-start shrink-0 ${fullWidth ? 'w-full md:w-[792px]' : 'w-full md:w-[588px]'}`}>
          <Eyebrow label={eyebrow} className="pb-4 md:pb-6" />
          <h2 className="flex flex-col">
            <span
              className="text-[24px] md:text-[56px] font-light leading-[1.1] tracking-[-0.03em]"
              style={{ color: '#2b5ce6' }}
              dangerouslySetInnerHTML={{ __html: headingLight }}
            />
            {headingBold && (
              <span
                className="text-[24px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.03em]"
                style={{ color: '#2b5ce6' }}
              >
                {headingBold}
              </span>
            )}
          </h2>
          {fullWidth && body && (
            <div className="pt-6 w-full">{body}</div>
          )}
        </div>

        {/* Right column (body) — only when not fullWidth */}
        {!fullWidth && (body || right) && (
          <div className="flex flex-col pt-0 md:pt-9 w-full md:w-[588px] shrink-0">
            {body}
            {right}
          </div>
        )}
      </section>
    </AnimateInView>
  )
}
