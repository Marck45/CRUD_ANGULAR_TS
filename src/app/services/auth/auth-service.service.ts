import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private authToken: string | null = null;

// No serviço AuthService
login(token: string) {
  // Armazene o token JWT no localStorage
  console.log(token)
  localStorage.setItem('authToken', token);
  // Defina a propriedade isAuthenticated como true, se necessário
  this.isAuthenticated = true;
}


  logout() {
    // Ao fazer logout, remova o token JWT tanto do serviço quanto do localStorage
    this.isAuthenticated = false;
    this.authToken = null;

    // Também limpe o token armazenado
    localStorage.removeItem('authToken');
  }

  get isAuthenticatedUser(): boolean {
    // Acesse o estado de autenticação como uma propriedade de leitura
    return this.isAuthenticated;
  }

  getAuthToken(): string | null {
    // Recupere o token JWT armazenado
    return this.authToken;
  }

  constructor() {
    // Ao inicializar o serviço, verifique se há um token JWT armazenado no localStorage
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      this.isAuthenticated = true;
      this.authToken = storedToken;
    }
  }
}
