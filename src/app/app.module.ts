import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddressService } from './services/address.service';
// MDB Angular Free
import { ModalModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalLibModule, ModalService } from 'modal-lib';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    ModalLibModule
  ],
  providers: [AddressService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
