import { Component, OnInit } from '@angular/core';
import { mockTenantData } from './tenant-page.mockdata';
import { ColumnHeader } from 'xynga-table';
import {Tenant} from '../../../model/tenant.model';
import {TenantDisplayAppsComponent} from '../../tenant-display-apps/tenant-display-apps.component';

@Component({
  selector: 'app-tenant-page',
  templateUrl: './tenant-page.component.html',
  styleUrls: ['./tenant-page.component.css']
})
export class TenantPageComponent implements OnInit {
  private isEdit = false;
  public modalOpen = false;
  tenants: Tenant[] = mockTenantData;
  tempName: string;
  tempDescription: string;
  tempStatus: string;
  index: number;
  showApps: boolean = false;
  headers: ColumnHeader[] = [new ColumnHeader('Name', true), new ColumnHeader('Tenant Description'), new ColumnHeader('Tenant Status')];
  ngOnInit() {
  }
  public getIsEdit() {
    return this.isEdit;
  }
  public setIsEdit(edit: boolean) {
    this.isEdit = edit;
  }
  public setEditGroup(clickedTenant: Tenant, index: number) {
    this.index = index;
    this.tempName = clickedTenant.getName();
    this.tempDescription = clickedTenant.getDescription();
    this.tempStatus = clickedTenant.getStatus();
  }
  public saveEdit() {
    this.tenants[this.index].setName(this.tempName);
    this.tenants[this.index].setDescription(this.tempDescription);
    this.tenants[this.index].setStatus(this.tempStatus);
    // hit PATCH endpoint on Oauth Server with parameter of editTenant
  }
  public cancelEdit() {
    this.tempName = '';
    this.tempDescription = '';
    this.tempStatus = '';
  }
  public setShowApps() {
    this.showApps = true;
  }
}
