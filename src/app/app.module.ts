import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HousesComponent } from './houses/houses.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    HouseDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
