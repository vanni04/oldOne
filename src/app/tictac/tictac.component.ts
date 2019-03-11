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
  ngOnInit() {}
// tiles 
  // @Input() tile;
  

  onclick():void{

    // document.getElementById("Square2").innerHTML="<img src='X.png' height=100%; width=100% />";
    // var img = document.createElement('img')
    // img.src="background.jpg";
    // document.getElementById('Square'+i).appendChild(img);
    // console.log("test");
    // getTileSrc(): string{
    //   if(tile === 'X'){

    //   }else{

    //   }
    }
  }

  



