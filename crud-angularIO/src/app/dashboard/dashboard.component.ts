import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
    ],

    //opt_firstRowIsData: true,
    options: {
      'title': 'Google Chart Pie',
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

