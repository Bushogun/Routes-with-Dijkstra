import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-large',
  templateUrl: './card-large.component.html',
  styleUrls: ['./card-large.component.css']
})
export class CardLargeComponent implements OnInit {
  showDetails: boolean = false;

  constructor() {

   }

  ngOnInit() {
  }

  toggleDetalles() {
    this.showDetails = !this.showDetails;
  }

}
