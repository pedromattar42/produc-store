import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { ProductInterface } from '../../shared/interfaces/product';
import { CardComponent } from '../components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  products: ProductInterface[] = []
  productsService = inject(ProductsService)
  router = inject(Router)

  ngOnInit(): void {
    this.productsService.getAll().subscribe((res) => {
      this.products = res
    })
  }

  onEdit() {
    this.router.navigateByUrl('/edit-product/:id')
  }
}
