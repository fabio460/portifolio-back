import { Router } from "express";

export type usuarioType = {
    id :string
    email :string
    senha :string
    perfilTexto1 :string
    perfilNome :string
    perfilTexto3Subtitulo :string
    perfilTexto4 :string
    redesSociais :RedesSociaisType[]
    fotoDePerfil :string
    servicoText1 :string
    servicoText2 :string
    servicos: ServicosType[]
    projetoTitulo :string
    projetoSubtitulo :string
    projetos :ProjetosType[]
    habilidadesTitulo :string
    habilidadesSubtitulo :string
    habilidades :HabilidadesType[]
    endereco :string
    contatos :ContatosType[]
    curriculo :string
}
export type RedesSociaisType = {
    id :String 
    idUsuario: String
    usuario :usuarioType[]
    link :String
    imagem :String
}

export type ServicosType = {
    id: String
    idUsuario: String 
    usuario: usuarioType[]
    icone: String
    titulo: String
    texto: String
}

export type ContatosType = {
    id: String
    idUsuario: String 
    usuario: usuarioType[]
    descricao: String
    link: String
    imagem: String
}
export type HabilidadesType = {
    id: String
    idUsuario: String 
    usuario: usuarioType[]
    iconeSuperior: String
    quabtidadeDeEstrelas: number
    texto: String
    iconeDaHabilidade: String
    tituloDaHabilidade: String
    subTituloDaHabilidade: String
}
export type ProjetosType = {
    id: String
    idUsuario: String 
    usuario: usuarioType[]
    descricao: String
    link: String
    imagem: String
}
export type routerType = {
    link:string
    router:Router   
}