import { Component, OnInit } from '@angular/core';
import { mockGroupData } from './group-page.mockdata';
import { ColumnHeader } from 'xynga-table';
import {Group } from '../../../model/groups.model';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.css']
})
export class GroupPageComponent implements OnInit {
  private isEdit = false;
  public modalOpen = false;
  groups: Group[] = mockGroupData;
  tempName: string;
  tempTenant: string;
  tempApp: string;
  index: number;
  headers: ColumnHeader[] = [new ColumnHeader('Name', true), new ColumnHeader('Tenant'), new ColumnHeader('Application')];
  ngOnInit() {
  }
  public getIsEdit() {
    return this.isEdit;
  }
  public setIsEdit(edit: boolean) {
    this.isEdit = edit;
  }
  public setEditGroup(clickedGroup: Group, index: number) {
    this.index = index;
    this.tempName = clickedGroup.getName();
    this.tempTenant = clickedGroup.getTenant();
    this.tempApp = clickedGroup.getApp();
  }
  public saveEdit() {
    this.groups[this.index].setName(this.tempName);
    this.groups[this.index].setTenant(this.tempTenant);
    this.groups[this.index].setApp(this.tempApp);
    // hit PATCH endpoint on Oauth Server with parameter of editGroup
  }
  public cancelEdit() {
    this.tempName = '';
    this.tempTenant = '';
    this.tempApp = '';
  }
}
