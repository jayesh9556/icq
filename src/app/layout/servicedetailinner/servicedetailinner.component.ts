import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicedetailinner',
  templateUrl: './servicedetailinner.component.html',
  styleUrls: ['./servicedetailinner.component.css']
})
export class ServicedetailinnerComponent implements OnInit {

  sessions = 'add'

  constructor() { }

  ngOnInit(): void {
  }

}
