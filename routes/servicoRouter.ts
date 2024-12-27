import { Router } from "express";
import { atualizar, criar, deletar, listar } from "../controllers/servicosConroller";

const servicosRouter = Router()
servicosRouter.get("/listar", listar)
servicosRouter.post("/criar",criar)
servicosRouter.put("/atualizar",atualizar)
servicosRouter.delete("/deletar",deletar)

export default servicosRouter