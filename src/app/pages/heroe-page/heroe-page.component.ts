import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/core/interfaces/heroes.interface';
import { PageService } from 'src/app/core/services/page.service';

@Component({
  selector: 'app-heroe-page',
  templateUrl: './heroe-page.component.html',
  styleUrls: ['./heroe-page.component.css']
})
export class HeroePageComponent implements OnInit {

  @Input() heroe!: Item;

  displayPosition: boolean = false;

  constructor(private pageService: PageService) { }

  ngOnInit() {
  }

  back() {
    this.pageService.changePage(0);
  }

  viewStats() {
    this.displayPosition = true;
  }

}
