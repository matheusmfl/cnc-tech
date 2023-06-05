type tagsProps = {
  title: string
}

export function Tags({ title }: tagsProps) {
  return (
    <button className="rounded-[4px] shadow-md bg-slate-50 flex items-center justify-center py-1 px-2">
      {title}
    </button>
  )
}
