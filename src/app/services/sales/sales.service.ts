import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { Sales } from '../../models/sales';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  url = 'http://localhost:3000/sales'

  constructor(private httpClient: HttpClient) { }

  //  Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


   // carrega todas as despesas
   async getSales(): Promise<Observable<Sales[]>> {
    return this.httpClient.get<Sales[]>(this.url)
    .pipe(
      retry(2),
       catchError(this.handleError));
  }

   // Salva uma nova venda
   saveSales(sales: Sales): Observable<Sales> {
    return this.httpClient.post<Sales>(this.url, sales, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  // deletar uma despesa

  async deleteSales(salesId: string): Promise<Observable<void>> {
    const deleteUrl = `${this.url}/${salesId}`;

    return this.httpClient.delete<void>(deleteUrl, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // atualizar uma despesa
  async UpdateSales(sales: Sales) {
    return this.httpClient.put<Sales[]>(this.url + '/' + sales._id, sales)
    .pipe(
      retry(1)
      , catchError(this.handleError));
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

