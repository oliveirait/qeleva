'use client';


import React, { useContext } from "react";
import { InputSelect, getAnos, optionsAno, optionsArea, optionsMateria, optionsNivel } from '../cadastro/page'
import axios from "axios";
import { useRouter } from 'next/navigation';
import { AppContext } from "@/context/AppContext";
import { ResultContext } from "@/context/ResultContext";
import { ipServer } from "@/config/server";




export const optionsQuantidade: string[] = []

export const getQuantidade = () => {
  if (optionsQuantidade.length < 1) {
    for (let i=1; i<=3; i++) {
      optionsQuantidade.push((i*10).toString())
    }
  }
}


export default function Questoes () {
  const { data, setData } = useContext(AppContext)
  const router = useRouter()
  const [quantidade, setQuantidade] = React.useState('')
  const [area, setArea] = React.useState('')
  const [materia, setMateria] = React.useState('')
  const [ano, setAno] = React.useState('')
  const [nivel, setNivel] = React.useState('')
  const { emptyResult } = React.useContext(ResultContext)


  const questionQuery = async (e: any) => {
    e.preventDefault()

    const emptyInData = [quantidade, area, materia, ano, nivel].includes('')

    if (emptyInData) {
      return alert('Preencha todos os campos!')
    }

    const dados = {
      quantidade, area, materia, ano, nivel
    }

    await axios.post(`http://${ipServer}:3333/randomSimulator`, dados)
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
    <div className="items-center justify-center flex flex-col gap-4">
      <h1 className="p-8 font-bold text-2xl">Crie seu simulado</h1>

      <div className="w-[350px] h-full md:w-[768px] xl:w-[1200px] m-2 grid md:grid-cols-3 bg-zinc-200 self-center rounded-xl p-8">
        <InputSelect title="Área" value={area} setValue={setArea} arrValues={optionsArea}/>
        <InputSelect title="Matéria" value={materia} setValue={setMateria} arrValues={optionsMateria}/>
        <InputSelect title="Ano" value={ano} setValue={setAno} arrValues={optionsAno}/>
        <InputSelect title="Nivel" value={nivel} setValue={setNivel} arrValues={optionsNivel}/>
        <InputSelect title='Quantidade' value={quantidade} setValue={setQuantidade} arrValues={optionsQuantidade} />
      </div>
      
      <div className="w-[350px] md:w-[768px] xl:w-[1200px] self-center">
        <button 
          onClick={questionQuery}
          className="bg-green-950 rounded-md p-4 hover:bg-green-600 duration-200">
          <p className="text-white font-bold " >Gerar simulado</p>
        </button>
      </div>
    </div>
  )
}