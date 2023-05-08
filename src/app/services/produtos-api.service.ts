import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Produtos } from '../models/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosAPiService {

  url = 'http://localhost:3000/produto'; 


  // injetando o HttpClient
  constructor(private httpClient:HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  }

  // Obtem todos os produtoss
  async getProdutos():Promise<Observable<Produtos[]>> {

    return this.httpClient.get<Produtos[]>(this.url)
      .pipe(
        retry(2)
          ,catchError(this.handleError));

  }

  // cadastrar novo produto
  async saveProduto(produto:Produtos){
    console.warn(produto)
    return this.httpClient.post<Produtos[]>(this.url, produto)
    .pipe(
      retry(2)
      ,catchError(this.handleError));
  }

  // deletar um produto cadastrardo 
  async deleteProduto(produto:Produtos){
    return this.httpClient.delete<Produtos>(this.url + '/' + produto._id, this.httpOptions)
    .pipe(
      retry(1)
        ,catchError(this.handleError));
  }

  // atualizar um produto
  async UpdateProduto(produto:Produtos){
    return this.httpClient.patch<Produtos>(this.url + '/' + produto._id, this.httpOptions)
    .pipe(
      retry(1)
      ,catchError(this.handleError));

  }

   // Manipulação de erros
   handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
