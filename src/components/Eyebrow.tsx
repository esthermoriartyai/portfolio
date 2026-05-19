interface EyebrowProps {
  label: string
  className?: string
}

export default function Eyebrow({ label, className = '' }: EyebrowProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className="h-px w-5 shrink-0"
        style={{ backgroundColor: 'rgba(43,92,230,0.3)' }}
        aria-hidden="true"
      />
      <span
        className="text-[10px] font-medium uppercase tracking-[0.12em]"
        style={{ color: 'rgba(43,92,230,0.6)' }}
      >
        {label}
      </span>
    </div>
  )
}
