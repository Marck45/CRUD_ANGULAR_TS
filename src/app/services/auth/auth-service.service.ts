import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private authToken: string | null = null;

  login(token: string) {
    // Ao fazer login, armazene o token JWT no serviço
    this.isAuthenticated = true;
    this.authToken = token;

    // Você pode armazenar o token em localStorage ou sessionStorage para persistência
    // Exemplo com localStorage:
    localStorage.setItem('authToken', token);
  }

  logout() {
    // Ao fazer logout, remova o token JWT do serviço
    this.isAuthenticated = false;
    this.authToken = null;

    // Também limpe o token armazenado
    localStorage.removeItem('authToken');
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  getAuthToken(): string | null {
    // Recupere o token JWT armazenado
    return this.authToken;
  }

  constructor() {
    // Ao inicializar o serviço, verifique se há um token JWT armazenado
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      this.isAuthenticated = true;
      this.authToken = storedToken;
    }
  }
}
