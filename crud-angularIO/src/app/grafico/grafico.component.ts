import { Component, OnInit } from "@angular/core";
import * as Chart from "chart.js";
import { GoogleChartInterface } from "ng2-google-charts/google-charts-interfaces";
import { CrudService } from "../../crud.service";
@Component({
  selector: "app-grafico",
  templateUrl: "./grafico.component.html",
  styleUrls: ["./grafico.component.css"],
})
export class GraficoComponent implements OnInit {
  produtos: any = [];
  BarChart: any;

  backgroundColorChart: any = [
    "rgba(255,99,132,0.2)",
    "rgba(54,162,235,0.2)",
    "rgba(255,206,86,0.2)",
    "rgba(75,192,192,0.2)",
    "rgba(153,102,255,0.2)",
    "rgba(255,159,64,0.2)",
  ];
  borderColorChart: any = [
    "rgba(255,99,132,1)",
    "rgba(54,162,235,1)",
    "rgba(255,206,86,1)",
    "rgba(75,192,192,1)",
    "rgba(153,102,255,1)",
    "rgba(255,159,64,1)",
  ];

   contHotels = 0;
   contflet = 0;

  constructor(public crudService: CrudService) {}

  ngOnInit() {
    this.carregarProdutos();
  }

  formatacaoDataHora() {
    return new Date();
  }

  /* Mostra TODOS os dados do json */
  carregarProdutos() {
    this.crudService.read().subscribe(
      (data) => {
        this.produtos = data;

        for (let index = 0; index < this.produtos.length; index++) {
          const element = this.produtos[index];
          if (element.tipo == "Flet") {
            this.contflet++;
          } else if (element.tipo == "Hotel") {
            this.contHotels++;
          }
        }

        this.carregamentoGraficoTipoDoughnut(this.contflet, this.contHotels);
        this.carregamentoGraficoTipoPie(this.contflet, this.contHotels);
        this.carregamentoGraficoTipoBar(this.contflet, this.contHotels);
        this.carregamentoGraficoTipoLine(this.contflet, this.contHotels);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /* Doughnut */
  carregamentoGraficoTipoDoughnut(contflet, contHotels) {
    this.BarChart = new Chart("chartDoughnut", {
      type: "doughnut",
      data: {
        labels: ["Flet", "Hotel"],
        datasets: [
          {
            data: [contflet, contHotels],
            backgroundColor: this.backgroundColorChart,
            borderColor: this.borderColorChart, //A cor da linha.
            borderWidth: 1, //A largura da linha em pixels.
          },
        ],
      },

      options: {
        title: {
          text: "Doughnut",
          display: true,
        },
        legend: {
          display: true,
        },
      },
    });
  }

  /* Pie */
  carregamentoGraficoTipoPie(contflet, contHotels) {
    this.BarChart = new Chart("chartPie", {
      type: "pie",
      data: {
        labels: ["Flet", "Hotel"],
        datasets: [
          {
            label: "Red",
            data: [contflet, contHotels],
            backgroundColor: this.backgroundColorChart,
            borderColor: this.borderColorChart,
            borderWidth: 1,
          },
        ],
      },

      options: {
        title: {
          text: "Pie",
          display: true,
        },
        legend: {
          display: true,
        },
      },
    });
  }

  /* Bar */
  carregamentoGraficoTipoBar(contflet, contHotels){
    this.BarChart = new Chart("chartBar", {
      type: "bar",
      data: {
        labels: ["Flet", "Hotel"],
        datasets: [
          {
            label: "Flet",
            data: [contflet, contHotels],
            backgroundColor: this.backgroundColorChart,
            borderColor: this.borderColorChart,
            borderWidth: 1,
          },
        ],
      },

      options: {
        title: {
          text: "Bar",
          display: true,
        },
        legend: {
          display: true,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

  /* line */
  carregamentoGraficoTipoLine(contflet, contHotels){
    this.BarChart = new Chart("chartLine", {
      type: "line",
      data: {
        labels: ["Flet", "Hotel"],
        datasets: [
          {
            label: "Hotel x Flet",
            data: [contflet, contHotels],
            backgroundColor: this.backgroundColorChart,
            borderColor: this.borderColorChart,
            borderWidth: 1,
          },
        ],
      },

      options: {
        title: {
          text: "Line",
          display: true,
        },
        legend: {
          display: true,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
