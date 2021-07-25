import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @Output('result-container-on') resultContainerAppearance = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  

}
