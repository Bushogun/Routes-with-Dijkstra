import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../Classes/Flight';
import { Journey } from '../Classes/Journey';
import { Transport } from '../Classes/Transport';

export class HeroesService {

  //private baseUrl: string = environments.baseUrl;
  constructor(private http: HttpClient) { }

  getFlight(){}
  getJourney(){}
  getTransport(){}

}
