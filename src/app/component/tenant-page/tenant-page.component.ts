import { Component, OnInit } from '@angular/core';
import { mockTenantData } from './tenant-page.mockdata';
import { ColumnHeader } from 'xynga-table';
import {Tenant} from '../../model/tenant.model';
import {TenantDisplayAppsComponent} from '../tenant-display-apps/tenant-display-apps.component';

@Component({
  selector: 'app-tenant-page',
  templateUrl: './tenant-page.component.html',
  styleUrls: ['./tenant-page.component.css']
})
export class TenantPageComponent implements OnInit {
  private isEdit = false;
  public modalOpen = false;
  tenants: Tenant[] = mockTenantData;
  editTenant: Tenant;
  unalteredTenant: Tenant;
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
  public setEditTenant(clickedTenant: Tenant, index: number) {
    this.index = index;
    this.editTenant = new Tenant(clickedTenant.getName(), clickedTenant.getDescription(), clickedTenant.getStatus());
    this.unalteredTenant = new Tenant(clickedTenant.getName(), clickedTenant.getDescription(), clickedTenant.getStatus());
  }
  public saveEdit() {
    this.tenants[this.index] = this.editTenant;
    // hit PATCH endpoint on Oauth Server with parameter of editTenant
  }
  public cancelEdit() {
    this.tenants[this.index] = this.unalteredTenant;
  }
  public setShowApps() {
    this.showApps = true;
  }
}
