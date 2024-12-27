import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma =new PrismaClient()

export const listar = async(req:Request,res:Response)=>{
   try {
    const r = await prisma.servicos.findMany()
    res.json(r)
   } catch (error) {
    res.status(500).json("Erro ao listar serviços, motivo: "+error)
}
}

export const criar = async(req:Request,res:Response)=>{

    const array:{idUsuario:string, titulo:string,icone:string, texto:string}[] = req.body
    try {
        await prisma.servicos.createMany({
           data:array[0]     
        })
        res.status(200)
    } catch (error) {
        res.status(500).json("Erro ao adicionar Projeto, motivo: "+error)
    }
}    

export const atualizar = async(req:Request,res:Response)=>{
    const {id ,idUsuario,icone,texto,titulo} = req.body
    try {
        await prisma.servicos.update({
           data:{
             idUsuario,icone,texto,titulo
           },
           where:{id}           
        })
    } catch (error) {
        res.status(500).json("Erro ao atualizar serviços, motivo: "+error)
    }
}   

export const deletar = async(req:Request,res:Response)=>{
    const {id} = req.body
    try {
        await prisma.servicos.delete({
           where:{id}           
        })
    } catch (error) {
        res.status(500).json("Erro ao deletar serviços, motivo: "+error)
    }
}   