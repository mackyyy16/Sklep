import { Component } from '@angular/core';
import { ShopItem } from 'src/app/shop/shared/models/shop-item';
import { SharedParameters } from 'src/app/shop/shared/shared-parameters';
import { PartService } from 'src/app/website/shared/http-services/partService';

@Component({
   templateUrl: './engine-parts.component.html',
  styleUrls: ['./engine-parts.component.css']
})
export class EnginePartsComponent {
  public parts: ShopItem[] = [];
  constructor(private partService: PartService){
    this.partService.getParts().then(data => {
      let partsTemp: ShopItem[] =[];
      
      data.forEach(element => {
        if(element.category === 'spare-parts' && element.subcategory === 'engine-parts'){
          partsTemp.push({
            id_part: element.id_part,
            name: element.name,
            amount: 0,
            price: element.price,
            producent: element.producer,
            imagePath: element.path_to_image
          });
        };      
      });
      
      this.parts = partsTemp;
    });
  }

  addButton(item: ShopItem){
    // debugger;
    //jeżeli dodajesz 2x ten sam element to sprawdz czy go nie masz w tablicy
    //jak tak to dodaj ilosc
    SharedParameters.storeItems.push({...item});
  }
}


