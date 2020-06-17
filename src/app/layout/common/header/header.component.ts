import { Component, OnInit, ViewChild, ElementRef, NgZone } from "@angular/core";
import { fade, slideInOut } from '../../shared/animations/animations';
import { CommonService } from '../../shared/services/common.service';
import { HttpClient } from '@angular/common/http';
import { MapsAPILoader, MouseEvent } from '@agm/core';


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  animations: [fade, slideInOut]
})
export class HeaderComponent implements OnInit {
  isUserRegister = true;
  isMyBooking = false;
  isSubmenu = '';
  menuopen: boolean = false;
  commonModel: boolean = false;
  registrationForm: boolean = true;
  registrationOtpForm: boolean = false;
  geolocation: boolean = false;
  geolocationSearch = false
  geolocationImg = true
  geolocationlist = false
  geolocationformblock = false
  mobileNumber: number
  mobNumberPattern = "^[0-9]{10}$";
  otpPattern = "^[0-9]{4}$";
  otpInput;
  otpReceved: any
  otpRecevedError: any
  otpMatch = false;
  isTimeLeft = true;
  timeLeft: number = 30;
  interval;
  isResendOtp = false;



  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;

  lat
  lng
  locationstring: string = 'no location set'
  resultttt
  errorrrrr


  @ViewChild('search')
  public searchElementRef: ElementRef;


  recevedlocation: any;

  google: any;




  constructor(public commonService: CommonService, private http: HttpClient, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }




  // getlocationstring(){

  //   const KEY = "AIzaSyCt-yC0yQ65p7K6TOLivxj8YCpPu8r1H7Q"; 
  //   const LAT = 50.1; 
  //   const LNG = -97.3; 
  //    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${LAT},${LNG}&key=${KEY}`; 
  //  fetch(url) 
  //     .then(response => response.json()) 
  //     .then(data => { 
  //       console.log(data); 
  //       }); 
  //     // .catch(err => console.warn(err.message)); 



  // // this.lat = this.latitude
  // // this.lng = this.longitude

  // //     console.log(this.lat,this.lng)

  // //    this.http.get("https://api.mapbox.com/geocoding/v5/mapbox.places/-122.463%2C%2037.7648.json?access_token=YOUR_MAPBOX_ACCESS_TOKEN").subscribe(
  // //      res => {
  // //        this.resultttt = res
  // //        console.log(this.resultttt,'resulllt')
  // //      },
  // //      err => {
  // //       this.errorrrrr = err
  // //       console.log(this.errorrrrr,'eroooorr')
  // //      }
  // //    )

  // }


  ngOnInit() {





    // //load Places Autocomplete
    // this.mapsAPILoader.load().then(() => {
    //   this.setCurrentLocation();
    //   this.geoCoder = new google.maps.Geocoder;

    //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
    //   autocomplete.addListener("place_changed", () => {
    //     this.ngZone.run(() => {
    //       //get the place result
    //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();

    //       //verify result
    //       if (place.geometry === undefined || place.geometry === null) {
    //         return;
    //       }

    //       //set latitude, longitude and zoom
    //       this.latitude = place.geometry.location.lat();
    //       this.longitude = place.geometry.location.lng();
    //       this.zoom = 12;
    //     });
    //   });
    // });



  }

  // // Get Current Location Coordinates
  // private setCurrentLocation() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 8;
  //       this.getAddress(this.latitude, this.longitude);
  //     });
  //   }
  // }


  // markerDragEnd($event: MouseEvent) {
  //   console.log($event);
  //   this.latitude = $event.coords.lat;
  //   this.longitude = $event.coords.lng;
  //   this.getAddress(this.latitude, this.longitude);
  // }

  // getAddress(latitude, longitude) {
  //   this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
  //     console.log(results);
  //     console.log(status);
  //     if (status === 'OK') {
  //       if (results[0]) {
  //         this.zoom = 12;
  //         this.address = results[0].formatted_address;
  //       } else {
  //         window.alert('No results found');
  //       }
  //     } else {
  //       // window.alert('Geocoder failed due to: ' + status);
  //     }

  //   });
  // }


  

  // ==========mobile-menu-start=========

  subMenuToggle(subMenuToggle:any){
    if(this.isSubmenu == subMenuToggle ){
      this.isSubmenu = '';
    }
    else {
      this.isSubmenu = subMenuToggle;
    }
    
  }


  // ==========mobile-menu-end=========


  // ==========model-start=========

  mobilemenu() {
    if (this.menuopen == true) {
      this.menuopen = false;
    } else {
      this.menuopen = true;
    }
  }
  menuclose() {
    this.menuopen = false;
  }
  modelopen() {
    this.commonModel = true;
  }
  modelclose() {
    this.commonModel = false;
  }

  // ==========model-end=========


  // ===========registrationForm-start==========



  onregistrationSubmit(form) {
    this.mobileNumber = form.form.controls.mobileNumber.value;

    if (form.form.status == "VALID") {
      this.http.post('http://173.249.50.111:5151/auth/CustomerSendOTP?mobileNo=mobileNumber', '').subscribe(
        res => {
          this.otpReceved = res;
          console.log('otpReceved', this.otpReceved)
        },
        err => {
          this.otpRecevedError = err;
          console.log('otpRecevedError', this.otpRecevedError)
        }
      )

      this.registrationForm = false;
      this.registrationOtpForm = true;
      this.startTimer()
      this.timeLeft = 30;
    }

  }


  // ===========registrationForm-end==========


  // ============registration-Otp-Form-start============

  onregistrationOtpFormSubmit(form) {
    // this.otpInput = form.form.controls.otp.value;

    // if (form.form.status == "VALID" && this.otpReceved == this.otpInput) {
    //   this.registrationOtpForm = false;
    //   this.geolocation = true;
    //   this.otpMatch = false;
    //   this.isUserRegister = false;
    //   this.isMyBooking = true;
    // }

    // else if (form.form.status == "VALID" && this.otpReceved !== this.otpInput) {
    //   this.otpMatch = true;
    //   setTimeout(() => {
    //     this.otpMatch = false;
    //   }, 3000);
    // }


    this.registrationOtpForm = false;
    this.geolocation = true;
    this.otpMatch = false;
    this.isUserRegister = false;
    this.isMyBooking = true;

  }



  startTimer() {
    this.interval = setInterval(
      () => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.isTimeLeft = false;
          this.isResendOtp = true;
        }
      }, 1000)
  }

  stoptimer() {
    clearInterval(this.interval);
  }


  registrationNumberEdit() {
    this.stoptimer()
    this.registrationOtpForm = false;
    this.registrationForm = true;
  }


  resendOtp() {


  }

  // ============registration-Otp-Form-end============




  // ============geolocation-start============

  backToOtpForm() {
    this.geolocation = false;
    this.registrationOtpForm = true;
  }

  currentGeoLocationSearch() {

  }

  otherGeoLocationSearch() {
    this.geolocation = false;
    this.geolocationSearch = true
  }

  // ============geolocation-end============



  // ===========geolocationSearch-start============



  enterCustomeLocation() {
    this.geolocationImg = false
    this.geolocationlist = true
  }

  backToGeolocation() {
    this.geolocationSearch = false
    this.geolocation = true
  }



  // ===========geolocationSearch-end============




  //  ============== geo-location-form-start ================ 
  geolocationforminput() {
    this.geolocationSearch = false
    this.geolocationformblock = true
  }
  backTogeolocationSearch() {
    this.geolocationformblock = false
    this.geolocationSearch = true
  }


  geolocationonFormSubmit() { }
  //  ============== geo-location-form-end ================ 




}

