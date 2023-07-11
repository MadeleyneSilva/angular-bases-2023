import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPageComponent {

  constructor( private dbzServ: DbzService ){  }

  get characters(): Character[]{
    return [...this.dbzServ.characters];
  }

  onDeleteCharacter( id: string ): void{
    this.dbzServ.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void{
    this.dbzServ.addCharacter(character);
  }



}
