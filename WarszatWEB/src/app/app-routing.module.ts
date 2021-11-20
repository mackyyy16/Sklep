import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceListComponent } from './price-list/price-list.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { BasketComponent } from './basket/basket.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AddApplicationComponent } from './add-application/add-application.component';
import { ReviewApplicationComponent } from './review-application/review-application.component';
import { RegisterComponent } from './register/register.component';
import { AddPartsComponent } from './add-parts/add-parts.component';
import { ReviewPartsComponent } from './review-parts/review-parts.component';
import { ReviewApplicationWorkerComponent } from './review-application-worker/review-application-worker.component';
import { BrowseEmployeesComponent } from './browse-employees/browse-employees.component';
import { BrowseReportComponent } from './browse-report/browse-report.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { SparePartsComponent } from './shop/spare-parts/spare-parts.component';
import { BodyPartsComponent } from './shop/body-parts/body-parts.component';
import { ElectronicsPartsComponent } from './shop/electronics/electronics.component';
import { LightingPartsComponent } from './shop/lighting/lighting.component';
import { OilsPartsComponent } from './shop/oils/oils.component';
import { TiresPartsComponent } from './shop/tires/tires.component';
import { ToolsPartsComponent } from './shop/tools/tools.component';
import { EquipmentPartsComponent } from './shop/equipment/equipment.component';
import { BrakePadsComponent } from './shop/spare-parts/brake-pads/brake-pads.component';
import { BrakeSystemComponent } from './shop/spare-parts/brake-system/brake-system.component';
import { DriveSystemComponent } from './shop/spare-parts/drive-system/drive-system.component';
import { EnginePartsComponent } from './shop/spare-parts/engine-parts/engine-parts.component';
import { MotorOilsComponent } from './shop/spare-parts/engine-parts/motor-oils/motor-oils.component';
import { RollsComponent } from './shop/spare-parts/engine-parts/rolls/rolls.component';
import { TimingKitsComponent } from './shop/spare-parts/engine-parts/timing-kits/timing-kits.component';
import { VBeltsComponent } from './shop/spare-parts/engine-parts/v-belts/v-belts.component';
import { DeliveryComponent } from './shop/delivery/delivery.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'shop', component: ShopComponent},
  { path: 'price-list', component: PriceListComponent },
  { path: 'add-application', component: AddApplicationComponent },
  { path: 'review-application', component: ReviewApplicationComponent },
  { path: 'add-parts', component: AddPartsComponent },
  { path: 'review-parts', component: ReviewPartsComponent },
  { path: 'review-application-worker', component: ReviewApplicationWorkerComponent },
  { path: 'browse-employees', component: BrowseEmployeesComponent},
  { path: 'browse-report', component: BrowseReportComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'basket', component: BasketComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'manage-account', component: ManageAccountComponent },
  { path: 'shop/body-parts', component: BodyPartsComponent},
  { path: 'shop/electronics', component: ElectronicsPartsComponent},
  { path: 'shop/equipment', component: EquipmentPartsComponent},
  { path: 'shop/lighting', component: LightingPartsComponent},
  { path: 'shop/oils', component: OilsPartsComponent},
  { path: 'shop/spare-parts', component: SparePartsComponent},
  { path: 'shop/spare-parts/brake-pads', component: BrakePadsComponent},
  { path: 'shop/spare-parts/brake-system', component: BrakeSystemComponent},
  { path: 'shop/spare-parts/drive-system', component: DriveSystemComponent},
  { path: 'shop/spare-parts/engine-parts', component: EnginePartsComponent},
  { path: 'shop/spare-parts/engine-parts/motor-oils', component: MotorOilsComponent},
  { path: 'shop/spare-parts/engine-parts/rolls', component: RollsComponent},
  { path: 'shop/spare-parts/engine-parts/timing-kits', component: TimingKitsComponent},
  { path: 'shop/spare-parts/engine-parts/v-belts', component: VBeltsComponent},
  { path: 'shop/tires', component: TiresPartsComponent},
  { path: 'shop/tools', component: ToolsPartsComponent},
  { path: 'shop/delivery', component: DeliveryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
