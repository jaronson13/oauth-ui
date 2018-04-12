import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Tenant} from '../../model/tenant.model';
import {API_URL} from '../../constants/url-source';
import {ADD_TENANT, DELETE_TENANT, GET_TENANTS, PATCH_TENANT} from '../../constants/tenant-endpoints';

@Injectable()
export class TenantService {

  constructor(private http: HttpClient) { }

  public getTenants(): Observable<{}> {
    return this.http.get(API_URL + GET_TENANTS, {withCredentials: true});
  }
  public addTenant(tenant: Tenant): Observable<{}> {
    return this.http.post(API_URL + ADD_TENANT, tenant, {withCredentials: true});
  }
  public editTenant(tenant: Tenant): Observable<{}> {
    return this.http.patch(API_URL + PATCH_TENANT + tenant.getId(), tenant, {withCredentials: true});
  }
  public deleteTenant(tenant: Tenant): Observable<{}> {
    // TODO: Does this method call DELETE or PATCH? Do we want to delete the tenant or just update status to 'Inactive'
    return this.http.delete(API_URL + DELETE_TENANT + tenant.getId(), {withCredentials: true});
  }
}
