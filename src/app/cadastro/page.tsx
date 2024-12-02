'use client';

import React from "react";
import axios from 'axios'
import { ipServer } from "@/config/server";
import { Components } from "@/components";
import { Options } from "@/utils/options";
import { layoutNames } from "@/utils/options";


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

    //alert(JSON.stringify(data))
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


  return (

    <div className=" flex flex-col items-center justify-center m-4 ">
      
      <h1 className="text-white font-bold text-2xl my-4">
        {layoutNames.pages.cadastro.title}
      </h1>
    
      <form className=" h-full w-[350px] md:w-[768px] xl:w-[1200px] xl:m-8  bg-zinc-300 rounded-lg my-4 shadow-md shadow-black">



        <div className="p-2 space-y-2 rounded-md mt-4 m-2" >
          <h2 className="font-bold">Título da Prova</h2>
          <textarea 
            placeholder={`Ex: TRIBUNAL DE JUSTIÇA DO ESTADO DE MATO GROSSO DO SUL`}
            onChange={(e) => setNomeProva(e.target.value)}
            value={nomeprova}
            title="Cabecalho"
            className="w-full pt-2 px-2 rounded-md h-10 shadow-black shadow-sm "
          />
        </div>

        <div className="xl:md:grid xl:grid-cols-2">
          <Components.InputSelect title={layoutNames.pages.cadastro.form.banca} value={banca} setValue={setBanca} arrValues={Options.banca}/>
          <Components.Inputs title={layoutNames.pages.cadastro.form.cargo} place="Ex: ANALISTA JUDICIÁRIO"value={cargo} setValue={setCargo} />
          <Components.InputSelect title={layoutNames.pages.cadastro.form.ano} value={ano} setValue={setAno} arrValues={Options.ano}/>
          <Components.InputSelect title={layoutNames.pages.cadastro.form.escolaridade} value={nivel} setValue={setNivel} arrValues={Options.nivel}/>
        </div>
      

   
        <div className="p-2 space-y-2 rounded-md mt-4 m-2" >
          <h2 className="font-bold">Enunciado da questão</h2>
          <textarea 
            placeholder="Insira o enunciado da questão"
            onChange={(e) => setEnun(e.target.value)}
            value={enun}
            title="Enunciado"
            className="w-full pt-2 px-2 rounded-md h-10 shadow-black shadow-sm focus:h-32 duration-300 focus:border-blue-500"
          />
        </div>

        <div className="p-2 space-y-2 rounded-md mt-4 m-2" >
          <main className="font-bold">Alternativas</main>
          <textarea 
            placeholder={`(A) ...\n(B) ...\n(C) ...\n(D) ...\n(E) ...`}
            onChange={(e) => setQuestions(e.target.value)}
            value={questions}
            title="Questões"
            className="w-full pt-2 px-2 rounded-md h-10 shadow-black shadow-sm focus:h-32 duration-300 focus:border-blue-500"
          />
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



        <Components.InputSelect title={layoutNames.pages.cadastro.form.area}  value={area} setValue={setArea} arrValues={Options.area}/>

        <Components.InputSelect title={layoutNames.pages.cadastro.form.materia}  value={materia} setValue={setMateria} arrValues={Options.materia}/>

        <Components.InputSelect title={layoutNames.pages.cadastro.form.alternativacorreta} value={resp} setValue={setResp} arrValues={optionsQuestions}/>


      </div>


      </form>

      <button 
        type="submit"
        onClick={addQuestionsV2}
        className="h-16 w-[350px] bg-green-700 hover:bg-green-500 duration-200 rounded-lg  md:w-[768px] xl:w-[1200px] shadow-md shadow-black rounded-md p-4"
      >
        <p className="font-bold text-white ">{layoutNames.pages.cadastro.button}</p>
      </button>

      <div>

    </div>

  </div>
  )
}
