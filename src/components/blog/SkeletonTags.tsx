export function SkeletonTags() {
  return (
    <>
      {Array.from({ length: 8 }, (_, index) => index + 1).map((id, index) => {
        const width = index % 2 === 0 ? '10' : '6'

        return (
          <div
            key={id}
            className={`rounded-[4px] p-4 px-${width} shadow-md bg-slate-200 animate-pulse h-5`}
          ></div>
        )
      })}
    </>
  )
}
