import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() heroeName!: string;
  @Input() publisher!: string;
  @Input() heroeImage!: string;
  @Input() gender!: string;
  @Input() height!: string;
  @Input() weight!: string;
  @Input() hairColor!: string;

  constructor() { }

  ngOnInit() {
  }

}
