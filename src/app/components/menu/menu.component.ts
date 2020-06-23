import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  developper = 'Amélie Marduel';
  date = new Date(); 

  constructor() { }

  ngOnInit(): void {
  }

}
