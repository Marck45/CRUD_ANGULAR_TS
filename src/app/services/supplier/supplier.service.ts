import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { Supplier } from 'src/app/models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  url = 'http://localhost:3000/supplier'

   // injetando o HttpClient
   constructor(private httpClient: HttpClient) { }

   //  Headers
   httpOptions = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };

   // carrega todas as despesas
   async getSupplier(): Promise<Observable<Supplier[]>> {
     return this.httpClient.get<Supplier[]>(this.url)
     .pipe(
       retry(2),
        catchError(this.handleError));
   }

   // salva uma nova despesa
   async saveSupplier(expenses: Supplier){
     return this.httpClient.post<Supplier[]>(this.url, expenses)
     .pipe(
       retry(2),
        catchError(this.handleError));
   }

   // deletar uma despesa

   async deleteSupplier(expenseId: string): Promise<Observable<void>> {
     const deleteUrl = `${this.url}/${expenseId}`;

     return this.httpClient.delete<void>(deleteUrl, this.httpOptions)
       .pipe(
         retry(2),
         catchError(this.handleError)
       );
   }

   // atualizar uma despesa
   async UpdateSupplier(expenses: Supplier) {
     return this.httpClient.put<Supplier[]>(this.url + '/' + expenses._id, expenses)
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

