import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private page = new BehaviorSubject<number>(0);
  private heroe = new BehaviorSubject<any>(null);

  constructor() { }

  public currentPage = this.page.asObservable();
  public heroeToView = this.heroe.asObservable();

  public changePage(value: number, heroe?: Item): void {
    this.page.next(value);
    this.heroe.next(heroe);
  }

}
