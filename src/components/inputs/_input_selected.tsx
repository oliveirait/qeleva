
import { InputHTMLAttributes } from "react"


export interface InputSelectProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  arrValues: string[]
  value: string
}


export const InputSelect = ({title, value, setValue, arrValues}: InputSelectProps) => {
  return (
    <div className="p-2 space-y-2  rounded-md m-2">
      <main className="font-bold">{title}</main>
      <select className="w-full p-2 rounded-md shadow-black shadow-sm" onChange={(e) => setValue(e.target.value)} value={value}>
        <option value="">Selecione...</option>  
        {
          arrValues.map((val, key) => 
            <option key={key} value={val}>{val}</option>  
          )
        }
      </select>
    </div>
  )
}