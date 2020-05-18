import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { NewAccountComponent } from './adminpanel/new-account/new-account.component';
import { BillingComponent } from './work/billing/billing.component';
import { BnfComponent } from './work/bnf/bnf.component';
import { InventoryComponent } from './work/inventory/inventory.component';
import { NotificationComponent } from './work/notification/notification.component';
import { ReportsComponent } from './work/reports/reports.component';


const routes: Routes = [
   { path: '', component: HomeComponent},
   { path: 'adminpanel', component: AdminpanelComponent},
   { path: 'new-account', component: NewAccountComponent},
   { path: 'billing', component: BillingComponent},
   { path: 'bnf', component: BnfComponent},
   { path: 'inventory', component: InventoryComponent},
   { path: 'notification', component: NotificationComponent},
   { path: 'reports', component: ReportsComponent}

];

@NgModule({
  //declarations: [], 
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
