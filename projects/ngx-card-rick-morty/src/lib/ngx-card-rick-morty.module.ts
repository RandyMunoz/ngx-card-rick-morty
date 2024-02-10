import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { CommonModule } from '@angular/common';
import { CardRickMortyComponent } from './card-rick-morty/card-rick-morty.component';
import { CardProfileComponent } from './card-profile/card-profile.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { CardSummaryComponent } from './card-summary/card-summary.component';


@NgModule({
  declarations: [
    CardRickMortyComponent,
    CardProfileComponent,
    CardSummaryComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgOptimizedImage,
    ButtonModule,
    CardModule,
    DialogModule,
    DividerModule,
    CommonModule
  ],
  exports: [
    CardRickMortyComponent
  ]
})
export class NgxCardRickMortyModule { }
