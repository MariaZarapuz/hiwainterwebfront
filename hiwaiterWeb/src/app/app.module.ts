import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from '../app/components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { SpaceComponent } from './components/space/space.component';
import { ListTablesComponent } from './components/tables/list-tables/list-tables.component';
import { CommonModule } from '@angular/common';
import { TableDetailComponent } from './components/tables/table-detail/table-detail.component';
import { BodyOrderComponent } from './components/tables/body-order/body-order.component';
import { FormMenuComponent } from './components/menu/form-menu/form-menu.component';
import { ListMenuComponent } from './components/menu/list-menu/list-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ModalLoginComponent,
    SpaceComponent,
    ListTablesComponent,
    TableDetailComponent,
    BodyOrderComponent,
    FormMenuComponent,
    ListMenuComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
