import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.component.html',
  styleUrls: ['./suporte.component.css']
})
export class SuporteComponent implements OnInit {

  supImgLogin:string = '/assets/img/loginusuario.png';
  supImgCad:string = '/assets/img/cadastro.png';
  supImgVendas:string = '/assets/img/vendas.png';



  ngOnInit(): void {
    
  }

}
