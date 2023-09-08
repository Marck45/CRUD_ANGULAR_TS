import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { LoadingService } from 'src/app/service/loading.service';
import { NotificationService } from 'src/app/service/notification/notification.service';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-cad-usuarios',
  templateUrl: './cad-usuarios.component.html',
  styleUrls: ['./cad-usuarios.component.css']
})
export class CadUsuariosComponent implements OnInit {


  login = {} as Login;
  logins: Login[] = [];

  formUsers!: FormGroup;

  constructor(private loginServiceService: LoginServiceService, private loadingService: LoadingService,  private notificationService: NotificationService) { }


  ngOnInit(): void {
    this.creatFormUsers();
  }

  creatFormUsers() {
    this.formUsers = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
    })
  }

  onSubimitUser() {

    this.creatUsers(this.formUsers.value);

  }

  async creatUsers(formUsers: any) {

    this.loadingService.show();

    (await this.loginServiceService.creatLogin(formUsers)).subscribe(
      (response: any) => {

        this.notificationService.showSuccess('Usuário cadastrado!');

        this.loadingService.hide();

      }, (error: any) => {

        this.notificationService.showError('Erro ao cadastrar login: ' + ' ' + error.message);
        this.loadingService.hide();

      }

    );

    this.cleanForm()

  }

  cleanForm() {

    this.creatFormUsers();

  }

}
