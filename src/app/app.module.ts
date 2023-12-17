import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturesModule } from './modules/features/features.module';
import { SharedsModule } from './modules/shareds/shareds.module';
import { AuthModule } from './modules/features/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeaturesModule,
    SharedsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
