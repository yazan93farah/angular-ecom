import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div
      class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative items-center"
    >
      <img
        class="w-[200px] h-[100px] object-contain"
        [src]="product().image"
        [alt]="'test' + product().id"
      />
      <div class="flex flex-col mt-2 w-full items-center">
        <span class="text-md font-bold"> {{ product().title }}</span>
        <span> {{ product().price + ' €' }}</span>
        <app-primary-button
          label=" Add to Cart"
          class="mt-3 w-full "
          (btnClicked)="cartService.addToCart(product())"
        />
      </div>
      <span
        class="absolute top-2 right-3 text-sm font-bold"
        [class]="product().stock ? 'text-green-500' : 'text-red-500'"
      >
        @if (product().stock) {
        {{ product().stock }} left } @else { out of Stock }
      </span>
    </div>
  `,
  styles: ``,
})
export class ProductCardComponent {
  product = input.required<Product>();
  cartService = inject(CartService);
}
