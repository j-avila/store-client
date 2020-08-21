import { Component } from '@angular/core'
import { ProductsService } from '../products.service'
import { CartService } from '../cart.service';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
	products: Object
	quantity: number
	productAdded: object

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

	onChange(event: any) {
		this.quantity = event.target.value
	}

	addToCart(product: {}) {
		this.productAdded = { ...product, quantity: this.quantity }
		this.cartService.addToCart(this.productAdded)
		window.alert('your product has been added to the cart')
	}
}

