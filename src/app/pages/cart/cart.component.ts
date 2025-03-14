import { Component, inject, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [PrimaryButtonComponent],
  template: `
  @if (!cartService.cart().length) {
    <div> cart is empty</div>
  }
  @else {
 @for (product of cartService.cart(); track product.id) {
  <div
      class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative items-center"
    >
      <img
        class="w-[200px] h-[100px] object-contain"
        [src]="product.image"
        [alt]="'test' + product.id"
      />
      <div class="flex flex-col mt-2 w-full items-center">
        <span class="text-md font-bold"> {{ product.title }}</span>
        <span> {{ product.price + ' €' }}</span>
        <app-primary-button
          label="delete"
          [class]="'mt-3 w-full bg-red-600' "
          (btnClicked)="cartService.removeFromCart(product.id)"
        />
      </div>
    </div>
 }}
  `,
  styles: ``
})
export class CartComponent {
cartService = inject(CartService);

}
