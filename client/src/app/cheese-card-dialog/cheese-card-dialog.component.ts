import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cheese } from '../_models/cheese';

@Component({
  selector: 'app-cheese-card-dialog',
  templateUrl: './cheese-card-dialog.component.html',
  styleUrls: ['./cheese-card-dialog.component.css'],
})
export class CheeseCardDialogComponent implements OnInit {
  cheeseData;
  isRecentPurchase = false;

  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.cheeseData = data.cheeseCardData;
  }

  ngOnInit(): void {
    if (this.cheeseData.length > 0) {
      this.isRecentPurchase = true;
    } else {
      this.isRecentPurchase = false;
    }
  }
}
