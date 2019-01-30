import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'details-component',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) {

    console.log(route.snapshot.params);
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
  }

  teste(dados) {
    console.log(dados);
  }



}
