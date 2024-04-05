import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5';
import { CharactersResponse, DataCharactersResponse, Result } from '../interfaces/character.interface';
import { Observable, map } from 'rxjs';

const PUBLIC_API_KEY = environment.publicApiKey;
const PRIVATE_API_KEY = environment.privateApiKey;
const TIMESTAMP = environment.timestamp;
const URL = "https://gateway.marvel.com:443/v1/public/"

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  characterSelected: Result | undefined;
  constructor(private http: HttpClient) { }


  getCharacters(): Observable<DataCharactersResponse>{
    return this.http.get<CharactersResponse>(URL +`characters`, {
      params:{
        orderBy:"name",
        limit: "20",
        ts: TIMESTAMP,
        apikey: PUBLIC_API_KEY,
        hash: Md5.hashStr(TIMESTAMP + PRIVATE_API_KEY + PUBLIC_API_KEY)
      }
    }).pipe(map(({data}) => data));
  }

  setCharacterSelected(data: Result) {
    this.characterSelected = data;
  }

  get getCharacterSelected() {
    return this.characterSelected;
  }
}
