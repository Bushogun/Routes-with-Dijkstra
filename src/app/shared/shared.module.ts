import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencySelectComponent } from './components/currency-select/currency-select.component';
import { MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MatSelectModule } from '@angular/material/select';
import { MAT_AUTOCOMPLETE_SCROLL_STRATEGY } from '@angular/material/autocomplete';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  declarations: [
    CurrencySelectComponent
  ],
  exports:[
    CurrencySelectComponent
  ],
  providers:[
    {provide: MAT_SELECT_SCROLL_STRATEGY, useValue: MAT_SELECT_SCROLL_STRATEGY_PROVIDER},
    { provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY, useValue: MAT_SELECT_SCROLL_STRATEGY_PROVIDER, },
    ]
})
export class SharedModule { }
