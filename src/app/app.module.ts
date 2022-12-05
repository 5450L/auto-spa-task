import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfferDemoComponent } from './offer-demo/offer-demo.component';
import { OfferEditComponent } from './offer-edit/offer-edit.component';

@NgModule({
  declarations: [AppComponent, OfferDemoComponent, OfferEditComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
