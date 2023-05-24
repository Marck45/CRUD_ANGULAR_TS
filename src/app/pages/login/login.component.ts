import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  imgLogin:string ='/assets/img/img-login.jpg';
  googleImg:string = 'assets/img/gmail.png';
  faceImg:string = '/assets/img/facebookVSG.svg';

  user = {} as Users;
  usuario: Users[] = [];

  formLogin!: FormGroup;

  constructor(){}

  ngOnInit(): void {

    this.creatFormLogin();

  }

  // criação dos dados de captura login
  creatFormLogin(){

    this.formLogin = new FormGroup({

      nome: new FormControl(),
      password: new FormControl(),

    });
  }

  // envia dados para conferencia de login
  async onSubmitLogin(){
    // criar logica para envio das informações de login
    console.log('login solicitado');

  }

  // limpa formulario apos login
  cleanForm() {

    this.creatFormLogin();

    console.log('Formulario de login resetado');

  }
  // caixa de mensagem sobre reset de senha
  forgetPass(){
    alert('Verifique sua caixa de e-mail para cadastrar a nova senha');
  }

}

