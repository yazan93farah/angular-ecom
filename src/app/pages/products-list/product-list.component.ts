import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  template: ` <div class="p-8 grid  grid-cols-2 gap-4">
    @for (product of products(); track product.id) {
      <app-product-card [product]="product"/>
     }
  </div>`,
  styles: ``,
})
export class ProductListComponent {
  products = signal<Product[]>([
    { id: 0, image: 'assets/images/book.png', price: 60, stock: 5, title: 'book' },
    { id: 1, image: 'assets/images/playstation.png', price: 350, stock: 2, title: 'ps5' },
    { id: 2, image: 'assets/images/laptop.png', price: 60, stock: 0, title: 'Laptop' },
    { id: 3, image: 'assets/images/screen.png', price: 120, stock: 18, title: 'Monitor' },
    { id: 4, image: 'assets/images/ebook.jpg', price: 12, stock: 99, title: 'Ebook' },
  ]);
}
