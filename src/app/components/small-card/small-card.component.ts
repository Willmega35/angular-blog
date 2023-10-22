import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:string = "https://nosbastidores.com.br/wp-content/uploads/2021/08/Series-Marvel-Disney-Plus-1024x576-1.jpg"
  @Input()
  cardTitle:string = "NOVA SÉRIE ANUNCIADA"
  @Input()
  Id:string = "0";

  constructor() { }

  ngOnInit(): void {
  }

}
