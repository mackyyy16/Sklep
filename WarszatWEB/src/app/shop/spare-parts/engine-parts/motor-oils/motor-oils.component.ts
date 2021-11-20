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
      name: "Olej 1",
      producent: "Producent 1",
      price: 100.50,
      amount: 1,
      imagePath: 'assets/images/olej.jpg'
    },
    {
      name: "Olej 2",
      producent: "Producent 2",
      price: 10,
      amount: 2,      
      imagePath: 'assets/images/narzedzia.jpg'
    },
    {
      name: "Olej 3",
      producent: "Producent 3",
      price: 100,
      amount: 5,      
      imagePath: 'assets/images/klocki.jpg'
    },
    {
      name: "Olej 4",
      producent: "Producent 4",
      price: 10.50,
      amount: 1,      
      imagePath: 'assets/images/opony.jpg'
    }
  ];

  addButton(item: ShopItem){
    // debugger;
    //jeżeli dodajesz 2x ten sam element to sprawdz czy go nie masz w tablicy
    //jak tak to dodaj ilosc
    SharedParameters.storeItems.push({...item});
  }

}