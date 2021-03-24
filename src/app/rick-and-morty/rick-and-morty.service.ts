import { RickAndMortyAPIResponse, RickAndMortyCharacter } from './rick-and-morty-character,model';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get<RickAndMortyAPIResponse<RickAndMortyCharacter>>(this.apiUrl).pipe(
      map(response => response.results)
    );
  }
}
