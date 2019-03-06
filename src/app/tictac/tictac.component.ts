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

}
