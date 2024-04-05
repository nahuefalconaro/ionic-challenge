import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { DataCharactersResponse, Result } from '../../interfaces/character.interface'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public charactersData: Result[] = [];

  constructor(private charctSrvc: CharactersService) {}

  ngOnInit(): void {
   
    this.charctSrvc.getCharacters().subscribe((resp:DataCharactersResponse) => {
      this.charactersData.push(...resp.results)
    })
    console.log(this.charactersData)
  }
}
