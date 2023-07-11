import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trucks',
    power: 10
  }];

  @Output()
  public onDeleteId: EventEmitter<number> = new EventEmitter;



  onDeleteCharacter(index: number): void{
    //TODO Emitir el ID del personaje
    console.log(index);
    this.onDeleteId.emit(index);
  }

}
