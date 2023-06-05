import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = "Angular spa"
  @Input()
  cardDescription:string = "Lorem ipsum dolor sit amet, co."

  constructor() { }

  ngOnInit(): void {
  }

}
