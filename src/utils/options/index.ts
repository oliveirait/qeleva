
const optionsBancaList: string[] = ["FGV"]

const optionsNivelList: string[] = ["Nível Médio", "Nível Superior"]

const optionsMateriaList: string[] = [
  "Língua Portuguesa", 
  "Conhecimentos Específicos", 
  "Conhecimentos Gerais", 
  "Raciocínio Lógico",
  "Noções de Direito Administrativo e de Direito Constitucional"
]

const optionsAreaList: string[] = ["Tecnologia da Informação"]


const optionsAnoList: string[] = []


export const Options = {
  banca: optionsBancaList,
  nivel: optionsNivelList,
  materia: optionsMateriaList,
  area: optionsAreaList,
  ano: optionsAnoList
}

export const layoutNames = {
  pathname: [
    {name: "Início", path: "/"},
    {name: "Cadastro", path: "/cadastro"},
    {name: "Questões", path: "/questoes"},
    {name: "Testes", path: "/testes"}
  ],
  
  pages: {
    cadastro: {
      title: "Cadastro de questões",
      form: {
        titulodeprova: "Título da Prova",
        banca: "Banca",
        cargo: "Cargo",
        ano: "Ano",
        escolaridade: "Escolaridade",
        enunciado: "Enunciado da questão",
        alternativas: "Alternativas",
        area: "Área",
        materia: "Matéria",
        alternativacorreta: "Alternativa correta"
      },
      button: "Postar",
    }
  }

}

