import { Component } from '@angular/core';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {

  imgProd = '/assets/img/img-login.jpg';

  performSearch(searchTerm: string) {
    // Coloque aqui a lógica para realizar a pesquisa com base em 'searchTerm'
    console.log('Pesquisa realizada com o termo:', searchTerm);
  }







}
