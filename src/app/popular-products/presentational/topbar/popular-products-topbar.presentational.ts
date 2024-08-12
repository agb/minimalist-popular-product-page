import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { filterType, filterTypes } from '../../dto/filter-type.dto';

@Component({
  selector: 'app-popular-products-topbar-presentational',
  standalone: true,
  imports: [
    MatMenuModule,
    CommonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  templateUrl: './popular-products-topbar.presentational.html',
  styleUrl: './popular-products-topbar.presentational.scss',
})
export class PopularProductsTopbarPresentational {
  @Output() filterTypeEvent: EventEmitter<filterType> =
    new EventEmitter<filterType>();
  filterType: filterType = filterTypes.votes;
  filterTypes = filterTypes;

  // Alternatively, we can use mat-select and dynamicAngularForm

  changeFilterType(type: filterType) {
    this.filterTypeEvent?.emit(type);
    this.filterType = type;
  }
}
