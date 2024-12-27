import { Router } from "express";
import { atualizar, criar, deletar, listar } from "../controllers/usuarioController";

const usuarioRouter = Router()
usuarioRouter.post("/listar", listar)
usuarioRouter.post("/criar",criar)
usuarioRouter.put("/atualizar",atualizar)
usuarioRouter.delete("/deletar",deletar)

export default usuarioRouter