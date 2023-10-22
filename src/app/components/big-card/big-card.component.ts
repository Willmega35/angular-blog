import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string = "";
  @Input()
  cardTitle:string = "";
  // cardCategory:string = "";
  @Input()
  cardCategorys = {
    ktr1: "Filmes",
    ktr2: "Ação",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
