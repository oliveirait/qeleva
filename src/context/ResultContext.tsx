'use client'

import React, { ReactNode, createContext, useCallback, useState } from "react";


type QuestionsSelectProps = {
  choice: string
  resp: string
}


type StateProps = {
  result: QuestionsSelectProps
  setResult: React.Dispatch<React.SetStateAction<QuestionsSelectProps[]>>
  emptyResult: () => any
}

interface ResultProviderProps {
  children: ReactNode
}

const ResultContext = createContext({} as StateProps)


const ResultProvider = ({children}: ResultProviderProps ) => {
  const [RESULT, SETRESULT] = useState<any>([])


  const emptyResult = () => {
    SETRESULT([])
  }


  return (
    <ResultContext.Provider value={{result: RESULT, setResult: SETRESULT, emptyResult }} >
      {children}
    </ResultContext.Provider>
  )
}


export { ResultProvider, ResultContext }