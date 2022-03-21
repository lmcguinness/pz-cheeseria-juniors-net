import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../_services/cheeses.service';
import { CartService } from '../_services/cart.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CheeseCardDialogComponent } from '../cheese-card-dialog/cheese-card-dialog.component';

@Component({
  selector: 'app-cheeses-tab',
  templateUrl: './cheeses-tab.component.html',
  styleUrls: ['./cheeses-tab.component.css'],
})
export class CheesesTabComponent implements OnInit {
  cheeses: [] = [];
  products: [] = [];

  contentLoadedSups: boolean = false;
  contentLoadedProds: boolean = false;
  _currency = 'CDF';
  serverMsg: string;
  errorMsg: any;
  currency: Object;
  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    //fetch products
    this.productService.getCheeses().subscribe((prods) => {
      this.products = prods;
      this.contentLoadedProds = true;
    });
  }

  //Add to cart function
  addToCart(id: number) {
    console.log('Added to cart');
    console.log(id);
    this.cartService.AddProductToCart(id);
  }

  openDialog(cheeseData) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    (dialogConfig.data = {
      title: cheeseData.title,
      category: cheeseData.category,
      description: cheeseData.description,
      price: cheeseData.price
    }),
      this.dialog.open(CheeseCardDialogComponent, dialogConfig);
  }
}
