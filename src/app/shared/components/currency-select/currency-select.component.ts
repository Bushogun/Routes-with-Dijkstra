import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.css']
})

export class CurrencySelectComponent implements OnInit {
  selectedCurrency: string = "COP";
  constructor() { }

  ngOnInit() {
  }

}
