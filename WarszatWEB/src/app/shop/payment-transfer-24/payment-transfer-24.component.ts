import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   templateUrl: './payment-transfer-24.component.html',
  styleUrls: ['./payment-transfer-24.component.css']
})
export class PaymentTransfer24Component {
  
  constructor(private readonly router: Router){}

  accept(): void {
    setTimeout(()=>{ this.navigateToFinishPage(this); },30000);
  }

  navigateToFinishPage(value: any){
    this.router.navigate(['/finish-payment']);
  }
}