import { Component } from '@angular/core';
import { SharedParameters } from 'src/app/shop/shared/shared-parameters';
import { ShopItem } from '../shop/shared/models/shop-item';

@Component({
   templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  parts: ShopItem[] = SharedParameters.storeItems;
  sum: number; 

  constructor(){
    this.getSum();
  }

  removeItem(part: ShopItem){
    this.parts.splice(this.parts.findIndex(v => v.name === part.name), 1);
    this.getSum();
  }

  editQuantity(){
    this.getSum();
  }

  getSum(){
    if(this.parts.length !==0)
      this.sum = this.parts.map(q => q.price * q.amount).reduce((a, b) => a + b);
  }
}