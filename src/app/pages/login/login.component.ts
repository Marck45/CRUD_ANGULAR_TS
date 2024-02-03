import { Component, HostListener, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  logoImg = "./assets/img/logo.png";

  showPopup: boolean = false;

  constructor(public auth: AuthService, @Inject(DOCUMENT) public document: Document) { }

}

