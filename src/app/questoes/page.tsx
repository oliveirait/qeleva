'use client';

import React from "react";
import { 
  Inputs, InputSelect, InputsProps, InputSelectProps, 
  getAnos,
  optionsAno, optionsArea, optionsDificuldade, optionsMateria, optionsNivel
} from '../cadastro/page'
import axios from "axios";
import Link from "next/link";

export const optionsQuantidade: string[] = []

export const getQuantidade = () => {
  if (optionsQuantidade.length < 1) {
    for (let i=1; i<=3; i++) {
      optionsQuantidade.push((i*10).toString())
    }
  }
}



export default function Questoes () {
  const [quantidade, setQuantidade] = React.useState('')
  const [area, setArea] = React.useState('')
  const [materia, setMateria] = React.useState('')
  const [difficulty, setDifficulty] = React.useState('')
  const [ano, setAno] = React.useState('')
  const [nivel, setNivel] = React.useState('')
  const [passData, setPassData] = React.useState([])

  const questionQuery = async (e: any) => {
    e.preventDefault()

    const emptyInData = [quantidade, area, materia, difficulty, ano, nivel].includes('')

    if (emptyInData) {
      return alert('Preencha todos os campos!')
    }

    const data = {
      quantidade, area, materia, difficulty, ano, nivel
    }

    await axios.post("http://localhost:3333/simulator", data)
      .then((response) => {
        alert(JSON.stringify(response.data.retorno))
        setPassData(response.data.retorno)

      })
      .catch((err) => {
        alert(JSON.stringify(err))
      })



   
  }

  React.useLayoutEffect(() => {
    getQuantidade()
    getAnos()
  }, [])

  return(
    <div className="items-center justify-center flex flex-col gap-4">
      <h1 className="p-8 font-bold text-2xl">Criar simulado</h1>

      <div className="w-[350px] md:w-[768px] xl:w-[1200px] m-2 grid md:grid-cols-3 bg-zinc-200 self-center rounded-xl p-8">
        <InputSelect title="Área" value={area} setValue={setArea} arrValues={optionsArea}/>

        <InputSelect title="Matéria" value={materia} setValue={setMateria} arrValues={optionsMateria}/>

        <InputSelect title="Dificuldade" value={difficulty} setValue={setDifficulty} arrValues={optionsDificuldade}/>

        <InputSelect title="Ano" value={ano} setValue={setAno} arrValues={optionsAno}/>

        <InputSelect title="Nivel" value={nivel} setValue={setNivel} arrValues={optionsNivel}/>

        <InputSelect title='Quantidade' value={quantidade} setValue={setQuantidade} arrValues={optionsQuantidade} />

      </div>
      
        <div className="w-[350px] md:w-[768px] xl:w-[1200px] self-center">
          <Link href={{
            pathname: '/simulado',
            query: {
              dado: passData
            }
          }} 
            className="bg-green-950 rounded-md p-4">
            Criar simulado
          </Link>
          <button 
            onClick={questionQuery}
            className="bg-green-950 rounded-md p-4">
            <p className="text-white font-bold text-xl" >Criar simulado</p>
          </button>

          {
            passData.map((value: any, key) => 
              <p key={key}>{value.id}</p>
            )
          }
        </div>
    </div>
  )
}