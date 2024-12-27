import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const codigo = "codigo"
const prisma =new PrismaClient()

export const logar = async(req:Request,res:Response)=>{
   const {email, senha} = req.body 

   try {
      const usuario = await prisma.usuario.findFirst({
        where:{email, senha}
      })
    
      if (usuario) {
       const token = jwt.sign(usuario,codigo)
       res.json({usuario,token})
      } else {
       res.status(500).json("Usuário ou senha inválidos!")
      }
      
   } catch (error) {
      res.status(500).json(error)
   }
}

export const autenticar = async(req:Request,res:Response)=>{
   const h:any = req.headers["x-access-token"] 
   try {
      if (jwt.verify(h,codigo)) {
       res.json(jwt.decode(h))
      } else {
       res.status(500).json("usuário não autenticado")
      }
      
   } catch (error) {
      res.status(500).json(error)
   }
}