import { Component } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.css']
})
export class MenuSideComponent {

  iconLinkedin:string = '/assets/img/linkedinIcon.png';
  iconGitHub:string = '/assets/img/GitHubIcon.png';
  iconTwitter:string = '/assets/img/TTicon.png';

  iconHome:string = '/assets/img/home.png';
  iconDash:string = '/assets/img/dashboard.png';
  iconCadastro:string = '/assets/img/cadastro.png';
  iconSuporte:string = '/assets/img/suporte.png';
  iconLogin:string = '/assets/img/login.png';

}
