import { Component, OnDestroy } from '@angular/core';
import { SharedParameters } from 'src/app/shop/shared/shared-parameters';
import { ShopItem } from '../shared/models/shop-item';
import { DelivaryAndPaymentCost, SummaryCost } from '../shared/models/summary-cost';

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
  transport: DelivaryAndPaymentCost;
  payment: DelivaryAndPaymentCost;
  
  constructor(){
    this.getSum();
  }
  ngOnDestroy(): void {
    const costSummary:SummaryCost={
      globalPaymentCost:this.paymentCost,
      globalSum:this.sum,
      globalTotalValue:this.totalValue,
      globalTransportCost:this.transportCost,
      payment: this.payment,
      transport: this.transport
    }
    SharedParameters.costSummary=costSummary;
  }

  transportValue(value:number, name: string){
    this.transportCost=value;
    this.transport = {
      name: name,
      price: value
    };
    this.updateTotalValue();
  }

  paymentValue(value:number, name: string){
    this.paymentCost=value;
    this.payment = {
      name: name,
      price: value
    };
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