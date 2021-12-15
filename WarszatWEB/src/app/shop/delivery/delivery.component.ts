import { Component } from '@angular/core';
import { SharedParameters } from '../shared/shared-parameters';

@Component({
   templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
  totalValue: number=SharedParameters.costSummary.globalTotalValue;
  transportCost: number=SharedParameters.costSummary.globalTransportCost;
  paymentCost: number=SharedParameters.costSummary.globalPaymentCost;
  sum: number=SharedParameters.costSummary.globalSum;

}