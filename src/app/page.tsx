import Link from "next/link";

export default function Home() {

  return(
   <section className="pt-16 flex w-full h-screen bg-gradient-to-t from-black bg-red-950">

        <div className="w-full h-full items-start justify-center flex flex-col mt-[-300px]">
          <div className="flex flex-col items-center justify-center w-full h-full gap-4 text-white">
            <p className="italic text-5xl font-bold">A SUA CHANCE PARA VIRAR O JOGO ESTÁ AQUI!</p>
            <p className="text-xl">Simulado de questões que aumenta sua oportunidade de conquistar sua vaga!</p>
            <Link 
              href="/questoes"
              className="flex hover:bg-red-400 items-center justify-center h-14 max-w-10xl bg-red-600 rounded-md p-4 mt-6 duration-200">
              <p className="font-bold ">INICIE AGORA OS TESTES</p>
            </Link> 

          </div>
        </div>
     
    </section>

  )
}