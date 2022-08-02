import { Component, OnInit } from '@angular/core';
import { Item, Response } from 'src/app/core/interfaces/heroes.interface';
import { HeroesService } from 'src/app/core/services/heroes.service';
import { PageService } from 'src/app/core/services/page.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {

  heroes: Item[] = [];
  loading: boolean = true;

  constructor(private heroesService: HeroesService, private pageService: PageService) { }

  ngOnInit(): void {
    this.heroesService.getAllHeroes(100).subscribe((response: Response) => {
      this.heroes = response.items;
      this.loading = false;
    });
  }

  viewHeroe(heroe: Item) {
    this.pageService.changePage(1, heroe);
  }

}
