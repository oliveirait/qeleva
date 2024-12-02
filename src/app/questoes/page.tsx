'use client';


import React, { useContext } from "react";
import { InputSelect } from "@/components/inputs/_input_selected";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { AppContext } from "@/context/AppContext";
import { ResultContext } from "@/context/ResultContext";
import { ipServer } from "@/config/server";
import { Options } from "@/utils/options";
import { getAnos } from "../cadastro/page";



export const optionsQuantidade: string[] = []

export const getQuantidade = () => {
  if (optionsQuantidade.length < 1) {
    for (let i=1; i<=2; i++) {
      optionsQuantidade.push((i*10).toString())
    }
  }
}


export default function Questoes () {
  const { setData } = useContext(AppContext)
  const { emptyResult } = React.useContext(ResultContext)
  const router = useRouter()
  const [quantidade, setQuantidade] = React.useState('')
  const [area, setArea] = React.useState('')
  const [materia, setMateria] = React.useState('')
  const [ano, setAno] = React.useState('')
  const [nivel, setNivel] = React.useState('')
  const [banca, setBanca] = React.useState('')
  
  const emptyInData = [quantidade, area, materia, ano, nivel, banca].includes('')

  const questionQuery = async (e: any) => {
    e.preventDefault()

    if (emptyInData) {
      return alert('Preencha todos os campos!')
    }

    const dados = {
      quantidade, area, materia, ano, nivel, banca
    }

    await axios.post(`http://localhost:3333/randomSimulator`, dados)
      .then((response) => {
        if (response.data.retorno?.length > 0) {
          setData(response.data)
          emptyResult()
          return router.push('/simulado')
        }
        return alert('Nao encontramos nenhuma questao com os dados informados')
      })
      .catch((err) => {
        return alert(JSON.stringify(err))
      })
  }

  React.useLayoutEffect(() => {
    getQuantidade()
    getAnos()
  }, [])


  return(
    <div className="items-center justify-start flex flex-col gap-4 h-screen">
      <h1 className="text-white p-8 font-bold text-2xl">Crie seu simulado</h1>

      <div className="w-[350px] md:w-[768px] xl:w-[1200px] m-2 grid md:grid-cols-3 bg-gray-200 self-center rounded-xl p-8">

        <InputSelect title='Banca' value={banca} setValue={setBanca} arrValues={Options.banca} />
        <InputSelect title="Área" value={area} setValue={setArea} arrValues={Options.area}/>
        <InputSelect title="Matéria" value={materia} setValue={setMateria} arrValues={Options.materia}/>
        <InputSelect title="Ano" value={ano} setValue={setAno} arrValues={Options.ano}/>
        <InputSelect title="Nivel" value={nivel} setValue={setNivel} arrValues={Options.nivel}/>
        <InputSelect title='Quantidade de questões' value={quantidade} setValue={setQuantidade} arrValues={optionsQuantidade} />
      </div>
      
      <div className={`w-[350px] md:w-[768px] xl:w-[1200px] self-center`}>
        <button disabled={emptyInData}
          onClick={questionQuery}
          className={`rounded-md p-4 duration-200 ${emptyInData ? `bg-gray-700 ` : `bg-green-700 hover:bg-green-500`}  `}>
          <p className="text-white font-bold " >Gerar simulado</p>
        </button>
      </div>
    </div>
  )
}