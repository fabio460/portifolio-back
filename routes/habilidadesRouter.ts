import { Router } from "express";
import { atualizar, criar, deletar, listar } from "../controllers/habilidadesController";

const habilidadesRouter = Router()
habilidadesRouter.get("/listar", listar)
habilidadesRouter.post("/criar",criar)
habilidadesRouter.put("/atualizar",atualizar)
habilidadesRouter.delete("/deletar",deletar)

export default habilidadesRouter