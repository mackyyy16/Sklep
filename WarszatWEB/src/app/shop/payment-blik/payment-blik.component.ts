import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedParameters } from '../shared/shared-parameters';

@Component({
  templateUrl: './payment-blik.component.html',
  styleUrls: ['./payment-blik.component.css']
})
export class PaymentBlikComponent {
  price: number = SharedParameters.costSummary.globalSum;
  blikNumber: number;

  constructor(private readonly router: Router){}

  acceptBlik(): void {
    setTimeout(()=>{ this.navigateToFinishPage(this); },5000);
  }

  navigateToFinishPage(value: any){
    this.router.navigate(['/finish-payment']);
  }
}