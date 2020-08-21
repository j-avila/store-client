import { Component } from '@angular/core'
import { ProductsService } from '../products.service'
import { CartService } from '../cart.service';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
	products

	constructor(private productService: ProductsService, private cartService: CartService) { }

	ngOnInit() {
		this.productService.getItems()
			.subscribe(
				data => {
					this.products = data
				},
				error => {
					console.log(error)
				}
			)
	}

	share() {
		window.alert('The product has been shared!')
	}

	onNotify() {
		window.alert('We will notify you when the product goes on sale')
	}


	addToCart(product) {
		this.cartService.addToCart(product)
		window.alert('your product has been added to the cart')
	}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
