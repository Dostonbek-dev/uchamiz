import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {AdwapComponent} from "./adwap/adwap.component";
import {FormInputComponent} from "./form-input/form-input.component";
import {YurComponent} from "./yur/yur.component";
import {JisComponent} from "./jis/jis.component";
import {FizyurComponent} from "./model/fizyur/fizyur.component";
import {AdminAdwComponent} from "./admin-adw/admin-adw.component";
import {AdminpageComponent} from "./info-section/adminpage/adminpage.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {BannerComponent} from "./banner/banner.component";
import {InfoSectionComponent} from "./info-section/info-section.component";
import {AboutPageComponent} from "./about-page/about-page.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FodalanishShartlariComponent} from "./fodalanish-shartlari/fodalanish-shartlari.component";
const routes: Routes = [
  {
    path: '',
    component: AdwapComponent
  },
  {
    path: 'adwap',
    component: AdwapComponent
  },
  {
    path: 'conditions',
    component: FodalanishShartlariComponent
  },
  {
    path: 'sent-data',
    component: FormInputComponent
  },
  {
    path: 'yur',
    component: YurComponent
  },
  {
    path: 'jis',
    component: JisComponent
  },
  {
    path: 'fizyur',
    component: FizyurComponent
  },
  {
    path: 'admin-adw',
    component: AdminAdwComponent
  },
  {
    path: 'admin',
    component: AdminpageComponent
  },

  {
    path: '**',
    component: PageNotFoundComponent
  },


];

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    FooterComponent,
    LandingPageComponent,
    AboutPageComponent,
    InfoSectionComponent,
    BannerComponent,
    AdwapComponent,
    FormInputComponent,
    FodalanishShartlariComponent,
    FizyurComponent,
    YurComponent,
    JisComponent,
    AdminpageComponent,
    AdminAdwComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
