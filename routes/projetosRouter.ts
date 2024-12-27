import { Router } from "express";
import { atualizar, criar, deletar, listar } from "../controllers/projetosController";

const projetosRouter = Router()
projetosRouter.get("/listar", listar)
projetosRouter.post("/criar",criar)
projetosRouter.put("/atualizar",atualizar)
projetosRouter.delete("/deletar",deletar)

export default projetosRouter