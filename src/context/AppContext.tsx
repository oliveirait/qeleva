'use client'

import React, { ReactNode, createContext, useState } from "react";

// Data from 
type AppContextProps = {
  status: number
  retorno: any[]
  erro: string
}

type StateProps = {
  data: AppContextProps
  setData: React.Dispatch<React.SetStateAction<AppContextProps>>
}

interface AppProviderProps {
  children: ReactNode
}

const AppContext = createContext({} as StateProps)


const AppProvider = ({children}: AppProviderProps ) => {
  const [data, setData] = useState<AppContextProps>({
    "status": 10,
    "retorno": [],
    "erro": ""
  })



  return (
    <AppContext.Provider value={{data: data, setData: setData}} >
      {children}
    </AppContext.Provider>
  )
}


export { AppProvider, AppContext }