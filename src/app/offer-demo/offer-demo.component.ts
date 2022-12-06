import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { ProductOffer } from '../models/product-offer.model';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-offer-demo',
  templateUrl: './offer-demo.component.html',
  styleUrls: ['./offer-demo.component.css'],
})
export class OfferDemoComponent implements OnInit {
  @ViewChild('content')
  content!: ElementRef;

  products: ProductOffer[] = [];

  constructor(private dataService: DataService) {}

  onCreateFile() {
    let content = document.getElementById('content') || new HTMLElement();

    html2canvas(content).then((canvas: any) => {
      let imgWidth = 208;
      let pageHeight = 295;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let imgData = canvas.toDataURL('image/png');
      let doc = new jsPDF('p', 'mm', 'a4');

      let position = 0;

      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      doc.save('MYPdf.pdf');
    });
  }

  ngOnInit(): void {
    this.products = this.dataService.getProducts();
  }
}
