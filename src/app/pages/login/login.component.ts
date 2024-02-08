import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  logoImg = "./assets/img/logo.png";

  showPopup: boolean = false;

  showMobileMenu = false;


  constructor(public auth: AuthService, @Inject(DOCUMENT) public document: Document,) { }

  ngOnInit(): void {
  }
  menuOnClick() {
    document.getElementById("menu-bar")!.classList.toggle("change");
    document.getElementById("nav")!.classList.toggle("change");
    document.getElementById("menu-bg")!.classList.toggle("change-bg");
  }
}
