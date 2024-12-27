import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma =new PrismaClient()

export const listar = async(req:Request,res:Response)=>{
    const {id} = req.body
    
    try {
      const r = await prisma.usuario.findUnique({
          include:{
              redesSociais:true,
              contatos:true,
              habilidades:true,
              projetos:true,
              servicos:true,
          },
          where:{id}
      }) 
      res.json(r)
      
    } catch (error) {
      res.status(500).json({id,error})
    }
}

export const criar = async(req:Request,res:Response)=>{
  const {
    email,
    senha,
    perfilTexto1,
    perfilNome,
    perfilTexto3Subtitulo,
    perfilTexto4,
    fotoDePerfil,
    servicoText1,
    servicoText2,
    projetoTitulo,
    projetoSubtitulo,
    habilidadesTitulo,
    habilidadesSubtitulo,
    endereco,
    curriculo,
  } = req.body

  try {
    const usuario = await prisma.usuario.create({
        data:{
            email,
            senha,
            perfilTexto1,
            perfilNome,
            perfilTexto3Subtitulo,
            perfilTexto4,
            fotoDePerfil,
            servicoText1,
            servicoText2,
            projetoTitulo,
            projetoSubtitulo,
            habilidadesTitulo,
            habilidadesSubtitulo,
            endereco,
            curriculo,
        }
    })
    res.json(usuario)
  } catch (error) {
    res.status(500).json("Falha ao criar usuário. motivo: "+error)
  }
}    

export const atualizar = async(req:Request,res:Response)=>{
    const {
        id,
        email,
        senha,
        perfilTexto1,
        perfilNome,
        perfilTexto3Subtitulo,
        perfilTexto4,
        fotoDePerfil,
        servicoText1,
        servicoText2,
        projetoTitulo,
        projetoSubtitulo,
        habilidadesTitulo,
        habilidadesSubtitulo,
        endereco,
        curriculo,
      } = req.body
      try {
          await prisma.usuario.update({
            where:{id},
            data:{
                email,
                senha,
                perfilTexto1,
                perfilNome,
                perfilTexto3Subtitulo,
                perfilTexto4,
                fotoDePerfil,
                servicoText1,
                servicoText2,
                projetoTitulo,
                projetoSubtitulo,
                habilidadesTitulo,
                habilidadesSubtitulo,
                endereco,
                curriculo,   
            }
          })
          res.json("Usuário atualizado com sucesso!!!")

      } catch (error) {
        res.status(500).json("Falha ao atualizado usuário. motivo: "+error)
      }
}   

export const deletar = async(req:Request,res:Response)=>{
   const {id} = req.body
   try {
    await prisma.usuario.delete({
        where:{id}
    })
    res.json("Usuário deletado com sucesso!!!")

   } catch (error) {
    res.status(500).json("Falha ao criar usuário. motivo: "+error)

   }
}   