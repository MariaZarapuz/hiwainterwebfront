import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SpaceComponent } from './components/space/space.component';
import { ListTablesComponent } from './components/tables/list-tables/list-tables.component';
import { TableDetailComponent } from './components/tables/table-detail/table-detail.component';
import { FormMenuComponent } from './components/menu/form-menu/form-menu.component';
import { ListMenuComponent } from './components/menu/list-menu/list-menu.component';
import { KitchenComponent } from './components/kitchen/kitchen/kitchen.component';
import { FormModifyComponent } from './components/menu/form-modify/form-modify.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'space', component: SpaceComponent },
  { path: 'listTables', component: ListTablesComponent },
  { path: 'tableDetail/:id', component: TableDetailComponent },
  { path: 'menu', component: ListMenuComponent },
  { path: 'menu/form-menu', component: FormMenuComponent },
  { path: 'menu/form-menu/modify/:id', component: FormModifyComponent },
  { path: 'kitchen', component: KitchenComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
