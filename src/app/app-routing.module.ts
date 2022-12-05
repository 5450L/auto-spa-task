import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferDemoComponent } from './offer-demo/offer-demo.component';
import { OfferEditComponent } from './offer-edit/offer-edit.component';

const routes: Routes = [
  { path: '', component: OfferEditComponent },
  { path: 'demo', component: OfferDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
