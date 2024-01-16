import React from "react";


export default function Simulado ({ searchParams }: any) { 
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-100">
      <div className="h-full w-[350px] md:w-[768px] xl:w-[1200px] rounded-xl bg-blue-700">
        {
          searchParams.dado.map((value: any, key: any) => 
          <div key={key} className="space-8 m-4 rounded-md shadow-md shadow-black flex flex-col items-start justify-center w-auto bg-white p-4 ">
            <h1 className="font-bold text-xl m-4">{value.enun}</h1>
            <div className="flex flex-col gap-2 items-center justify-center p-2">
                <div className="flex flex-row w-auto gap-4 space-x-2 items-center justify-center p-4 border border-zinc-700 rounded-md">
                  <div >
                    <input 
                      type="radio" 
                      id="alternativa"
                      className="w-6 h-6"
                      value={value.a1}
                    />
                  </div>
                  <div>
                    <label htmlFor="alternativa" >
                      {value.a1}
                    </label>
                  </div>  
  
                </div>
            </div>
          </div>
          )
        }
      
        
      </div>
    </div>
  )
}