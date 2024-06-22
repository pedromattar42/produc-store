import { MatCardModule } from '@angular/material/card';
import { Component, EventEmitter, Output, computed, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ProductInterface } from '../../../shared/interfaces/product';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  product = input.required<ProductInterface>()
  productTitle = computed(() => this.product().title)
  @Output() edit = new EventEmitter()


  onEdit() {
    this.edit.emit()
  }

}
