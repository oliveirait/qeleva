
import { InputHTMLAttributes } from "react"


export interface InputsProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  place: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  value: string
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