import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.css']
})
export class DeliveryAddressComponent implements OnInit {

  isAddressForm = false;
  constructor() { }

  ngOnInit(): void {
  }


  addNewAddress() {
    this.isAddressForm = !this.isAddressForm
  }

}
