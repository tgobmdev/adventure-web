import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './modules/layout/layout.module';
import { DestinationModule } from './modules/pages/destination/destination.module';
import { TravelModule } from './modules/pages/travel/travel.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    DestinationModule,
    TravelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
