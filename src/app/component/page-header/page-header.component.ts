import { Component, OnInit } from '@angular/core';
import {ITab} from 'xynga-navigation';

@Component({
  selector: 'page-handler',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {


  tabs: ITab[] = [
    {
      title: 'Tenant',
      route: '/tenant'
    },
    {
      title: 'Application',
      route: '/app'
    },
    {
      title: 'User',
      route: '/user'
    },
    {
      title: 'Group',
      route: '/group'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
