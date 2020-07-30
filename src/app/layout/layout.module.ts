import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { LayoutRoutingModule } from "./layout-routing.module";
import { HomeComponent } from "./home/home.component";
import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from "./common/header/header.component";
import { FooterComponent } from "./common/footer/footer.component";

import { CountoModule } from "angular2-counto";
import { NguCarouselModule } from "@ngu/carousel";
import { AboutComponent } from "./about/about.component";
import { ServicedetailComponent } from "./servicedetail/servicedetail.component";
import { MybookingComponent } from './mybooking/mybooking.component';
import { ContactComponent } from './contact/contact.component';
import { TermsComponent } from './terms/terms.component';
import { PolicyComponent } from './policy/policy.component';
import { BlogComponent } from './blog/blog.component';
import { CommonService } from './shared/services/common.service';
import { ServicedetailinnerComponent } from './servicedetailinner/servicedetailinner.component';
import { DeliveryAddressComponent } from './delivery-address/delivery-address.component';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ServicedetailComponent,
    MybookingComponent,
    ContactComponent,
    TermsComponent,
    PolicyComponent,
    BlogComponent,
    ServicedetailinnerComponent,
    DeliveryAddressComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NguCarouselModule,
    CountoModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule,
    ReactiveFormsModule
  ],
  providers: [
    CommonService
  ]
})
export class LayoutModule { }
