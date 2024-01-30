import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { LoadingService } from 'src/app/service/loading.service';
import { NotificationService } from 'src/app/service/notification/notification.service';

@Component({
  selector: 'app-cad-usuarios',
  templateUrl: './cad-usuarios.component.html',
  styleUrls: ['./cad-usuarios.component.css']
})
export class CadUsuariosComponent implements OnInit {


  login = {} as Login;
  logins: Login[] = [];

  formUsers!: FormGroup;

  constructor( private loadingService: LoadingService,  private notificationService: NotificationService) { }


  ngOnInit(): void {
  }
}
