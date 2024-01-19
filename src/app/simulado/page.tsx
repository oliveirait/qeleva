'use client'


import { AppContext } from "@/context/AppContext";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { ResultContext } from "@/context/ResultContext";
import Link from "next/link";


export default function Simulado () { 
  const router = useRouter()
  const { data } = useContext(AppContext)
  const { setResult } = useContext(ResultContext)
  const [selectedValue, setSelectedValue] = React.useState('')

  const [pos, setPos] = React.useState(0)
  const endPosition = (data?.retorno.length) - 1


  function clickChange (e: any) {
    setSelectedValue(e.target.value)
  }

  function nextQuestion () {
    if (pos < endPosition) {
      setResult((prev) => [...prev, { choice: selectedValue, resp: data.retorno[pos]["resp"]}])
      setSelectedValue('')
      setPos((prevPosition) => prevPosition + 1)
    }
  }

  function finalize () {
    if (pos === endPosition) {
      setResult((prev) => [...prev, { choice: selectedValue, resp: data.retorno[pos]["resp"]}])
      router.push('/resultado')
    }
  }




  return (

    
    <div className="flex flex-col items-center justify-center bg-zinc-100">
      <div className=" w-[350px] md:h-[500px] md:w-[768px] xl:w-[1000px] rounded-xl ">
      
          { data.retorno?.length > 0 ?
          <div className="space-8 m-4 rounded-md shadow-md shadow-black flex flex-col items-start justify-center w-auto bg-white p-2 ">
            <p className="font-bold text-md mt-4 mx-4">{data?.retorno[pos]?.["nomeprova"] ? data.retorno[pos]["nomeprova"] : 'Questão'} - {data?.retorno[pos]["ano"]}</p>
            <p className="text-zinc-700 text-[12px] mx-4 mb-2">{data?.retorno[pos]?.["cargo"]}</p>
            <h1 className=" text-md mb-4 mx-4 mt-2">{data?.retorno[pos]["enun"]}</h1>
            
            <div className="flex flex-col gap-2 items-center justify-center p-2 w-full text-sm">
              

              <div className={`${selectedValue === data?.retorno[pos]["a1"] && 'bg-zinc-700 text-white'} border border-black flex flex-row w-full gap-2 space-x-2 items-center justify-start  rounded-md`}>
                <input 
                    type="radio"  
                    value={data?.retorno[pos]["a1"]}
                    id={data?.retorno[pos]["a1"]}
                    checked={selectedValue === data?.retorno[pos]["a1"]} 
                    onChange={clickChange} 
                    className={`${selectedValue === data?.retorno[pos]["a1"] ? 'accent-blue-500' : 'accent-black' } m-4`}
                  /> 
                <label htmlFor={data?.retorno[pos]["a1"]} className="w-full cursor-pointer p-4">{data?.retorno[pos]["a1"]}</label>
              </div>

              <div className={`${selectedValue === data?.retorno[pos]["a2"] && 'bg-zinc-700 text-white'} border border-black flex flex-row w-full gap-2 space-x-2 items-center justify-start  rounded-md`}>

                <input 
                    type="radio"  
                    value={data?.retorno[pos]["a2"]}
                    id={data?.retorno[pos]["a2"]}
                    checked={selectedValue === data?.retorno[pos]["a2"]} 
                    onChange={clickChange} 
                    className={`${selectedValue === data?.retorno[pos]["a2"] ? 'accent-blue-500' : 'accent-black' } m-4`}
                  /> 
                <label htmlFor={data?.retorno[pos]["a2"]} className=" w-full cursor-pointer p-4">{data?.retorno[pos]["a2"]}</label>
              </div>

              <div className={`${selectedValue === data?.retorno[pos]["a3"] && 'bg-zinc-700 text-white'} border border-black flex flex-row w-full gap-2 space-x-2 items-center justify-start  rounded-md`}>
                <input 
                    type="radio"  
                    value={data?.retorno[pos]["a3"]}
                    id={data?.retorno[pos]["a3"]}
                    checked={selectedValue === data?.retorno[pos]["a3"]} 
                    onChange={clickChange} 
                    className={`${selectedValue === data?.retorno[pos]["a3"] ? 'accent-blue-500' : 'accent-black' } m-4`}
                  /> 
                <label htmlFor={data?.retorno[pos]["a3"]} className=" w-full cursor-pointer p-4">{data?.retorno[pos]["a3"]}</label>
              </div>

              <div className={`${selectedValue === data?.retorno[pos]["a4"] && 'bg-zinc-700 text-white'} border border-black flex flex-row w-full gap-2 space-x-2 items-center justify-start  rounded-md`}>
                <input 
                    type="radio"  
                    value={data?.retorno[pos]["a4"]}
                    id={data?.retorno[pos]["a4"]}
                    checked={selectedValue === data?.retorno[pos]["a4"]} 
                    onChange={clickChange} 
                    className={`${selectedValue === data?.retorno[pos]["a4"] ? 'accent-blue-500' : 'accent-black' } m-4`}
                  /> 
                <label htmlFor={data?.retorno[pos]["a4"]} className=" w-full cursor-pointer p-4">{data?.retorno[pos]["a4"]}</label>
              </div>

              <div className={`${selectedValue === data?.retorno[pos]["a5"] && 'bg-zinc-700 text-white'} border border-black flex flex-row w-full gap-2 space-x-2 items-center justify-start  rounded-md`}>
                <input 
                    type="radio"  
                    value={data?.retorno[pos]["a5"]}
                    id={data?.retorno[pos]["a5"]}
                    checked={selectedValue === data?.retorno[pos]["a5"]} 
                    onChange={clickChange} 
                    className={`${selectedValue === data?.retorno[pos]["a5"] ? 'accent-blue-500' : 'accent-black' } m-4`}
                  /> 
                <label htmlFor={data?.retorno[pos]["a5"]} className=" w-full cursor-pointer p-4">{data?.retorno[pos]["a5"]}</label>
              </div>

              {/*<div className="w-full h-14  items-start justify-center my-2 ">
                <p className="font-bold text-sm text-zinc-500 self-start">Opção selecionada: {selectedValue}</p>
              </div>*/}

              {
                endPosition === pos && selectedValue ?
                <div className="w-full items-center justify-between flex flex-row m-2 pl-2">
                  <h1 className="text-xl font-bold">{pos + 1} / {endPosition + 1}</h1>
                  <button onClick={finalize} disabled={!selectedValue} type="submit" className={` ${!selectedValue ? 'bg-zinc-300 text-black' : 'bg-black hover:bg-zinc-800 duration-200' } p-4  items-center justify-center rounded-md `}>
                    <p className="text-white text-sm">Finalizar avaliação</p>
                  </button>
              </div>
                :
                  <div className="w-full items-center justify-between flex flex-row m-2 pl-2">
                    <h1 className="text-xl font-bold">{pos + 1} / {endPosition + 1}</h1>
                    <button onClick={nextQuestion} disabled={!selectedValue} type="submit" className={` ${!selectedValue ? 'bg-zinc-300 text-black' : 'bg-black hover:bg-zinc-800 duration-200' } p-4  items-center justify-center rounded-md `}>
                      <p className="text-white text-sm">Próxima questão</p>
                    </button>
                  </div>

              }

            </div>
          </div>

          :
          <div className="h-full w-full rounded-md my-8">
            <div className="items-center justify-center flex">
              <h1 className="">TENTE NOVAMENTE</h1>
            </div>
            
            <Link href={'/questoes'}>Voltar</Link>
          </div>
        }



      </div>
    </div>
  )
}