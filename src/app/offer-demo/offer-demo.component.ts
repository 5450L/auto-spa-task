import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
// import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-offer-demo',
  templateUrl: './offer-demo.component.html',
  styleUrls: ['./offer-demo.component.css'],
})
export class OfferDemoComponent implements OnInit {
  @ViewChild('content')
  content!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;
  @ViewChild('downloadLink') downloadLink!: ElementRef;

  constructor() {}

  onCreateFile() {
    let content = this.content.nativeElement;
    let doc = new jsPDF('l', 'px', 'a4', true);

    html2canvas(content).then((canvas: any) => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'marble-diagram.png';
      this.downloadLink.nativeElement.click();

      doc.addImage('marble-diagram.png', 'png', 10, 78, 12, 15);
      doc.save();
    });

    // doc.html(content, {
    //   html2canvas: {
    //     scale: 0.45,
    //   },
    //   callback: function (doc) {
    //     doc.save();
    //   },
    // });

    // doc.html(content, {
    //   callback: function (doc) {
    //     doc.save('test.pdf');
    //   },
    // });
  }

  ngOnInit(): void {}
}
