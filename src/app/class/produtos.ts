import { Produtos } from "../models/produtos";

export class ProdutosClass implements Produtos{
    _id: number = 0;
    nome: string = '';
    valor: number = 0;
    custo: number = 0;
    descricao: string = '';
    disponivel: number = 0;
}

