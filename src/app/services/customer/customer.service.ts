import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { Customer } from 'src/app/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = 'http://localhost:3000/users'

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  //  Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

   // carrega todas as despesas
   async getCustomer(): Promise<Observable<Customer[]>> {
    return this.httpClient.get<Customer[]>(this.url)
    .pipe(
      retry(2),
       catchError(this.handleError));
  }

  // salva uma nova despesa
  async saveCustomer(customer: Customer){
    return this.httpClient.post<Customer[]>(this.url, customer)
    .pipe(
      retry(2),
       catchError(this.handleError));
  }

  // deletar uma despesa

  async deleteCustomer(customerId: string): Promise<Observable<void>> {
    const deleteUrl = `${this.url}/${customerId}`;

    return this.httpClient.delete<void>(deleteUrl, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // atualizar uma despesa
  async UpdateCustomer(customer: Customer) {
    return this.httpClient.put<Customer[]>(this.url + '/' + customer._id, customer)
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
