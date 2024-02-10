import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxCardRickMortyModule } from 'ngx-card-rick-morty';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCardRickMortyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
