import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Expenses } from 'src/app/class/expenses/expenses';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  url = 'http://localhost:3000/expenses'

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  //  Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // carrega todas as despesas
  async getExpenses(): Promise<Observable<Expenses[]>> {
    return this.httpClient.get<Expenses[]>(this.url)
    .pipe(
      retry(2),
       catchError(this.handleError));
  }

  // salva uma nova despesa
  async saveExpenses(expenses: Expenses){
    return this.httpClient.post<Expenses[]>(this.url, expenses)
    .pipe(
      retry(2),
       catchError(this.handleError));
  }

  // deletar uma despesa

  async deleteExpenses(expenses: Expenses){
    return this.httpClient.delete<Expenses>(this.url + '/' + expenses, this.httpOptions)
      .pipe(
        retry(1)
        , catchError(this.handleError));
  }

  // atualizar uma despesa
  async UpdateProduto(expenses: Expenses) {
    return this.httpClient.put<Expenses[]>(this.url + '/' + expenses, expenses)
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

  // Método para enviar a imagem para o servidor
  uploadImage(formData: FormData): Observable<any> {
    return this.httpClient.post(`${this.url}/upload`, formData);
  }

}
