import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ProductData } from './product-data';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { DialogBoxComponent } from './dialog-box.component';


@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ProductData),
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      {
        path: 'products/:id/edit',
        component: ProductEditComponent
      }
    ]),
    AngularFontAwesomeModule,
    AppMaterialModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    DialogBoxComponent
  ],
  entryComponents : [DialogBoxComponent]
})
export class ProductModule { }
