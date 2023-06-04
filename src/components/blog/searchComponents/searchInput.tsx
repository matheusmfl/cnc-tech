import { Search } from 'lucide-react'

export function SearchInput() {
  return (
    <div className="relative">
      <input
        placeholder="Buscar"
        className="pl-10 py-3 pr-3 border-2 rounded-md border-gray-200 outline-none w-full text-gray-700"
      ></input>
      <div className="absolute left-4 top-[14px] text-gray-700">
        <Search className="w-5 h-5" />
      </div>
    </div>
  )
}
