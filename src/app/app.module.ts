import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { NewAccountComponent } from './adminpanel/new-account/new-account.component';
import { HomeComponent } from './home/home.component';
import { BillingComponent } from './work/billing/billing.component';
import { BnfComponent } from './work/bnf/bnf.component';
import { InventoryComponent } from './work/inventory/inventory.component';
import { NotificationComponent } from './work/notification/notification.component';
import { ReportsComponent } from './work/reports/reports.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { AuthInterceptor } from './auth/auth-interceptor';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';





@NgModule({
  declarations: [
    AppComponent,
    AdminpanelComponent,
    NewAccountComponent,
    HomeComponent,
    BillingComponent,
    BnfComponent,
    InventoryComponent,
    NotificationComponent,
    ReportsComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule, 
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
