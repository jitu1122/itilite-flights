import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FilterComponent } from './main-content/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Ng5SliderModule} from 'ng5-slider';
import {MatRadioModule} from '@angular/material/radio';
import {NguCarouselModule} from '@ngu/carousel';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Ng5SliderModule,
    MatRadioModule,
    NguCarouselModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
