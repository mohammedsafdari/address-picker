import { Component, ViewEncapsulation } from '@angular/core';
import { AddressService } from './services/address.service';
import { IAddress } from './interfaces/address.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { ModalService } from 'modal-lib';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AA-address-poc';

  constructor(private service:AddressService, 
    //private modalService: ModalService, 
    private modalService: ModalService){
    this.contactForm = this.createFormGroup();
    this.createFormControl();
  }

  addressList: IAddress[]= [
    {
    "add1": "105",
    "add2": "Saifee Nagar",
    "add3" : "Khatiwala Tank",
    "town" : "indore",
    "county" : "MP",
    "postCode" : 100100
    },
    {
    "add1": "106",
    "add2": "Anand Nagar",
    "add3" : "Mhow",
    "town" : "indore",
    "county" : "MP",
    "postCode" : 100100
    },
    {
    "add1": "107",
    "add2": "Sangam Nagar",
    "add3" : "Near Airport",
    "town" : "indore",
    "county" : "MP",
    "postCode" : 100100
    },
    {
    "add1": "108",
    "add2": "Saket Nagar",
    "add3" : "Saket",
    "town" : "Mumbai",
    "county" : "Mumbai District",
    "postCode" : 100101
    },
    {
    "add1": "109",
    "add2": "Kharadi Nagar",
    "add3" : "Kharadi",
    "town" : "Pune",
    "county" : "Pune District",
    "postCode" : 100102
    }
    ];

  ngOnInit(){
    //this.addressList = this.service.getAllAddresses();
    this.count = 0;
    this.selectedAdd = false;
    this.noAddress = false;
  }

  count: number;
  filteredAddressList: IAddress[] = [];
  selectedAddress: IAddress;
  selectedAdd: boolean = false;
  noAddress = false;
  radioValue1 = 100;
  radioValue2 = 200;

  findAddress(){
    this.addressDropDown.setValue(null)
    this.count = 0;
    this.filteredAddressList = [];
    this.selectedAdd = false;
    for(let item of this.addressList)
    {
      if(item.postCode == this.contactForm.get('search').value){
        this.count++;
        this.filteredAddressList.push(item);
      }
    }

    if(this.count == 0)
      this.noAddress = true;

    else if(this.count == 1)
    {
      this.selectedAddress = this.filteredAddressList[0]
      // for(let item of this.filteredAddressList)
      // {
      //   this.selectedAddress = item;
      // }
      this.showAddress();
    }

    else {
      this.openModal('custom-modal-1');
    }
  }

  setSelectedAddress(){
    this.selectedAddress = this.addressDropDown.value;
  }

  showAddress(){
    this.selectedAdd = true;
    this.closeModal('custom-modal-1');
  }

//Create Reactive Form

contactForm: FormGroup;

createFormGroup() {
  return new FormGroup({
    search: new FormControl(null,[Validators.required, Validators.pattern('^[0-9]*')])
  });
}

revert() {
  this.contactForm.reset();
}

//Create Drop Down Form Control

addressDropDown: FormControl;
radioButton: FormControl;

createFormControl() {
  this.addressDropDown = new FormControl(null,Validators.required)
  this.radioButton = new FormControl(this.radioValue1)
}

//Modal Open and Close Methods

openModal(id: string) {
  this.modalService.open(id);
}

closeModal(id: string) {
  this.modalService.close(id);
}
}

