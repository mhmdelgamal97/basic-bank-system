import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTransactionsComponent } from './pages/all-transactions/all-transactions.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"all",component:AllUsersComponent},
  {path:"user/:id",component:UserComponent},
  {path:"transactions",component:AllTransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
