import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  imgLogin:string ='/assets/img/img-login.jpg';
  googleImg:string = 'assets/img/gmail.png';
  faceImg:string = '/assets/img/facebookVSG.svg';



  forgetPass(){
    alert('Verifique sua caixa de e-mail para cadastrar a nova senha');
  }

}

