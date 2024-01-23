'use client';

import React from "react";
import axios from 'axios'
import { ipServer } from "@/config/server";
import { Components } from "@/components";
import { Options } from "@/utils/options";


type RespProps = {
  status: number
  retorno: any[]
  erro: string
}

export const limitYear: number = 2005

export const getAnos = () => {
  let year = new Date().getFullYear()
  if (Options.ano.length < 1) {
    for (let i=year; i>=limitYear; i--) {
      Options.ano.push(i.toString())
    }
  }
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
  const [nomeprova, setNomeProva] = React.useState('')

  const [banca, setBanca] = React.useState('')
  const optionsQuestions = [a1, a2, a3, a4, a5]

  const [head, setHead] = React.useState('')
  const [questions, setQuestions] = React.useState('')
  const [message, setMessage] = React.useState(false)
  const [message2, setMessage2] = React.useState(false)
 

 {/*  const addQuestions = async (e: any) => {
    e.preventDefault()

    let isEmpty = [enun, a1, a2, a3, a4, a5, resp, area, materia, ano, nivel, cargo, nomeprova].includes('')
    const data = {
      enun,
      a1, a2, a3, a4, a5,
      resp,
      area,
      materia,
      ano,
      nivel,
      cargo,
      nomeprova
    }

    // isEmpty = true => Contem campos vazios
    // isEmpty = false => Tudo certo, NAO Contem campos vazios
    !isEmpty ? 
      await axios.post(`http://${ipServer}:3333/questions`, data)
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
            setNomeProva('')
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

  */}

  const addQuestionsV2 = async (e: any) => {
    e.preventDefault()

    const data = {
      enun,
      a1,
      a2,
      a3,
      a4,
      a5,
      resp,
      area,
      materia,
      ano,
      nivel,
      cargo,
      nomeprova,
      banca
    }

    let isEmpty = [enun, a1, a2, a3, a4, a5, resp, area, materia, ano, nivel, cargo, nomeprova, banca].includes('')

    // isEmpty = true => Contem campos vazios
    // isEmpty = false => Tudo certo, NAO Contem campos vazios
    !isEmpty ? 
      await axios.post(`http://${ipServer}:3333/questionsV2`, data)
        .then((response) => {
          let data: RespProps = response.data
          if (data.status === 0) {
            setEnun('')
            setQuestions('')
            setResp('')
            //setArea('')
            //setMateria('')
            //setAno('')
            //setNivel('')
            //setCargo('')
            //setNomeProva('')
            setMessage(false)
            alert("Questão cadastrada com sucesso!")
          }
          
          else {
            alert(data.erro)
          }
        })
        .catch((e: any) => 
          alert(JSON.stringify(e))
        )

    : alert('Preencha os campos vazios') 
 
  }

  React.useEffect(() => {
    getAnos()
  }, [])

  React.useEffect(() => {
    if (questions.trim().length > 0) {
      const separated = questions.split('\n')

      if (separated.length === 5) {
        setMessage(true)
        setA1(separated[0])
        setA2(separated[1])
        setA3(separated[2])
        setA4(separated[3])
        setA5(separated[4])
      } else {
        setMessage(false)
      }
      
    }
  }, [questions])

  React.useEffect(() => {
    if (head.trim().length > 0) {
      const separated = head.split('\n')

      if (separated.length === 4) {
        setMessage2(true)
        setNomeProva(separated[0])
        setCargo(separated[1])
        setNivel(separated[2])
        setAno(separated[3])
      } else {
        setMessage2(false)
      }
      
    }
  }, [head])

  return (

    <div className="flex flex-col items-center justify-center m-4 ">
      
      <h1 className="font-bold text-2xl my-4">Cadastrar uma nova questão</h1>
    
      <form className=" h-full w-[350px] md:w-[768px] xl:w-[1200px] xl:m-8  bg-zinc-300 rounded-lg my-4 shadow-md shadow-black">

      
        <div className="p-2 space-y-2 rounded-md mt-4 m-2" >
          <main className="font-bold">Insira o cabecalho</main>
          <textarea 
            placeholder={`TRIBUNAL DE JUSTIÇA DO ESTADO DE MATO GROSSO DO SUL \nANALISTA JUDICIÁRIO - ÁREA FIM \nNível Médio \n2022`}
            onChange={(e) => setHead(e.target.value)}
            value={head}
            title="Cabecalho"
            className="w-full pt-2 px-2 rounded-md h-28 shadow-black shadow-sm"
            
          />
          { 
            !message2 
            ? <p className="pl-2 text-sm text-red-500 -pt-10">Favor, inserir o cabecalho em sequencia, um abaixo da outra</p>
            : <p className="pl-2 text-sm text-green-600 -pt-10">Alternativas OK. Cabecalho pronto. </p> 
          }
        </div>
   
        <div className="p-2 space-y-2 rounded-md mt-4 m-2" >
          <main className="font-bold">Enunciado da questão</main>
          <textarea 
            placeholder="Insira o enunciado da questão"
            onChange={(e) => setEnun(e.target.value)}
            value={enun}
            title="Enunciado"
            className="w-full p-2 rounded-md h-24 shadow-black shadow-sm"
          />
        </div>

        <div className="p-2 space-y-2 rounded-md mt-4 m-2" >
          <main className="font-bold">Insira as alternativas</main>
          <textarea 
            placeholder={`(A) ...\n(B) ...\n(C) ...\n(D) ...\n(E) ...`}
            onChange={(e) => setQuestions(e.target.value)}
            value={questions}
            title="Questões"
            className="w-full pt-2 px-2 rounded-md h-32 shadow-black shadow-sm"
          />
          { 
            !message 
            ? <p className="pl-2 text-sm text-red-500 -pt-10">Favor, inserir as alternativas em sequencia, uma abaixo da outra</p>
            : <p className="pl-2 text-sm text-green-600 -pt-10">Alternativas OK. Estão prontas para serem registradas. </p> 
          }
        </div>
       
      <div className="xl:md:grid xl:grid-cols-2">

      {/* 
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
      */}



        <Components.InputSelect title="Área" value={area} setValue={setArea} arrValues={Options.area}/>

        <Components.InputSelect title="Matéria" value={materia} setValue={setMateria} arrValues={Options.materia}/>

        <Components.InputSelect title="Alternativa correta" value={resp} setValue={setResp} arrValues={optionsQuestions}/>

        <Components.InputSelect title="Banca" value={banca} setValue={setBanca} arrValues={Options.banca}/>

      </div>


      </form>
      <button 
        type="submit"
        onClick={addQuestionsV2}
        className="h-12 w-[350px] bg-green-800 rounded-lg m-8 md:w-[768px] xl:w-[1200px] shadow-md shadow-black"
      >
        <p className="font-bold text-white ">Postar</p>
      </button>

      <div>

    </div>

  </div>
  )
}
