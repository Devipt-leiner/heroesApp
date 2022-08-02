import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { HeroesService } from './core/services/heroes.service';

import { HomePageComponent } from './pages/home-page/home-page.component';

import { DataViewComponent } from './components/data-view/data-view.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { HeroePageComponent } from './pages/heroe-page/heroe-page.component';
import { PageService } from './core/services/page.service';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeroePageComponent,
    HeaderComponent,
    DataViewComponent,
    CardComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PrimeNgModule,
  ],
  providers: [
    HeroesService,
    PageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
