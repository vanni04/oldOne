import { Component, OnInit, Input } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { empty } from 'rxjs';
import { GameService } from '../game.service';
import { Tile } from './Tile';


enableProdMode();

@Component({
  selector: 'app-tictac',
  templateUrl: './tictac.component.html',
  styleUrls: ['./tictac.component.css']
})
export class TictacComponent implements OnInit {
  constructor(public gs:GameService) {
  }

  tiles : Tile[];
  imgSrc = "";
  player = "X";

  selectedTile: Tile;

  
  createGameBoard(): void{
    this.tiles = this.gs.createGameBoard();
  }

  onClick(tile: Tile, imgSrc): void{
    this.selectedTile = tile;
    if(this.player == "X"){
      this.imgSrc = "background.jpg";
      // if(tile){
      //   this.imgSrc = this.gs.onclick();
      // }
    }
   
  }


  ngOnInit() {
    this.createGameBoard();
  }

 
  }

  



