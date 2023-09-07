import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationSubject = new Subject<{ message: string; type: 'success' | 'error' }>();

  constructor() {}

  // Método para mostrar uma notificação de erro
  showError(message: string) {
    this.notificationSubject.next({ message, type: 'error' });
  }

  // Método para mostrar uma notificação de sucesso
  showSuccess(message: string) {
    this.notificationSubject.next({ message, type: 'success' });
  }

  // Método para obter notificações como um Observable
  getNotifications() {
    return this.notificationSubject.asObservable();
  }
}
