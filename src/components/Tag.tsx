interface TagProps {
  label: string
}

export default function Tag({ label }: TagProps) {
  return (
    <span
      className="flex w-fit items-center justify-center px-[10px] py-[3px] rounded-full text-[10px] font-normal uppercase tracking-[0.06em] border"
      style={{
        borderColor: 'rgba(43,92,230,0.13)',
        color: 'rgba(43,92,230,0.6)',
      }}
    >
      {label}
    </span>
  )
}
