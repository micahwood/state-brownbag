import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoxComponent } from './box/box.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [AppComponent, BoxComponent, FavoritesComponent, DetailComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatExpansionModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
