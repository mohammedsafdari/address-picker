import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAddress } from '../interfaces/address.interface';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  addressServiceURL = "assets/api/addresses/address.json";

  constructor(private http: HttpClient) { }

  addressList: IAddress[];

  appServiceInit(){
    this.http.get(this.addressServiceURL)
    .subscribe(
      res => this.addressList = res as IAddress[]);
  }

  getAllAddresses(){
    return this.addressList;
  }
}
