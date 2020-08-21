import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  makeBuy() {
    window.alert('buy successfull!');
  }

  removeItem(pos: number) {
    this.items = this.items.filter((item, index) => index !== pos)
  }

  clearCart() {
    this.items = []
  }

}