import { Component } from '@angular/core';
import { RickAndMortyService } from './rick-and-morty.service';

@Component({
  selector: 'app-http-service',
  template:`
    <div
      *ngFor="let character of rickAndMortyCharacters$ | async">
      <p> {{ character.name }} </p>
      <img width="200" [src]="character.image"/>
    <div>
  `,
})
export class RickAndMortyComponent  {

  rickAndMortyCharacters$ = this.rickAndMortyService.getCharacters();

  constructor(private rickAndMortyService: RickAndMortyService) { }
}
