import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'details-component',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  teste(dados) {
    console.log(dados);
  }



}
