import { Produtos } from "../models/produtos";

export class ProdutosClass implements Produtos{

    _id: number = 0;
    nome: string = '';
    valor: number = 0;
    custo: number = 0;
    descricao: string = '';
    marca: string = '';
    medida: string  = '';
    quantidade: number = 0;
    validade: Date = new Date;
    lote: number = 0;
    photo: any;

}

