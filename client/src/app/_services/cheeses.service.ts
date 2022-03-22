import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Cheese } from '../_models/cheese';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private server_url = environment.serverURL;

  constructor(private http: HttpClient) {}

  getCheeses(): Observable<any> {
    return this.http.get(this.server_url + '/cheeses');
  }

  purchaseItem(purchasedItems: Cheese[]): Observable<any> {
    return this.http.post(
      this.server_url + '/cheeses' + '/api/purchaseItem',
      purchasedItems
    );
  }

  getRecentPurchases(): Observable<any> {
    return this.http.get(
      this.server_url + '/cheeses' + '/api/recentItemsPurchased'
    );
  }
}
