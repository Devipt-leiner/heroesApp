import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private URL: string = 'https://ea1w717ym2.execute-api.us-east-1.amazonaws.com';

  constructor(private http: HttpClient) {}

  getAllHeroes(size: number): Observable<Response> {
    const URL = `${this.URL}/api/heroes?size=${size}`;
    return this.http.get<Response>(URL);
  }
}
