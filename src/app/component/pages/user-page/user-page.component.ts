import { Component, OnInit } from '@angular/core';
import {mockUserData} from './user-page.mockdata';
import {User} from '../../../model/user.model';
import { ColumnHeader } from 'xynga-table';
import {WebService} from 'xynga-web-services';
import {HttpHeaders} from "@angular/common/http";


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  constructor(private webService: WebService) {}
  private isEdit = false;
  private isNewUser = false;
  public modalOpen = false;
  public newUser = {
    'username': '',
    'password': '',
    'email' : '',
    'tenantId' : 'eb51af95-68b3-48a5-a68c-172e428f0209',
    'enabled' : 'true',
    'emailVerified': 'false',
    'phoneNumberVerified': 'false'
  };
  users: User[] = mockUserData;
  tempFirstName: string;
  tempLastName: string;
  tempGroup: string;
  index: number;
  showApps = false;
  headers: ColumnHeader[] = [new ColumnHeader('First Name', true), new ColumnHeader('Last Name'), new ColumnHeader('Group')];
  ngOnInit() {
  }
  public getIsNew() {
    return this.isNewUser;
  }
  public setIsNew(b: boolean) {
    this.isNewUser = b;
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
  saveUser() {
    if (this.newUser.username !== '' && this.newUser.password !== '' && this.newUser.email !== '') {
      const httpHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json'
    });
      const httpOptions = {
        headers: httpHeader
      };
      this.webService.postRequest('http://localhost:9000', '/users' , this.newUser,
        httpOptions ).subscribe();
    }
  }
  public setShowApps() {
    this.showApps = true;
  }

}
