import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   templateUrl: './payment-transfer.component.html',
  styleUrls: ['./payment-transfer.component.css']
})
export class PaymentTransferComponent {
  //Symulacja ze po 1min ktos zrobil przelew sam
  //bez symulacji wlasciciel strony musi sprzwdzic
  //przelew ktory mu przyszedl na konto, ktore zamowienia oplaca
  //np na podstawie id zamowienia ktore jest w tytule przelewu
  //lub mozna bez timer'a i zakonczyc ta strona 

  constructor(private readonly router: Router){}

  acceptBlik(): void {
    setTimeout(()=>{ this.navigateToFinishPage(this); },60000);
  }

  navigateToFinishPage(value: any){
    this.router.navigate(['/finish-payment']);
  }
}