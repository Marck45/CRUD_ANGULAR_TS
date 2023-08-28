import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Produtos } from '../models/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosAPiService {

  private contadorId = 0;

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
  async saveProduto(formData: FormData){
    return this.httpClient.post<Produtos[]>(this.url, formData)
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
  async UpdateProduto(produto: Produtos){
    return this.httpClient.put<Produtos[]>(this.url + '/' + produto._id, produto)
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

  // Método para enviar a imagem para o servidor
  uploadImage(formData: FormData): Observable<any> {
    return this.httpClient.post(`${this.url}/upload`, formData);
  }


  // filtrar produtos do back
  filtrarProdutos(searchTerm: string): Observable<any[]> {
    // Configurar os parâmetros da solicitação GET
    const params = new HttpParams().set('nome', searchTerm);

    return this.httpClient.get<any[]>(this.url, { params })
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


}
