import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ItemListComponent } from './item-list/item-list.component';
import { CardCharacterComponent } from './card-character/card-character.component';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    ItemListComponent,
    CardCharacterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
  ],
  exports: [
    ItemListComponent,
    CardCharacterComponent
  ]
})
export class ComponentsModule { }
