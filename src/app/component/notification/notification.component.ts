import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/service/notification/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  notifications: { message: string; type: 'success' | 'error' }[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.getNotifications().subscribe((notification) => {
      this.notifications.push(notification);

      // Remova a notificação após um certo tempo (opcional)
      setTimeout(() => {
        this.removeNotification(notification);
      }, 2000); // Remova após 5 segundos (ajuste conforme necessário)
    });
  }

  removeNotification(notification: { message: string; type: 'success' | 'error' }) {
    const index = this.notifications.indexOf(notification);
    if (index !== -1) {
      this.notifications.splice(index, 1);
    }
  }
}
