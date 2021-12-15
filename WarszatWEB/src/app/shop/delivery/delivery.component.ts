import { Component } from '@angular/core';
import { SharedParameters } from '../shared/shared-parameters';

@Component({
   templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
  totalValue: number=SharedParameters.totalValue;

  constructor(){
    
  }
}