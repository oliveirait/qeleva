'use client';

import React, { InputHTMLAttributes } from "react";
import axios from 'axios'


type RespProps = {
  status: number
  retorno: any[]
  erro: string
}

export interface InputsProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  place: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  value: string
}

export interface InputSelectProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  arrValues: string[]
  value: string
}

export const optionsNivel = ["Médio", "Superior"]
export const optionsMateria = ["Língua Portuguesa", "Matemática"]
export const optionsArea = ["Tecnologia da Informação"]
export const limitYear = 2000
export const optionsAno: string[] = []

export const getAnos = () => {
  let year = new Date().getFullYear()
  if (optionsAno.length < 1) {
    for (let i=year; i>=limitYear; i--) {
      optionsAno.push(i.toString())
    }
  }
}

export const Inputs = ({title, place, setValue, value}: InputsProps) => {
  return (
    <div className="p-2 space-y-2  rounded-md m-2 ">
      <main className="font-bold">{title}</main>
      <input 
        type="text"
        placeholder={place}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="w-full p-2 rounded-md  shadow-black shadow-sm"
      />
    </div>
  )
}

export const InputSelect = ({title, value, setValue, arrValues}: InputSelectProps) => {
  return (
    <div className="p-2 space-y-2  rounded-md m-2">
      <main className="font-bold">{title}</main>
      <select className="w-full p-2 rounded-md shadow-black shadow-sm" onChange={(e) => setValue(e.target.value)} value={value}>
        <option value="">Selecione uma opção...</option>  
        {
          arrValues.map((val, key) => 
            <option key={key} value={val}>{val}</option>  
          )
        }
      </select>
    </div>
  )
}

export default function Cadastro () {
  const [enun, setEnun] = React.useState('')
  const [a1, setA1] = React.useState('')
  const [a2, setA2] = React.useState('')
  const [a3, setA3] = React.useState('')
  const [a4, setA4] = React.useState('')
  const [a5, setA5] = React.useState('')
  const [resp, setResp] = React.useState('')
  const [area, setArea] = React.useState('')
  const [materia, setMateria] = React.useState('')
  const [ano, setAno] = React.useState('')
  const [nivel, setNivel] = React.useState('')
  const [cargo, setCargo] = React.useState('')
  const optionsQuestions = [a1, a2, a3, a4, a5]
 

  const addQuestions = async (e: any) => {
    e.preventDefault()

    let empty = [enun, a1, a2, a3, a4, a5, resp, area, materia, ano, nivel, cargo].includes('')

    const data = {
      enun,
      a1, a2, a3, a4, a5,
      resp,
      area,
      materia,

      ano,
      nivel,
      cargo
    }

    !empty ? 
      await axios.post("http://localhost:3333/questions", data)
        .then((response) => {
          let data: RespProps = response.data
          if (data.status === 0) {
            setEnun('')
            setA1('')
            setA2('')
            setA3('')
            setA4('')
            setA5('')
            setResp('')
            setArea('')
            setMateria('')
            setAno('')
            setNivel('')
            setCargo('')
            alert("Questão cadastrada com sucesso!")
          }
          
          else {
            alert(data.erro)
          }
        })
        .catch(() => 
          alert('Não foi possível concluir a operação, tente novamente')
        )

    : alert('Preencha os campos vazios')
 
  } 

  React.useEffect(() => {
    getAnos()
  }, [])

  return (

    <div className="flex flex-col items-center justify-center m-4 ">
      
      <h1 className="font-bold text-2xl my-4">Cadastrar uma nova questão</h1>
    
      <form className=" h-full w-[350px] md:w-[768px] xl:w-[1200px] xl:m-8  bg-zinc-300 rounded-lg my-4 shadow-md shadow-black">

        <div className="p-2 space-y-2 rounded-md mt-4 m-2" >
          <main className="font-bold">Enunciado da questão</main>
          <textarea 
            placeholder="Insira o enunciado da questão"
            onChange={(e) => setEnun(e.target.value)}
            value={enun}
            title="Enunciado"
            className="w-full p-2 rounded-md  shadow-black shadow-sm"
          />
        </div>
       
      <div className="xl:md:grid xl:grid-cols-2">

        <Inputs 
          title="Alternativa A" place="Insira a alternativa A"
          value={a1} setValue={setA1}
        />

        <Inputs 
          title="Alternativa B" place="Insira a alternativa B"
          value={a2} setValue={setA2}
        />

        <Inputs 
          title="Alternativa C" place="Insira a alternativa C"
          value={a3} setValue={setA3}
        />

        <Inputs 
          title="Alternativa D" place="Insira a alternativa D"
          value={a4} setValue={setA4}
        />

        <Inputs 
          title="Alternativa E" place="Insira a alternativa E"
          value={a5} setValue={setA5}
        />

        <InputSelect title="Selecione a alternativa correta" value={resp} setValue={setResp} arrValues={optionsQuestions}/>

        <InputSelect title="Área" value={area} setValue={setArea} arrValues={optionsArea}/>

        <InputSelect title="Matéria" value={materia} setValue={setMateria} arrValues={optionsMateria}/>

        <InputSelect title="Ano" value={ano} setValue={setAno} arrValues={optionsAno}/>

        <InputSelect title="Nivel" value={nivel} setValue={setNivel} arrValues={optionsNivel}/>

        <Inputs 
          title="Cargo" place="Analista Judiciario"
          value={cargo} setValue={setCargo}
        />

      </div>


      </form>
      <button 
        type="submit"
        onClick={addQuestions}
        className="h-12 w-[350px] bg-green-800 rounded-lg m-8 md:w-[768px] xl:w-[1200px] shadow-md shadow-black"
      >
        <p className="font-bold text-white ">Postar</p>
      </button>

      <div>

    </div>

  </div>
  )
}
