import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  //metti standalone perchè se no da errore; fa uscire Loading... perchè
  standalone: true,
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}