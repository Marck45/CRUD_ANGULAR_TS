import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-pefil-cad',
  templateUrl: './pefil-cad.component.html',
  styleUrls: ['./pefil-cad.component.css']
})
export class PefilCadComponent {

  iconLogin:string = '/assets/img/login.png';

  constructor (private router: Router, public auth: AuthService) {}

  submenu: string | null = null; // Inicialmente, nenhum submenu está ativo

  toggleSubmenu(submenuName: string) {
    if (this.submenu === submenuName) {
      this.submenu = null; // Fecha o submenu se já estiver aberto
    } else {
      this.submenu = submenuName; // Abre o submenu clicado
    }
  }

  onLogoutClick(){
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } })

    this.router.navigate(['']);
  }

}
