export function SkeletonCards() {
  return (
    <>
      <div className="md:grid md:grid-cols-3 md:gap-4 w-full">
        {Array.from({ length: 3 }, (_, index) => index + 1).map((id, index) => {
          return (
            <div
              key={id}
              className={`md:h-96  shadow-md bg-slate-200 animate-pulse`}
            ></div>
          )
        })}
      </div>
    </>
  )
}
