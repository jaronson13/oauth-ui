import { Component, OnInit } from '@angular/core';
import { mockAppData } from './app-page.mockdata';
import { ColumnHeader } from 'xynga-table';
import {Apps} from '../../../model/apps.model';

@Component({
  selector: 'app-application-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.css']
})
export class AppPageComponent implements OnInit {
  private isEdit = false;
  public modalOpen = false;
  apps: Apps[] = mockAppData;
  tempName: string;
  tempTenant: string;
  tempDescription: string;
  index: number;
  headers: ColumnHeader[] = [new ColumnHeader('Name', true), new ColumnHeader('Tenant'), new ColumnHeader('Description')];
  ngOnInit() {
  }
  public getIsEdit() {
    return this.isEdit;
  }
  public setIsEdit(edit: boolean) {
    this.isEdit = edit;
  }
  public setEditApp(clickedApp: Apps, index: number) {
    this.index = index;
    this.tempName = clickedApp.getName();
    this.tempTenant = clickedApp.getTenant();
    this.tempDescription = clickedApp.getDescription();
  }
  public saveEdit() {
    this.apps[this.index].setName(this.tempName);
    this.apps[this.index].setTenant(this.tempTenant);
    this.apps[this.index].setDescription(this.tempDescription);
    // hit PATCH endpoint on Oauth Server with parameter of editGroup
  }
  public cancelEdit() {
    this.tempName = '';
    this.tempTenant = '';
    this.tempDescription = '';
  }
}
