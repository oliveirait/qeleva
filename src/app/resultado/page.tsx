'use client'

import { AppContext } from "@/context/AppContext"
import { ResultContext } from "@/context/ResultContext"
import { useContext } from "react"


export default function Resultado () {
  const { result } = useContext(ResultContext)

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div>
        <div className="items-center justify-center h-[500px] w-[600px] bg-zinc-200 flex m-4 rounded-md shadow-md shadow-black p-4">
          <h1>Resultado</h1>
          <div>
            <p>{JSON.stringify(result)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}