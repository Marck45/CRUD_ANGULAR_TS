import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { LoadingService } from 'src/app/service/loading.service';
import { ProdutosAPiService } from 'src/app/services/produtos/produtos-api.service';

@Component({
  selector: 'app-dash-financas',
  templateUrl: './dash-financas.component.html',
  styleUrls: ['./dash-financas.component.css']
})
export class DashFinancasComponent {

  mainImg: string = '/assets/img/Sistema cadastro.PNG';
  iconVenda: string = '/assets/img/vendas.png';
  iconSuporte: string = '/assets/img/suporte.png';
  iconfinancas: string = '/assets/img/aumento.png';
  iconProduto: string = '/assets/img/produtoImg.png';
  iconCliente: string = '/assets/img/loginusuario.png';
  iconCusto: string = '/assets/img/custo.png';

  title: string = 'Relatorio Financeiro';

  @ViewChild('pieChart1') private chartRef1!: ElementRef;
  @ViewChild('lineChart') private lineChartRef!: ElementRef;

  charts: any[] = [];

  constructor(private produtosAPiService: ProdutosAPiService, private loadingService: LoadingService) { }


  ngAfterViewInit(): void {
    this.createChart(this.chartRef1.nativeElement, ['Finanças', 'Clientes', 'Estoque', 'Vendas', 'Lucro']);
    this.createLineChart(this.lineChartRef.nativeElement, ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho']);
  }


  private createChart(element: any, labels: string[]): void {
    const chart = new Chart(element, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Vendas Totais',
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

  private createLineChart(element: any, labels: string[]): void {
    const lineChart = new Chart(element, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Vendas Mensais',
          data: [100, 200, 150, 250, 180, 300],
          borderColor: 'blue',
          borderWidth: 2,
        }]
      }
    });
  }

}
