import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AddApplicationComponent } from './add-application/add-application.component';
import { ReviewApplicationComponent } from './review-application/review-application.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPartsComponent } from './add-parts/add-parts.component';
import { ReviewPartsComponent } from './review-parts/review-parts.component';
import { ReviewApplicationWorkerComponent } from './review-application-worker/review-application-worker.component';
import { BrowseEmployeesComponent } from './browse-employees/browse-employees.component';
import { BrowseReportComponent } from './browse-report/browse-report.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { SparePartsComponent } from './shop/spare-parts/spare-parts.component';
import { BasketComponent } from './basket/basket.component';
import { ShopComponent } from './shop/shop.component';
import { BodyPartsComponent } from './shop/body-parts/body-parts.component';
import { ElectronicsPartsComponent } from './shop/electronics/electronics.component';
import { EquipmentPartsComponent } from './shop/equipment/equipment.component';
import { LightingPartsComponent } from './shop/lighting/lighting.component';
import { OilsPartsComponent } from './shop/oils/oils.component';
import { TiresPartsComponent } from './shop/tires/tires.component';
import { ToolsPartsComponent } from './shop/tools/tools.component';
import { BrakePadsComponent } from './shop/spare-parts/brake-pads/brake-pads.component';
import { BrakeSystemComponent } from './shop/spare-parts/brake-system/brake-system.component';
import { DriveSystemComponent } from './shop/spare-parts/drive-system/drive-system.component';
import { EnginePartsComponent } from './shop/spare-parts/engine-parts/engine-parts.component';
import { MotorOilsComponent } from './shop/spare-parts/engine-parts/motor-oils/motor-oils.component';
import { RollsComponent } from './shop/spare-parts/engine-parts/rolls/rolls.component';
import { TimingKitsComponent } from './shop/spare-parts/engine-parts/timing-kits/timing-kits.component';
import { VBeltsComponent } from './shop/spare-parts/engine-parts/v-belts/v-belts.component';

@NgModule({
  declarations: [
    AppComponent,
    AddApplicationComponent,
    ReviewApplicationComponent,
    LoginComponent,
    RegisterComponent,
    ShopComponent,
    AddPartsComponent,
    ReviewPartsComponent,
    ReviewApplicationWorkerComponent,
    BrowseEmployeesComponent,
    BrowseReportComponent,
    ManageAccountComponent,
    BodyPartsComponent,
    ElectronicsPartsComponent,
    EquipmentPartsComponent,
    LightingPartsComponent,
    OilsPartsComponent,
    SparePartsComponent,
/////////////////////////
    BrakePadsComponent,
/////////////////////////
    BrakeSystemComponent,
    DriveSystemComponent,
/////////////////////////
    EnginePartsComponent,
    MotorOilsComponent,
    RollsComponent,
    TimingKitsComponent,
    VBeltsComponent,
/////////////////////////
    TiresPartsComponent,
    ToolsPartsComponent,
    BasketComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
