import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { LoadingService } from 'src/app/service/loading.service';
import { NotificationService } from 'src/app/service/notification/notification.service';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  imgLogin: string = '/assets/img/img-login.jpg';
  googleImg: string = 'assets/img/gmail.png';
  faceImg: string = '/assets/img/facebookVSG.svg';

  login = {} as Login;
  logins: Login[] = [];

  formLogin!: FormGroup;

  constructor(private loginServiceService: LoginServiceService, private loadingService: LoadingService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {

    this.creatFormLogin();

  }

  // criação dos dados de captura login
  creatFormLogin() {
    this.formLogin = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  // envia dados para conferencia de login
  async onSubmitLogin() {
    this.checkLogin(this.formLogin.value);
    console.log('login solicitado', this.formLogin.value);

  }

  // chama o serviço que chega os dados do cliente
  async checkLogin(formLogin: any) {

    this.loadingService.show();

    (await this.loginServiceService.saveLogin(formLogin)).subscribe(
      (response: Login[]) => {
      console.log(formLogin)
      this.notificationService.showSuccess('Login realizado!');
      this.loadingService.hide();
    },
      (error: any) => {
        this.notificationService.showError('Erro ao realizar login: ' + ' ' + error.message);
        this.loadingService.hide();
      }
    );

    this.cleanForm();
  }

  // limpa formulario apos login
  cleanForm() {

    this.creatFormLogin();

  }
  // caixa de mensagem sobre reset de senha
  forgetPass() {
    alert('Verifique sua caixa de e-mail para cadastrar a nova senha');
  }

}

