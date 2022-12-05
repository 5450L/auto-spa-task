import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.css'],
})
export class OfferEditComponent implements OnInit {
  invoiceForm: FormGroup = new FormGroup({});

  customer: FormGroup = new FormGroup({
    fullName: new FormGroup({
      surname: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      patr: new FormControl(null, Validators.required),
    }),
    phone: new FormControl(null, Validators.required),
    adress: new FormControl(null, Validators.required),
    postBranch: new FormControl(null, Validators.required),
  });

  productOffers = new FormArray(<never>[]);

  constructor() {}

  
  onCreateOffer() {
    console.log(this.invoiceForm.value);
  }
  
  onAddProduct() {
    let productOffer: FormGroup = new FormGroup({
      productName: new FormControl(null, Validators.required),
      productAmount: new FormControl(null, Validators.required),
    });
    this.productOffers.push(productOffer);
    console.log(this.productOffers);
  }
  onDeleteProduct(index: number) {
    this.productOffers.removeAt(index);
  }
  
  ngOnInit(): void {
    this.invoiceForm = new FormGroup({
      customer: this.customer,
      productOffers: this.productOffers,
    });
    console.log(this.invoiceForm.value);
  }
}
