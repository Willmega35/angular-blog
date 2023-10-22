import { ActivatedRoute, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { dataFake } from "../../data/dataFake";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "";
  contentTitle:string ="";
  contentDescription:string ="";

  private id:string | null = ""

  constructor(
    private route:ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get("id"))

    this.setValueToComponent(this.id)
  }

  setValueToComponent(id:string | null){
    const result =  dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title,
    this.contentDescription = result.description,
    this.photoCover = result.photo

  }

}
