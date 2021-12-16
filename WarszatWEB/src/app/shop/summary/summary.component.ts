import { Component } from '@angular/core';
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
}