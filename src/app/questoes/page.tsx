'use client';

import React from "react";
import { 
  Inputs, InputSelect, InputsProps, InputSelectProps, 
  optionsAno, optionsArea, optionsDificuldade, optionsMateria, optionsNivel, 
  getAnos
} from '../cadastro/page'


export default function Questoes () {
  const [quantidade, setQuantidade] = React.useState('')
  const [area, setArea] = React.useState('')
  const [materia, setMateria] = React.useState('')
  const [difficulty, setDifficulty] = React.useState('')
  const [ano, setAno] = React.useState('')
  const [nivel, setNivel] = React.useState('')

  React.useEffect(() => {
    getAnos()
  })

  return(
    <div>
      <h1>Listar questões</h1>
      
      <div className="w-72">
        <InputSelect title="Área" value={area} setValue={setArea} arrValues={optionsArea}/>

        <InputSelect title="Matéria" value={materia} setValue={setMateria} arrValues={optionsMateria}/>

        <InputSelect title="Dificuldade" value={difficulty} setValue={setDifficulty} arrValues={optionsDificuldade}/>

        <InputSelect title="Ano" value={ano} setValue={setAno} arrValues={optionsAno}/>

        <InputSelect title="Nivel" value={nivel} setValue={setNivel} arrValues={optionsNivel}/>

        <Inputs title='Quantidade' place='Quantidade' value={quantidade} setValue={setQuantidade} type='number'/>
        </div>
    </div>
  )
}