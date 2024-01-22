'use client'

import React, { useEffect, useState } from 'react'
import { getStateRepresentantes } from '../../../sanity/sanity-utils'
import Link from 'next/link'

export function OptionsComponent() {
  const [states, setStates] = useState<string[] | null>(null)
  const [slug, setSlug] = useState('')

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSlug(e.target.value) // Atualiza a variável com o valor selecionado
    console.log(slug)
  }

  useEffect(() => {
    getStateRepresentantes().then((resultStates) => {
      const flattenAndRemoveDuplicates = (arr: any[]) => {
        const flatArray = arr.flat(Infinity) // Aplana o array
        const uniqueValues = Array.from(new Set(flatArray)) // Remove valores duplicados
        return uniqueValues
      }

      const uniqueStates = flattenAndRemoveDuplicates(resultStates)
      setStates(uniqueStates as string[])

      setSlug(uniqueStates[0] as string)
    })
  }, [])
  return (
    <div className="flex flex-col gap-[10px]">
      <span className="font-roboto text-sm font-normal text-gray-700">
        Selecionar
      </span>
      <select
        name="states"
        id="state"
        onChange={handleSelectChange}
        className="px-4 py-4 appearance-none lg:w-[400px] bg-white border border-gray-300 hover:border-gray-500 rounded-md pr-8 focus:outline-none focus:ring focus:border-blue-300"
      >
        {states &&
          states.map((state, index) => {
            if (Array.isArray(state)) {
              return state.map((subState, index) => {
                return (
                  <option key={index} value={subState as string}>
                    {subState as string}
                  </option>
                )
              })
            } else {
              return (
                <option key={index} value={state as string}>
                  {state as string}
                </option>
              )
            }
          })}
      </select>

      <Link href={`/representantes/${slug}`}>
        <button className="py-4 bg-[#1F2A68] mt-2 shadow-md font-roboto rounded-[4px] lg:w-[320px] text-white font-medium text-base text-center w-full">
          Buscar representante
        </button>
      </Link>
    </div>
  )
}
