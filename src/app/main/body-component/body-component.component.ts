import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-component',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.scss']
})
export class BodyComponentComponent implements OnInit {

  isVisible: boolean = false;

  constructor() { }

  ngOnInit(){
  }

  setVisibility() {
    this.isVisible = !this.isVisible;
  }

}
