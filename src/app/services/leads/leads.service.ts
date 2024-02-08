import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { Leads } from 'src/app/models/leads';



@Injectable({
  providedIn: 'root'
})

export class LeadsService {
  url = 'http://localhost:3000/leads'


  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  //  Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  // carrega todas as despesas
  async getLeads(): Promise<Observable<Leads[]>> {
    return this.httpClient.get<Leads[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

   // salva uma nova despesa
   async saveLeads(leads: Leads){
    return this.httpClient.post<Leads[]>(this.url, leads)
    .pipe(
      retry(2),
       catchError(this.handleError));
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

