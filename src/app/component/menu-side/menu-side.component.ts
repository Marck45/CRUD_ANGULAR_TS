import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.css']
})
export class MenuSideComponent implements OnInit {

  iconLinkedin:string = '/assets/img/linkedinIcon.png';
  iconGitHub:string = '/assets/img/gitIcon.svg';
  iconTwitter:string = '/assets/img/TTicon.png';

  iconHome:string = '/assets/img/home.png';
  iconDash:string = '/assets/img/dashboard.png';
  iconCadastro:string = '/assets/img/cadastro.png';
  iconProduto:string = '/assets/img/produtoImg.png';
  iconSuporte:string = '/assets/img/suporte.png';
  iconLogout:string = '/assets/img/logoutIcon.png';
  iconVenda:string = '/assets/img/vendas.png';
  iconCliente:string = '/assets/img/loginusuario.png';
  iconFornecedor:string = '/assets/img/emestoque.png';
  iconfinancas:string = '/assets/img/aumento.png';


  constructor (private router: Router, private authService: AuthService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  submenu: string | null = null; // Inicialmente, nenhum submenu está ativo

  toggleSubmenu(submenuName: string) {
    if (this.submenu === submenuName) {
      this.submenu = null; // Fecha o submenu se já estiver aberto
    } else {
      this.submenu = submenuName; // Abre o submenu clicado
    }
  }

  onLogoutClick(){

    this.authService.logout();

    this.router.navigate(['']);
  }

}
