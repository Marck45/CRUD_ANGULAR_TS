import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationSubject = new Subject<string>();

  constructor() { }

  // Método para mostrar uma notificação de erro
  showError(message: string) {
    this.notificationSubject.next(message);
  }

  // Método para obter notificações como um Observable
  getNotifications() {
    return this.notificationSubject.asObservable();
  }

}
