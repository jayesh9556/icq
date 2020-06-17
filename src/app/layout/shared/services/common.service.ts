import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CommonService implements OnInit {


  // baseurl: string = environment.baseurl;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    // console.log(this.baseurl)
  }



  // test: any;
  // onRegistrationSubmit(mobileNumber: number) {
  //   console.log('CommonService', mobileNumber)
  //   this.http.post().subscribe(
  //     result => {
  //       this.test = result
  //     },
  //     error => {
  //       this.test = error
  //     })
  // }

  // result: any
  // error: any

  // onRegistrationOtpFormSubmit(otp: number) {
  //   this.http.post('http://173.249.50.111:5151/auth/CustomerSendOTP', otp).subscribe(
  //     res => {
  //       this.result = res;
  //       console.log('result arrey', this.result)
  //     },
  //     res => {
  //       this.error = res;
  //       console.log('error arrey', this.error)
  //     }
  //   )
  // }


}
