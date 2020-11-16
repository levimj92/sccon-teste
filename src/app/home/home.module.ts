import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule
  ]
})
export class HomeModule {
}
