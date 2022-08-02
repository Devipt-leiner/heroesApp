import { Component, OnInit } from '@angular/core';
import { Item, Response } from 'src/app/core/interfaces/heroes.interface';
import { HeroesService } from 'src/app/core/services/heroes.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {

  heroes: Item[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getAllHeroes().subscribe((response: Response) => {
      this.heroes = response.items;
    });
  }

}
