import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string = "https://picsum.photos/seed/picsum/200/300"
  @Input()
  cardTitle:string = "Saiu a nova versão do angular"
  @Input()
  Id:string = "0"
  constructor() { }

  ngOnInit(): void {
  }

}
