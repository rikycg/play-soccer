/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private options = { headers: { 'X-Auth-Token': environment.token }};

  constructor(private http: HttpClient) {}

  async getTeam() {
    return this.get('teams');
  }

  public get(path: string, key?: string, filter?: (e,i) => boolean): any {
    const url = `${environment.api}${path}`;
    return this.http.get(url, this.options)
    .toPromise()
    .then(res => {
      const info: any[] | object = key ? res[key] : res;
      return filter && Array.isArray(info) ? info.filter(filter) : info;
    });
  }

}
