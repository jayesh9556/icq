import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  namePattern = "[a-zA-Z ]{3,30}";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  blankValidator = false;


  constructor() { }

  ngOnInit(): void {
  }




  onContactFormSubmit(form) {
    if (form.form.status == "VALID") {
      console.log(form.value)
    }
    else {
      console.log('not valid')
      this.blankValidator = true;
    }
  }



}
