import { Produtos } from "../models/produtos";

export class ProdutosClass implements Produtos{
    _id: string = '';
    nome: string = '';
    valor: number = 0;
    descricao: string = '';
    disponivel: boolean = true;
}
