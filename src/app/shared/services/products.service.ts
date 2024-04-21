import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ProductInterface } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpClient = inject(HttpClient)

  public getAll() {
    return this.httpClient.get<ProductInterface[]>('/api/products')
  }
}
