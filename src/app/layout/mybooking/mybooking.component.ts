import { Component, OnInit } from '@angular/core';
import { slideInOut } from '../shared/animations/animations';

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css'],
  animations: [slideInOut]
})
export class MybookingComponent implements OnInit {


  tab1;
  tab2;
  tab = 'tab1'

  constructor() { }

  ngOnInit(): void {
  }

  booking_triger(tabTriger: any) {
    this.tab = tabTriger
  }

}
