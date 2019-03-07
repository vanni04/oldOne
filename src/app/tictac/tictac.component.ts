import { Component, OnInit } from '@angular/core';
import { enableProdMode } from '@angular/core';

enableProdMode();

@Component({
  selector: 'app-tictac',
  templateUrl: './tictac.component.html',
  styleUrls: ['./tictac.component.css']
})
export class TictacComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  

  onSelect(): void {
    document.getElementById("Square1").innerHTML="<img src='../assets/img/X.png' height=100%; width=100% />";
    // var img = document.createElement('img')
    // img.src="background.jpg";
    // document.getElementById('Square1').appendChild(img);
    console.log();
  }

}
