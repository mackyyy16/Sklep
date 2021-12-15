import { Component, OnDestroy } from '@angular/core';
import { SharedParameters } from 'src/app/shop/shared/shared-parameters';
import { ShopItem } from '../shared/models/shop-item';

@Component({
   templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnDestroy{
  parts: ShopItem[] = SharedParameters.storeItems;
  sum: number=0; 
  transportCost: number=0;
  paymentCost: number=0;
  totalValue: number=0;
  
  constructor(){
    this.getSum();
  }
  ngOnDestroy(): void {
    SharedParameters.globalTotalValue=this.totalValue;
    SharedParameters.globalTransportCost=this.transportCost;
    SharedParameters.globalPaymentCost=this.paymentCost;
    SharedParameters.globalSum=this.sum;
  }

  transportValue(value:number){
    this.transportCost=value;
    this.updateTotalValue();
  }

  paymentValue(value:number){
    this.paymentCost=value;
    this.updateTotalValue();
  }

  updateTotalValue(){
    this.totalValue=this.sum+this.transportCost+this.paymentCost;
  }

  removeItem(part: ShopItem){
    this.parts.splice(this.parts.findIndex(v => v.name === part.name), 1);
    this.getSum();
  }

  editQuantity(){
    this.getSum();
  }

  getSum(){
    if(this.parts.length !==0){
      this.sum = this.parts.map(q => q.price * q.amount).reduce((a, b) => a + b);
      this.updateTotalValue();
    }

  }
}