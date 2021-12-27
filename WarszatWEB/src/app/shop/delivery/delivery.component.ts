import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedParameters } from '../shared/shared-parameters';

@Component({
   templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {

  constructor(private readonly router: Router){}

  //#region Basket summary
  totalValue: number=SharedParameters.costSummary.globalTotalValue;
  transportCost: number=SharedParameters.costSummary.globalTransportCost;
  paymentCost: number=SharedParameters.costSummary.globalPaymentCost;
  sum: number=SharedParameters.costSummary.globalSum;
  //#endregion

  //#region delivery adress
  firstname: string = SharedParameters.deliveryAddress.firstname;
  lastname: string = SharedParameters.deliveryAddress.lastname;
  street: string = SharedParameters.deliveryAddress.street;
  postcode: string = SharedParameters.deliveryAddress.postcode;
  city: string = SharedParameters.deliveryAddress.city;
  email: string = SharedParameters.deliveryAddress.email;
  phone: string = SharedParameters.deliveryAddress.phone;
  addition: string = SharedParameters.deliveryAddress.addition;
  //#endregion

  nextButton(): void{
    SharedParameters.deliveryAddress = {
      firstname: this.firstname,
      lastname: this.lastname,
      street: this.street,
      postcode: this.postcode,
      city: this.city,
      email: this.email,
      phone: this.phone,
      addition: this.addition
    };
    
    this.router.navigate(['/summary']);
  }

  backButton(): void{
    SharedParameters.deliveryAddress = {
      firstname: this.firstname,
      lastname: this.lastname,
      street: this.street,
      postcode: this.postcode,
      city: this.city,
      email: this.email,
      phone: this.phone,
      addition: this.addition
    };
    
    this.router.navigate(['/basket']);
  }
}