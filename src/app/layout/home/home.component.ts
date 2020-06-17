import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from "@angular/core";
import { NguCarousel, NguCarouselConfig } from "@ngu/carousel";

import { trigger, style, animate, transition } from "@angular/animations";

import servicesArray from "../../resources/service.json";
import categorysArray from "../../resources/category.json";
import countriesArray from "../../resources/countries.json";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    trigger("fade", [
      transition("void => *", [
        style({ opacity: 0 }),
        animate(200, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
  public services: {
    service_img: string;
    service_titel: string;
  }[] = servicesArray;

  public categorys: {
    category_img: string;
    category_titel: string;
  }[] = categorysArray;

  public countries: {
    countries_img: string;
    countries_number: string;
    countries_titel: string;
  }[] = countriesArray;

  commonModel: boolean = false;
  name = "Angular";
  slideNo = 0;
  withAnim = true;
  resetAnim = true;
  counto;
  counto1;
  counto2;
  selectedCountrieCode = "+44";
  selectedCountrieimg = "assets/img/london.jpg";

  @ViewChild("myCarousel", { static: false }) myCarousel: NguCarousel<any>;

  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 3, md: 4, lg: 4, all: 0 },
    load: 1,
    interval: { timing: 4000, initialDelay: 3000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };

  constructor(private cdr: ChangeDetectorRef) { }

  onCountoEnd() { }

  selectedCountrie(countrie) {
    this.selectedCountrieCode = countrie.countries_number;
    this.selectedCountrieimg = countrie.countries_img;
    this.commonModel = false;
  }

  ngOnInit() { }

  modelopen() {
    this.commonModel = true;
  }
  modelclose() {
    this.commonModel = false;
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }
}
