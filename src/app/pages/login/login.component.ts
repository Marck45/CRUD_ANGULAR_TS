import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { LoadingService } from 'src/app/service/loading.service';
import { NotificationService } from 'src/app/service/notification/notification.service';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

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

  constructor( private loadingService: LoadingService,
    private notificationService: NotificationService, private router: Router, public auth: AuthService, @Inject(DOCUMENT) public document: Document) { }

  ngOnInit(): void {;

  }

}

