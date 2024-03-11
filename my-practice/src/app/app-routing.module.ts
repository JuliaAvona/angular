import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TodoComponent } from './todo/todo.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './shop/product/product.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'shop',
    component: ShopComponent,
    children: [
      { path: '', component: ShopComponent },
      { path: 'products/:id', component: ProductComponent }
    ] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
