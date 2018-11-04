import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {

  @Input() dataDona: any;

  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  leyenda: string;

  constructor() { }

  ngOnInit() {

    this.doughnutChartLabels = this.dataDona.labels;
    this.doughnutChartData = this.dataDona.data;
    this.doughnutChartType = this.dataDona.type;

    this.leyenda = this.dataDona.leyenda;

  }

}
