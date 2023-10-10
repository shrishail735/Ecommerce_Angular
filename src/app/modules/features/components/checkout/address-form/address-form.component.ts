import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {

  addresses=[1,1,1,1,1,1,1];
  myForm:FormGroup = this.formBuilder.group({
    firstName:["",Validators.required],
    lastName:["",Validators.required],
    streetAddress:["",Validators.required],
    city:["",Validators.required],
    state:["",Validators.required],
    zipCode:["",Validators.required],
    phoneNumber:["",Validators.required],
  })
  constructor(private formBuilder:FormBuilder)
  {}
  handleCreateOrder(address:any)
  {

  }
  handleSubmit()
  {
    const formValues=this.myForm.value;
    
    console.log(formValues)
  }
}
