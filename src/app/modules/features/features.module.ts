import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrierModule } from './carrier/carrier.module';
import { PackageModule } from './package/package.module';
import { SellerBatchModule } from './seller-batch/seller-batch.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarrierModule,
    PackageModule,
    SellerBatchModule
  ],
  exports:[
    CarrierModule,
    PackageModule,
    SellerBatchModule
  ]
})
export class FeaturesModule { }
