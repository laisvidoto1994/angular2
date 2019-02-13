import { Component, OnInit } from '@angular/core';

import * as Chart from 'chart.js';

import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';

import { CrudService } from "../../crud.service";

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  produtos: any = [];
  BarChart: any;

  backgroundColorChart: any = ['rgba(255,99,132,0.2)', 'rgba(54,162,235,0.2)', 'rgba(255,206,86,0.2)', 'rgba(75,192,192,0.2)', 'rgba(153,102,255,0.2)', 'rgba(255,159,64,0.2)',];
  borderColorChart: any = ['rgba(255,99,132,1)', 'rgba(54,162,235,1)', 'rgba(255,206,86,1)', 'rgba(75,192,192,1)', 'rgba(153,102,255,1)', 'rgba(255,159,64,1)',];

  constructor(public crudService: CrudService) { }

  ngOnInit() {
    this.getClients();
  }


  /* Mostra TODOS os dados do json */
  getClients() {

    this.crudService
      .read().subscribe(
        data => {
          this.produtos = data;
          var contHotels = 0;
          var contflet = 0;

          for (let index = 0; index < this.produtos.length; index++) {
            const element = this.produtos[index];
            if (element.tipo == 'flet') {
              console.log(element);
              contflet++;
            }
            else if (element.tipo == 'hotel') {
              contHotels++;
            }
          }



          /* chartDoughnut */
          this.BarChart = new Chart('chartDoughnut', {
            type: 'doughnut',
            data: {
              labels: [
                "flet", "hotel"
              ],
              datasets: [{
                data: [
                  contflet, contHotels
                ],
                backgroundColor: this.backgroundColorChart,
                borderColor: this.borderColorChart,//A cor da linha.
                borderWidth: 1, //A largura da linha em pixels.
              }]
            },

            options: {
              title: {
                text: "doughnut",
                display: true
              },
              legend: {
                display: true,
              },
            }
          });


          /* chartPie */
          this.BarChart = new Chart('chartPie', {
            type: 'pie',
            data: {
              labels: ["flet", "hotel"],
              datasets: [{
                label: "Red",
                data: [
                  contflet, contHotels
                ],
                backgroundColor: this.backgroundColorChart,
                borderColor: this.borderColorChart,
                borderWidth: 1,
              }]
            },

            options: {
              title: {
                text: "bar",
                display: true
              },
              legend: {
                display: true,
              }
            }
          });




          /* chartBar */
          this.BarChart = new Chart('chartBar', {
            type: 'bar',
            data: {
              labels: ["flet", "hotel"],
              datasets: [{
                label: "Red",
                data: [
                  contflet, contHotels
                ],
                backgroundColor: this.backgroundColorChart,
                borderColor: this.borderColorChart,
                borderWidth: 1,
              }]
            },

            options: {
              title: {
                text: "bar",
                display: true
              },
              legend: {
                display: true,
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



          /* chartBar */
          this.BarChart = new Chart('chartLine', {
            type: 'line',
            data: {
              labels: ["flet", "hotel"],
              datasets: [{
                label: "Red",
                data: [
                  contflet, contHotels
                ],
                backgroundColor: this.backgroundColorChart,
                borderColor: this.borderColorChart,
                borderWidth: 1,
              }]
            },

            options: {
              title: {
                text: "bar",
                display: true
              },
              legend: {
                display: true,
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





        },
        error => {
          console.log(error);
        }
      );
  }


  formatacaoDataHora() {
    return new Date();
  }


}
