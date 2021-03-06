import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './modules/core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material.module';
import {UserListComponent} from './modules/user-list/user-list.component';
import {SalamantexApi} from './modules/core/services/salamantex.api';
import {UserEditComponent} from './modules/user-edit/user-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserDetailComponent} from './modules/user-detail/user-detail.component';
import {TransactionListComponent} from './modules/transaction-list/transaction-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserEditComponent,
    UserDetailComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers   : [SalamantexApi],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
