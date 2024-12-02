import Link from "next/link"
import { layoutNames } from "@/utils/options"


export const Header = () => {
    return (
        <nav className="fixed top-0 z-10 flex h-16 w-full items-center justify-center bg-gradient-to-r from-blue-800 via-red-800">
            <div className="h-full w-full flex flex-row items-center justify-center md:w-[768px] xl:w-[1200px] border-white">
                {
                    layoutNames.pathname.map((m, k) =>
                      <Link href={m.path} key={k}>
                        <div className=" w-28 flex flex-row gap-4 rounded-md h-12 items-center justify-center hover:scale-105 ease-in duration-100 p-2 hover:bg-black text-white">
                          <p>{m.name}</p>
                        </div>
                      </Link> 
                       
                    )
                }
            </div>
        </nav>
    )
}