import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ProductInterface } from '../interfaces/product';
import { ProductDto } from '../interfaces/product-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpClient = inject(HttpClient)

  public getAll() {
    return this.httpClient.get<ProductInterface[]>('/api/products')
  }

  public post(dto: ProductDto) {
    return this.httpClient.post('/api/products', dto)
  }
}
