import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {DisableControlDirective} from './Directives/form-disable';

@NgModule({
  declarations: [DisableControlDirective],
  imports     : [
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
  ],
  exports     : [DisableControlDirective],
  providers   : []
})
export class CoreModule {
}
