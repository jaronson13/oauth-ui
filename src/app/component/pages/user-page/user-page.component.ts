import { Component, OnInit } from '@angular/core';
import {mockUserData} from './user-page.mockdata';
import {User} from '../../../model/user.model';
import { ColumnHeader } from 'xynga-table';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  private isEdit = false;
  public modalOpen = false;
  users: User[] = mockUserData;
  tempFirstName: string;
  tempLastName: string;
  tempGroup: string;
  index: number;
  showApps = false;
  headers: ColumnHeader[] = [new ColumnHeader('First Name', true), new ColumnHeader('Last Name'), new ColumnHeader('Group')];
  ngOnInit() {
  }
  public getIsEdit() {
    return this.isEdit;
  }
  public setIsEdit(edit: boolean) {
    this.isEdit = edit;
  }
  public setEditUser(clickedUser: User, index: number) {
    this.index = index;
    this.tempFirstName = clickedUser.getFirstName();
    this.tempLastName = clickedUser.getLastName();
    this.tempGroup = clickedUser.getGroup();
  }
  public saveEdit() {
    this.users[this.index].setFirstName(this.tempFirstName);
    this.users[this.index].setLastName(this.tempLastName);
    this.users[this.index].setGroup(this.tempGroup);
    // hit PATCH endpoint on Oauth Server with parameter of editTenant
  }
  public cancelEdit() {
    this.tempFirstName = '';
    this.tempLastName = '';
    this.tempGroup = '';
  }
  public setShowApps() {
    this.showApps = true;
  }

}
