import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourierComponent } from './courier/courier.component';
import { CustomersComponent } from './customers/customers.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OrdersComponent } from './orders/orders.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PayoutComponent } from './payout/payout.component';
import { ProfileComponent } from './profile/profile.component';
import { StoresComponent } from './stores/stores.component';
import { UsersComponent } from './users/users.component';
import { WalletComponent } from './wallet/wallet.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "forgotPassword", component: ForgotPasswordComponent },
  { path: "passwordReset", component: PasswordResetComponent },
  { path: "stores", component: StoresComponent },
  { path: "stores/:id", component: StoresComponent },
  // { path: "stores/add", component: StoresComponent },
  // { path: "stores/admin/:id", component: StoresComponent },
  // { path: "stores/admin/:id/approve", component: StoresComponent },
  // { path: "stores/admin/:id/approve/done/:done", component: StoresComponent },
  // { path: "stores/admin/:id/approve/error/:error", component: StoresComponent },
  // { path: "stores/approve", component: StoresComponent },
  // { path: "stores/approve/done/:done", component: StoresComponent },
  // { path: "stores/approve/error/:error", component: StoresComponent },
  // { path: "stores/inventory/:id", component: InventoryComponent },
  { path: "courier", component: CourierComponent },
  { path: "courier/:id", component: CourierComponent },
  { path: "courier/approve", component: CourierComponent },
  { path: "courier/approve/done/:done", component: CourierComponent },
  { path: "courier/approve/error/:error", component: CourierComponent },
  { path: "users", component: UsersComponent },
  { path: "users/:id", component: UsersComponent },
  { path: "users/add", component: UsersComponent },
  { path: "payout", component: PayoutComponent },
  { path: "payout/advise", component: PayoutComponent },
  { path: "payout/request", component: PayoutComponent },
  { path: "customers", component: CustomersComponent },
  { path: "orders", component: OrdersComponent },
  { path: "wallet", component: WalletComponent },
  { path: "profile", component: ProfileComponent },
  { path: "logout", component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
