import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { ProductInterface } from '../../shared/interfaces/product';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  products: ProductInterface[] = []
  productsService = inject(ProductsService)

  ngOnInit(): void {
    this.productsService.getAll().subscribe((res) => {
      this.products = res
    })
  }
}
