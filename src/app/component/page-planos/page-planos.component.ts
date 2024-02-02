import { Component } from '@angular/core';

@Component({
  selector: 'app-page-planos',
  templateUrl: './page-planos.component.html',
  styleUrls: ['./page-planos.component.css']
})
export class PagePlanosComponent {

  iconCheck ='/assets/img/pageIcon/check.png'

  constructor() { }

  openWhatsApp() {
    const whatsappLink = 'https://api.whatsapp.com/send?phone=5586981118160&text=Fale%20conosco!';
    window.open(whatsappLink, '_blank');
  }

}
