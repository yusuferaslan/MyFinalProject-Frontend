import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductComponent }, //Anasayfada (http://localhost:4200/) gösterilecek komponent
  { path: 'products', component: ProductComponent }, //Anasayfa sonuna products eklerse (http://localhost:4200/products) gösterilecek komponent
  { path: "products/category/:categoryId", component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
