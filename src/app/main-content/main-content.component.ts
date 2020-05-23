import {Component, OnInit} from '@angular/core';
import {flights} from '../flights.data';
import {NguCarouselConfig} from '@ngu/carousel';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  flights = flights;
  public carouselTileItems = [1, 2, 3, 4, 5];
  public carouselTile: NguCarouselConfig = {
    grid: {xs: 1, sm: 2, md: 3, lg: 4, all: 0},
    slide: 1,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: false,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
