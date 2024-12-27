import { routerType } from "../types";
import autenticarRouter from "./autenticarRouter";
import habilidadesRouter from "./habilidadesRouter";
import projetosRouter from "./projetosRouter";
import redesSociaisRouter from "./redesSociaisRouter";
import servicosRouter from "./servicoRouter";
import usuarioRouter from "./usuarioRouter";

export const router:routerType[] = [
    {link:"/usuario",router:usuarioRouter},
    {link:"/servicos",router:servicosRouter},
    {link:"/projetos",router:projetosRouter},
    {link:"/redesSociais",router:redesSociaisRouter},
    {link:"/autenticacao", router:autenticarRouter},
    {link:"/habilidades", router:habilidadesRouter},
]