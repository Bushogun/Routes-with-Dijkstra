import { NgModule } from '@angular/core';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

// https://recruiting-api.newshore.es/api/flights/0

// https://recruiting-api.newshore.es/api/flights/1

// https://recruiting-api.newshore.es/api/flights/2

@NgModule({
  declarations: [
    LayoutPageComponent,
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FlightModule { }
