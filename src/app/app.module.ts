import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomesliderComponent } from './Components/homesliders/homeslider.component';
import { OurHomeservicesComponent } from './Components/our-homeservices/our-homeservices.component';
import { OurHomeworkComponent } from './Components/our-homework/our-homework.component';
import { HomeTestimonialsComponent } from './Components/home-testimonials/home-testimonials.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomesliderComponent,
    OurHomeservicesComponent,
    OurHomeworkComponent,
    HomeTestimonialsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
