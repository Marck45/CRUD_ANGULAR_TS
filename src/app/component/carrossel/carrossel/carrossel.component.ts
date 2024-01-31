import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent implements OnInit {

  iconAtendimento = '/assets/img/pageIcon/atendimento.png'
  iconAutonomos = '/assets/img/pageIcon/autonomos.png'
  iconb2b = '/assets/img/pageIcon/b2b.png'
  iconbarbearias = '/assets/img/pageIcon/barbearias.png'
  iconEmpresas = '/assets/img/pageIcon/empresas.png'
  iconEscritorios = '/assets/img/pageIcon/escritorios.png'
  iconLojas = '/assets/img/pageIcon/lojas.png'
  iconPetshop = '/assets/img/pageIcon/petshop.png'


  constructor() { }

  ngOnInit(): void {

  }
}


