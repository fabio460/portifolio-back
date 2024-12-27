import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma =new PrismaClient()

export const listar = async(req:Request,res:Response)=>{
   try {
    const r = await prisma.projetos.findMany()
    res.json(r)
   } catch (error) {
    res.status(500).json("Erro ao listar Projeto, motivo: "+error)
}
}

export const criar = async(req:Request,res:Response)=>{
    const array:{idUsuario:string, descricao:string,imagem:string, link:string}[] = req.body
    try {
        await prisma.projetos.createMany({
           data:array[0]     
        })
        res.status(200)
    } catch (error) {
        res.status(500).json("Erro ao adicionar Projeto, motivo: "+error)
    }
}    

export const atualizar = async(req:Request,res:Response)=>{
    const {id ,idUsuario,descricao,imagem,link} = req.body
    try {
        await prisma.projetos.update({
           data:{
             idUsuario,descricao,imagem,link
           },
           where:{id}           
        })
    } catch (error) {
        res.status(500).json("Erro ao atualizar Projeto, motivo: "+error)
    }
}   

export const deletar = async(req:Request,res:Response)=>{
    const {id} = req.body
    try {
        await prisma.projetos.delete({
           where:{id}           
        })
    } catch (error) {
        res.status(500).json("Erro ao deletar Projeto, motivo: "+error)
    }
}   