import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserListComponent} from './modules/user-list/user-list.component';
import {UserEditComponent} from './modules/user-edit/user-edit.component';
import {UserDetailComponent} from './modules/user-detail/user-detail.component';

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
  },
  {
    path     : 'users-list/:id/detail',
    component: UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
