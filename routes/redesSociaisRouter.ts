import { Router } from "express";
import { atualizar, criar, deletar, listar } from "../controllers/redesSociaisController";

const redesSociaisRouter = Router()
redesSociaisRouter.get("/listar", listar)
redesSociaisRouter.post("/criar",criar)
redesSociaisRouter.put("/atualizar",atualizar)
redesSociaisRouter.delete("/deletar",deletar)

export default redesSociaisRouter