import { Injectable } from '@angular/core';
import { Thumbnail } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})

export default class Utils{

    extensionImg(url:Thumbnail){
        return url.path + "/portrait_fantastic."+url.extension;
      }
}