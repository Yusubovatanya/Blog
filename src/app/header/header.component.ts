import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  link =  { path: '/sections/main/articles', label: 'Главная', active: 'active_link', icon: 'home' };

  constructor() { }

  ngOnInit() { }
}
