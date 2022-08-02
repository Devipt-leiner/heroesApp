import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from './core/interfaces/heroes.interface';
import { PageService } from './core/services/page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'heroesApp';
  pageOption: number = 0;
  heroe!: Item;

  constructor(private pageService: PageService) {}

  ngOnInit(): void {
    this.pageService.currentPage.subscribe(value => {
      this.pageOption = value;
    });
    this.pageService.heroeToView.subscribe(heroe => {
      this.heroe = heroe;
    });
  }
}
