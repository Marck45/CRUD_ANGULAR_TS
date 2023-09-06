import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/service/notification/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  message: string | null = null;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    // Inscreva-se no serviço de notificação para receber mensagens
    this.notificationService.getNotifications().subscribe((message) => {
      this.message = message;
      // Defina um timer para limpar a mensagem após um período de tempo (por exemplo, 5 segundos)
      setTimeout(() => {
        this.message = null;
      }, 5000); // 5000 milissegundos = 5 segundos
    });
  }

}
