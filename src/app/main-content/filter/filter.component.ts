import { Component, OnInit } from '@angular/core';
import {Options} from 'ng5-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  minDuration = 50;
  maxDuration = 200;
  minDeparture = 50;
  maxDeparture = 200;
  options: Options = {
    floor: 0,
    ceil: 250,
    hideLimitLabels: true,
    hidePointerLabels: true,
    animate: false
  };
  constructor() { }

  ngOnInit(): void {
  }

}
