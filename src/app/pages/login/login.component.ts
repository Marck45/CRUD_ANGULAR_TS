import { Component, Inject, OnInit } from '@angular/core';
import { AuthService as Auth0AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logoImg = "./assets/img/logo.png";

  showPopup: boolean = false;

  showMobileMenu = false;

  constructor(public auth: Auth0AuthService, @Inject(DOCUMENT) public document: Document, private router: Router) { }

  ngOnInit(): void {
  }

  menuOnClick() {
    document.getElementById("menu-bar")!.classList.toggle("change");
    document.getElementById("nav")!.classList.toggle("change");
    document.getElementById("menu-bg")!.classList.toggle("change-bg");
  }

  login() {
    // Chamar o login do Auth0
    this.auth.loginWithRedirect();
  }

}
