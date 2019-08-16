import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

import { Product } from './product';
import { ProductService } from './product.service';
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from './dialog-box.component';

@Component({
  templateUrl: './product-list-mat.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  errorMessage = '';
  products: Product[] = [];

  displayedColumns: string[] = ['select', 'unitDollar', 'currentMonth', 'nextMonth', 'stock', 'tacticId', 'actions'];
  dataSource: MatTableDataSource<Product> = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable, { static: true }) activeTacticstable: MatTable<any>;


  selection = new SelectionModel<Product>(true, []);


  constructor(private productService: ProductService,
    public dialog: MatDialog) { }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      // if (result.event == 'Add') {
      //   this.addRowData(result.data);
      // } else 
      console.log(`Dialog closed: ${result}`);
      if (result.event == 'Update') {
        this.updateRowData(result.data);
      }
      // else if (result.event == 'Delete') {
      //   this.deleteRowData(result.data);
      // }
    });
  }

  // addRowData(row_obj) {
  //   var d = new Date();
  //   this.products.push({
  //     id: d.getTime(),
  //     currentMonth: row_obj.name
  //   });
  //   this.table.renderRows();
  // }

  updateRowData(row_obj) {

    this.productService.updateProduct(row_obj).subscribe(
      product => {
        console.log(product);
      },
      error => this.errorMessage = <any>error
    );
    this.refresh();
    // this.activeTacticstable.renderRows();
  }

  // deleteRowData(row_obj) {
  //   this.dataSource = this.dataSource.filter((value, key) => {
  //     return value.id != row_obj.id;
  //   });
  // }

  refresh() {
    this.productService.getProducts().subscribe(
      products => {
        this.dataSource.data = products;
      },
      error => this.errorMessage = <any>error
    );
  }


  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.dataSource.data = products;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => this.errorMessage = <any>error
    );

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Product): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row with costing Detail Id ${row.costingDetails}`;
  }

  // rowClicked(row: any): void {
  //   console.log(row);
  // }

  onEditClicked(row: any): void {
    console.log('edit clickd!' + JSON.stringify(row));
  }

  onOKClicked(row: any): void {
    console.log('okay clickd!' + JSON.stringify(row));
  }

  onRejectClicked(row: any): void {
    console.log('reject clickd!' + JSON.stringify(row));
  }


}
