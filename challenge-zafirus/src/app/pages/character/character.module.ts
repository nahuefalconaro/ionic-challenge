import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterPageRoutingModule } from './character-routing.module';

import { CharacterPage } from './character.page';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterPageRoutingModule,
    TranslateModule,
    ComponentsModule
  ],
  declarations: [CharacterPage]
})
export class CharacterPageModule {}
