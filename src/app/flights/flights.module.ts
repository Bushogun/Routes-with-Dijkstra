import { NgModule } from '@angular/core';
import { LayoutPageComponent } from './pages/layout-page/flight-page.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { CardLargeComponent } from './card-large/card-large.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    CardComponent,
    CardLargeComponent
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class FlightModule { }
