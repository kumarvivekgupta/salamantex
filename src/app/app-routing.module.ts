import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserListComponent} from './modules/user-list/user-list.component';
import {UserEditComponent} from './modules/user-edit/user-edit.component';

const routes: Routes = [
  {
    path      : '',
    redirectTo: '/users-list',
    pathMatch : 'full'
  },

  {
    path     : 'users-list',
    component: UserListComponent,
  },
  {
    path     : 'users-list/:id/edit',
    component: UserEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
