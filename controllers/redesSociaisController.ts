import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma =new PrismaClient()

export const listar = async(req:Request,res:Response)=>{
   try {
    const r = await prisma.redesSociais.findMany()
    res.json(r)
   } catch (error) {
    res.status(500).json("Erro ao listar redesSociais, motivo: "+error)
}
}

export const criar = async(req:Request,res:Response)=>{
    const array:{idUsuario:string,imagem:string, link:string}[] = req.body
    try {
        await prisma.redesSociais.createMany({
          data:array[0]          
        })
        res.status(200)
    } catch (error) {
        res.status(500).json("Erro ao adicionar redesSociais, motivo: "+error)
    }
}    

export const atualizar = async(req:Request,res:Response)=>{
    const array:{id:string,idUsuario:string,imagem:string, link:string}[] = req.body

    try {
        await prisma.redesSociais.updateMany({
           data:
             array[0]
           ,           
        })
        res.status(200)
    } catch (error) {
        res.status(500).json("Erro ao atualizar redesSociais, motivo: "+error)
    }
}   

export const deletar = async(req:Request,res:Response)=>{
    const {id} = req.body
    try {
        await prisma.redesSociais.delete({
           where:{id}           
        })
    } catch (error) {
        res.status(500).json("Erro ao deletar redesSociais, motivo: "+error)
    }
}   