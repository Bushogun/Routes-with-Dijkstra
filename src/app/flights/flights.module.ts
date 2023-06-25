import { NgModule } from '@angular/core';
import { LayoutPageComponent } from './pages/layout-page/flight-page.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

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
