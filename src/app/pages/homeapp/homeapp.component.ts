import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-homeapp',
  templateUrl: './homeapp.component.html',
  styleUrls: ['./homeapp.component.css']
})
export class HomeappComponent implements AfterViewInit {

  mainImg: string = '/assets/img/Sistema cadastro.PNG';
  iconVenda: string = '/assets/img/vendas.png';
  iconSuporte: string = '/assets/img/suporte.png';
  iconfinancas: string = '/assets/img/aumento.png';
  iconProduto: string = '/assets/img/produtoImg.png';
  iconCliente: string = '/assets/img/loginusuario.png';
  iconCusto: string = '/assets/img/custo.png';

  title: string = 'Mk Pro Service'

  @ViewChild('pieChart1') private chartRef1!: ElementRef;
  @ViewChild('pieChart2') private chartRef2!: ElementRef;
  charts: any[] = [];

  ngAfterViewInit(): void {
    this.createChart(this.chartRef1.nativeElement, ['Finanças', 'Clientes', 'Estoque', 'Vendas', 'Lucro']);
    this.createChart(this.chartRef2.nativeElement, ['Produto A', 'Produto B', 'Produto C', 'Produto D', 'Produto E']);
  }

  private createChart(element: any, labels: string[]): void {
    const chart = new Chart(element, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            'red',
            'blue',
            'yellow',
            'green',
            'purple'
          ]
        }]
      }
    });

    this.charts.push(chart);
  }

}
