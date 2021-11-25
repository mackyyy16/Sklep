import { Component } from '@angular/core';
import { ShopItem } from 'src/app/shop/shared/models/shop-item';
import { SharedParameters } from 'src/app/shop/shared/shared-parameters';

@Component({
   templateUrl: './motor-oils.component.html',
  styleUrls: ['./motor-oils.component.css']
})
export class MotorOilsComponent {
  //from DB
  parts: ShopItem[]=[
    {
      name: "Olej silnikowy",
      producent: "Total QUARTZ",
      price: 103,
      amount: 1,
      imagePath: 'assets/images/olej-total.jpg'
    },
    {
      name: "Olej silnikowy",
      producent: "General Motors",
      price: 103,
      amount: 1,      
      imagePath: 'assets/images/olej-general.jpg'
    },
    {
      name: "Olej silnikowy",
      producent: "Mobil",
      price: 98,
      amount: 1,      
      imagePath: 'assets/images/olej-mobil.jpg'
    },
    {
      name: "Olej silnikowy",
      producent: "Motul",
      price: 155,
      amount: 1,      
      imagePath: 'assets/images/olej-motul.jpg'
    }
  ];

  addButton(item: ShopItem){
    // debugger;
    //jeżeli dodajesz 2x ten sam element to sprawdz czy go nie masz w tablicy
    //jak tak to dodaj ilosc
    SharedParameters.storeItems.push({...item});
  }

}