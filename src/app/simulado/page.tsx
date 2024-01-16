'use client'

import { QuestionReturnProps } from "@/@types/questionReturn";
import { AppContext } from "@/context/AppContext";
import React, { useContext } from "react";



export default function Simulado () { 
  const { data, setData } = useContext(AppContext)
  
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-100">
      <div className="h-full w-[350px] md:w-[768px] xl:w-[1200px] rounded-xl bg-blue-700">
      
        {
          data.retorno?.map((value: QuestionReturnProps, key) => 
          <div key={key} className="space-8 m-4 rounded-md shadow-md shadow-black flex flex-col items-start justify-center w-auto bg-white p-4 ">
            <h1 className="font-bold text-xl m-4">{value.enun}</h1>
            <div className="flex flex-col gap-2 items-center justify-center p-2">
                <div className="flex flex-row w-auto gap-4 space-x-2 items-center justify-center p-4 border border-zinc-700 rounded-md">
                    <input type="radio" id="alternativa 1"  value={value.a1} className="w-6 h-6"/>
                    <label htmlFor="alternativa 1">{value.a1}</label>
                </div>
                <div className="flex flex-row w-auto gap-4 space-x-2 items-center justify-center p-4 border border-zinc-700 rounded-md">
                  <input type="radio" id="alternativa 2"  value={value.a2} className="w-6 h-6"/>
                  <label htmlFor="alternativa 2" >{value.a2}</label>
                </div>
                <div className="flex flex-row w-auto gap-4 space-x-2 items-center justify-center p-4 border border-zinc-700 rounded-md">
                  <input type="radio" id="alternativa 3" value={value.a3} className="w-6 h-6"/>
                  <label htmlFor="alternativa 3" >{value.a3}</label>
                </div>
            </div>
          </div>
          )
        }
      
     
      
        
      </div>
    </div>
  )
}