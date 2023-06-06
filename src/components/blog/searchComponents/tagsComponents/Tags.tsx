/* eslint-disable prettier/prettier */
type tagsProps = {
  title: string
  isActive: boolean
  onClick: () => void
}

export function Tags({ title, isActive, onClick }: tagsProps) {
  return (
    <button onClick={onClick}
      className={`rounded-[4px] shadow-md ${isActive ? 'bg-sky-800 text-white' : 'bg-slate-50'
        } flex items-center justify-center py-1 px-2`}
    >
      {title}
    </button>
  )
}
