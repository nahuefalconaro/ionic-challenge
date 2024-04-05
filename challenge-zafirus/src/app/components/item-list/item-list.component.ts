import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Result } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';
import Utils from 'src/app/utils/Utils';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent{
  @Input() character: Result = {
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
  constructor(public utils: Utils, private chrtService: CharactersService,private navCtrl: NavController,) { }

  setCharacter(){
    this.chrtService.setCharacterSelected(this.character);
    this.navCtrl.navigateForward(['/characters/', this.character.id])
  }
}
