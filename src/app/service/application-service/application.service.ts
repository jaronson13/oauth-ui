import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {API_URL} from '../../constants/url-source';

@Injectable()
export class ApplicationService {

  constructor(private http: HttpClient) { }

  public getApps(): Observable<{}> {
    return this.http.get(API_URL, {withCredentials: true});
  }

}
