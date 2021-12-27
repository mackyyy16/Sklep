import { Component, OnInit } from '@angular/core';
import { PartService } from 'src/app/website/shared/http-services/partService';
import { IPart } from 'src/app/website/shared/models/part';
import { SharedParameters } from '../shared/shared-parameters';

@Component({
   templateUrl: './finish-order.component.html',
  styleUrls: ['./finish-order.component.css']
})
export class FinishOrderComponent {
  constructor(private readonly partService: PartService){
    this.refreshDataInDb();//nie dziala
  }

  refreshDataInDb(): void{
    //dodanie zamowienia do uzytkownika jak zalogowany, co jak nie?
    //zmienienie ilosci elementow w bazie o te kupione
    //wyczyszczenie sharedparameters
    debugger;
    const parts : IPart[] = [];

    SharedParameters.storeItems.forEach(part => {
      parts.push({
        id_part: part.id_part,
        amount: part.amount,
        category: '',
        name: '',
        path_to_image: '',
        price: 0,
        producer:'',
        subcategory: ''
      });
    });
    
    let partsTemp;
    this.partService
      .updatePart(parts)
      .subscribe({
        next: partsFromApi => partsTemp = partsFromApi,
        error:err => err=err
      }); 

    SharedParameters.storeItems = [];
  }
}