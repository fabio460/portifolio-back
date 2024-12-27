import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma =new PrismaClient()

export const listar = async(req:Request,res:Response)=>{
   try {
    const r = await prisma.habilidades.findMany()
    res.json(r)
   } catch (error) {
    res.status(500).json("Erro ao listar Habilidades, motivo: "+error)
}
}

export const criar = async(req:Request,res:Response)=>{
    const array:{
        idUsuario:string,
        iconeSuperior:string,
        quabtidadeDeEstrelas:number,
        texto: string,
        iconeDaHabilidade: string,
        tituloDaHabilidade: string,
        subTituloDaHabilidade: string

    }[] = req.body
    try {
        await prisma.habilidades.createMany({
           data:array[0]     
        })
        res.status(200)
    } catch (error) {
        res.status(500).json("Erro ao adicionar Habilidades, motivo: "+error)
    }
}   

export const atualizar = async(req:Request,res:Response)=>{

}

export const deletar = async(req:Request,res:Response)=>{

}