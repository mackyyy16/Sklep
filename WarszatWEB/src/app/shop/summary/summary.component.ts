import { Component } from '@angular/core';
import { DelivaryAndPaymentCost } from '../shared/models/summary-cost';
import { SharedParameters } from '../shared/shared-parameters';

@Component({
   templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  totalValue: number=SharedParameters.costSummary.globalTotalValue;
  transportCost: number=SharedParameters.costSummary.globalTransportCost;
  paymentCost: number=SharedParameters.costSummary.globalPaymentCost;
  sum: number=SharedParameters.costSummary.globalSum;

  transport: DelivaryAndPaymentCost =SharedParameters.costSummary.transport;
  payment: DelivaryAndPaymentCost =SharedParameters.costSummary.payment;

  firstName: string = SharedParameters.deliveryAddress.firstname;
  lastname: string = SharedParameters.deliveryAddress.lastname;
  postcode: string = SharedParameters.deliveryAddress.postcode;
  phone: string = SharedParameters.deliveryAddress.phone;
  email: string = SharedParameters.deliveryAddress.email;
}