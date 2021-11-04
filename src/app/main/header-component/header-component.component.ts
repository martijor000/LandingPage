import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
  urls: any[] = [
    {route: '', name: 'Home'},
    {route: '/products', name: 'Products'},
    {route: '/contact', name: 'Contact'}
  ];
  constructor() { }

  ngOnInit(){
  }

}
