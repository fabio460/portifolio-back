import { Router } from "express";
import { autenticar, logar } from "../controllers/autenticacaoController";

const autenticarRouter = Router()
autenticarRouter.post("/logar", logar)
autenticarRouter.post("/autenticar", autenticar)
export default autenticarRouter