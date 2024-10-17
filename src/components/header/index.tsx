import Link from "next/link"
import { layoutNames } from "@/utils/options"


export const Header = () => {
    return (
        <nav className="flex bg-zinc-200 h-16 w-full items-center justify-center">
            <div className="h-full flex flex-row items-center justify-center w-[350px] md:w-[768px] xl:w-[1200px] ">
                {
                    layoutNames.pathname.map((m, k) =>
                      <Link href={m.path} key={k}>
                        <div className=" w-28 flex flex-row gap-4 rounded-md h-12 items-center justify-center hover:scale-105 ease-in duration-100 p-2 hover:bg-black hover:text-white">
                          <p>{m.name}</p>
                        </div>
                      </Link> 
                       
                    )
                }
            </div>
        </nav>
    )
}