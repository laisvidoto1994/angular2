import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import * as Chart from 'chart.js';

import { CrudService } from "../../crud.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  produtos: any = [];
  menssagem: any = [];
  dataTable: any = [];
  validaPieChart1: boolean;

  testa = 9;

  BarChart: any;

  constructor(public crudService: CrudService) { }

  ngOnInit() {
    this.getClients();
    this.getMessage();

    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: "# of values",
          data: [this.testa, 7, 3, 5, 2, 10],
          backgroundColor: [
            'rgba(255,99,132,0.2)',
            'rgba(54,162,235,0.2)',
            'rgba(255,206,86,0.2)',
            'rgba(75,192,192,0.2)',
            'rgba(153,102,255,0.2)',
            'rgba(255,159,64,0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54,162,235,1)',
            'rgba(255,206,86,1)',
            'rgba(75,192,192,1)',
            'rgba(153,102,255,1)',
            'rgba(255,159,64,1)',
          ],
          borderWidth: 1,
        }]
      },
      options: {
        title: {
          text: "bar",
          display: true
        },
        legend: {
          position: 'left',
          textStyle: {
            color: 'black',
            fontSize: 15
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

  }

  formatacaoDataHora() {
    return new Date();
  }

  /* Mostra TODOS os dados do json */
  getClients() {

    this.crudService
      .read().subscribe(
        data => {
          this.produtos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  /* Mostra TODOS os dados do json de menssagem */
  getMessage() {

    this.crudService
      .read2().subscribe(
        data => {
          this.menssagem = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  /* Grafico PieChart */
  public pieChart1: GoogleChartInterface = {
  
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'valor1'],
      ['Work', this.produtos[0].id],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
    ],

    options: {
      'title': 'Google Chart Pie',
      colors: ['#93bfa3', '#f2b680', '#f29999', '#737373', '#93bfa3'],
      legend: {
        position: 'left',
        textStyle: {
          color: 'black',
          fontSize: 15
        }
      },
      backgroundColor: {
        fill: '#f2efc4',
        fillOpacity: 0.3
      },
      is3D: true,
    },
  };

  /* Grafico BarChart */
  public pieChart2: GoogleChartInterface = {

    chartType: 'BarChart',
    dataTable: [
      ['Task', 'valor1', 'valor2'],
      ['Work', 11, 3],
      ['Eat', 2, 1],
      ['Commute', 2, 3],
      ['Watch TV', 2, 1]
    ],

    //opt_firstRowIsData: true,
    options: {
      'title': 'Google Chart bar',
      colors: ['#93bfa3', '#f2b680', '#f29999', '#737373'],
      legend: {
        position: 'left',
        textStyle: {
          color: 'black',
          fontSize: 15
        }
      },
      backgroundColor: {
        fill: '#f2efc4',
        fillOpacity: 0.3
      },
      is3D: false,
    },
  };

  /* Grafico Table */
  public pieChart3: GoogleChartInterface = {

    chartType: 'Table',
    dataTable: [
      ['Department', 'Revenues', 'Another column', 'ColorFormat'],
      ['Shoes', 10700, -100, 100],
      ['Sports', -15400, 25, 500],
      ['Toys', 12500, 40, 800],
      ['Electronics', -2100, 889, 1000],
      ['Food', 22600, 78, 1100],
      ['Art', 1100, 42, 400]
    ],

    options: {
      'title': 'Google Chart Table',
      colors: ['#93bfa3', '#f2b680', '#f29999', '#737373'],
      legend: {
        position: 'left',
        textStyle: {
          color: 'black',
          fontSize: 15
        }
      },
      allowHtml: true,
      formatters: [
        {
          columns: [1, 2],
          type: 'NumberFormat',
          options: {
            prefix: '&euro;', negativeColor: 'red', negativeParens: true
          }
        },
        {
          columns: [3],
          type: 'ColorFormat',
          options: {
            ranges: [
              { from: 100, to: 900, fromBgColor: 'green', toBgColor: 'yellow' }
            ]
          }
        }
      ],
      backgroundColor: {
        fill: '#f2efc4',
        fillOpacity: 0.3
      },
      is3D: false,
    },
  };

  /* Grafico ColumnChart */
  public pieChart4: GoogleChartInterface = {

    chartType: 'ColumnChart',
    dataTable: [
      ['Task', 'valor1', 'valor2'],
      ['Work', 11, 3],
      ['Eat', 2, 1],
      ['Commute', 2, 3],
      ['Watch TV', 2, 1]
    ],

    //opt_firstRowIsData: true,
    options: {
      'title': 'Google Chart Column',
      colors: ['#93bfa3', '#f2b680', '#f29999', '#737373'],
      legend: {
        position: 'left',
        textStyle: {
          color: 'black',
          fontSize: 15
        }
      },
      backgroundColor: {
        fill: '#f2efc4',
        fillOpacity: 0.3
      },
      is3D: false,
    },
  };



}

