import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private _HttpClient: HttpClient) {}

  contactUs(data: any): Observable<any> {
    return this._HttpClient.post(
      `https://upskilling-egypt.com:3001/contact`,
      data
    );
  }
}
