import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';
import Utils from 'src/app/utils/Utils';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss'],
})
export class CardCharacterComponent  implements OnInit {

  character: Result = {
    id: 0,
    name: '',
    description: '',
    modified: '',
    thumbnail: {extension:"", path: ""},
    resourceURI: '',
    comics: {
      available: 0,
      collectionURI: '',
      items: [],
      returned: 0
    },
    series: {
      available: 0,
      collectionURI: '',
      items: [],
      returned: 0
    },
    stories: {
      available: 0,
      collectionURI: '',
      items: [],
      returned: 0
    },
    events: {
      available: 0,
      collectionURI: '',
      items: [],
      returned: 0
    },
    urls: []
  };

  constructor(private chrSrv: CharactersService, public utils: Utils) { }

  ngOnInit() {
   this.character = this.chrSrv.characterSelected!
  }

}
