import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.scss']
})

export class LayoutPageComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  origenCtrl = new FormControl<string>('',
    [
      Validators.required,
      Validators.maxLength(3),
      Validators.pattern('[A-Z]*'),
    ]
  );

  destinoCtrl = new FormControl<string>('',
  [
    Validators.required,
    Validators.maxLength(3),
    Validators.pattern('[A-Z]*'),
  ]
);

  constructor() {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription.add(
    this.origenCtrl.valueChanges
      .pipe(debounceTime(350))
      .subscribe(value => {
        console.log(value);
      })
    );
    this.subscription.add(
    this.destinoCtrl.valueChanges.subscribe(value => {
      console.log(value);
    })
    );
  }

  getOrigen(event: Event) {
    event.preventDefault();
    console.log(this.origenCtrl.value);
  }
  getDestino(event: Event) {
    event.preventDefault();
    console.log(this.destinoCtrl.value);
  }
}
