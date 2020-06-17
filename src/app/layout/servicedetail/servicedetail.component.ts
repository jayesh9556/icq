import { Component, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { trigger, style, animate, transition } from "@angular/animations";
import { NguCarousel, NguCarouselConfig } from "@ngu/carousel";
import categoryDetail from "../../resources/categoryDetail.json";

@Component({
  selector: "app-servicedetail",
  templateUrl: "./servicedetail.component.html",
  styleUrls: ["./servicedetail.component.css"],
  animations: [
    trigger("fade", [
      transition("void => *", [
        style({ opacity: 0 }),
        animate(200, style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class ServicedetailComponent implements OnInit {
  public categorys: {
    category_img: string;
    category_titel: string;
  }[] = categoryDetail;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  commonModel: boolean = false;
  name = "Angular";
  slideNo = 0;
  withAnim = true;
  resetAnim = true;
  treatment = false;
  professionals = false;
  estimation = false;

  @ViewChild("myCarousel", { static: false }) myCarousel: NguCarousel<any>;

  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 3, md: 4, lg: 4, all: 0 },
    load: 1,
    interval: { timing: 4000, initialDelay: 3000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };

  modelclose() {
    this.commonModel = false;
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }

  treatmentInput() {
    this.commonModel = true;
    this.treatment = true;
    this.professionals = false;
    this.estimation = false;
  }

  treatmentOnSubmit() {
    this.treatment = false;
    this.professionals = true;
  }
  backToTreatment() {
    this.treatment = true;
    this.professionals = false;
  }
  bookAppointment() {
    this.treatment = false;
    this.professionals = false;
    this.estimation = true;
  }
  backToProfessionals() {
    this.treatment = false;
    this.estimation = false;
    this.professionals = true;
  }

}
