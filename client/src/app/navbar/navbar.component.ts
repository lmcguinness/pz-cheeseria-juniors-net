import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { CartModelPublic } from '../_models/cart';
import { Cheese } from '../_models/cheese';
import { ProductsService } from '../_services/cheeses.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CheeseCardDialogComponent } from '../cheese-card-dialog/cheese-card-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartData: CartModelPublic;
  cartSize: number;
  cartTotal: number;
  _message: string;
  products: Cheese[];
  recentItemsPurchased: Cheese[];

  store: any = [];
  logo: any;

  constructor(
    private cartService: CartService,
    private productsService: ProductsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    // set the products locally
    this.cartService.productData$.subscribe((data) => {
      this.products = data;
    });

    this.cartService.cartDataObs$.subscribe((data) => {
      this.cartData = data;
      this.cartSize = Object.entries(data).reduce(
        (total, val) => total + val[1],
        0
      );
    });
  }

  // Increments the number of items in cart if value is positive,
  // or decrements if negative
  changeItemAmount(id: string, value: number) {
    this.cartService.ModifyProductCount(id, value);
  }

  // returns the details for the specified cheese
  getDetails(id: string): Cheese {
    const details = this.products.filter(
      (product) => product.id === parseInt(id)
    );
    return details[0];
  }

  // calculates the total cart cost
  calculateTotal() {
    return Object.entries(this.cartData).reduce(
      (total, [key, value]) => total + this.getDetails(key).price * value,
      0
    );
  }

  onPurchaseClick() {
    this.manageCartItems(this.cartData);
  }

  manageCartItems(cartData) {
    const purchasedItems: Cheese[] = [];
    for (let key in cartData) {
      const itemDetails = this.getDetails(key);
      purchasedItems.push(itemDetails);
    }
    this.productsService.purchaseItem(purchasedItems).subscribe((data) => {
    });
  }

  getRecentPurchases() {
    this.productsService
      .getRecentPurchases()
      .subscribe((recentItemsPurchased) => {
        this.recentItemsPurchased = recentItemsPurchased;
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        (dialogConfig.data = {
          cheeseCardData: this.recentItemsPurchased,
        }),
          this.dialog.open(CheeseCardDialogComponent, dialogConfig);
      });
  }
}
