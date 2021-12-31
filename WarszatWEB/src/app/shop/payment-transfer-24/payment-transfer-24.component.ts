import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PartService } from 'src/app/website/shared/http-services/partService';
import { IPart } from 'src/app/website/shared/models/part';
import { SharedParameters } from '../shared/shared-parameters';

@Component({
   templateUrl: './payment-transfer-24.component.html',
  styleUrls: ['./payment-transfer-24.component.css']
})
export class PaymentTransfer24Component {
  
  constructor(private readonly router: Router,
    private readonly partService: PartService){}

  accept(): void {
    setTimeout(()=>{ this.navigateToFinishPage(this); },30000);
  }

  navigateToFinishPage(value: any){
    this.router.navigate(['/finish-payment']);
    this.refreshDataInDb();
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