import { Injectable } from '@angular/core';
import { Tile } from './tictac/Tile';
@Injectable({
  providedIn: 'root'
})
export class GameService {

  tiles = []



  createGameBoard(){
    this.tiles = [];
      for (var i = 0; i < 9; i++) {
        var tile = new Tile();
        tile.hasValue = false;
        tile.value = "";
        this.tiles.push(tile);
        console.log("Test");
      }
      return this.tiles;
  }

  constructor() { }
}
