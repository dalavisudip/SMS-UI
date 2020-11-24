import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
@Component({
  selector: 'app-add-edit-profile',
  templateUrl: './add-edit-profile.component.html',
  styleUrls: ['./add-edit-profile.component.css']
})
export class AddEditProfileComponent implements OnInit {
  newDataForm: FormGroup;
  selectedStartMoment = new Date();
  selectedEndMoment =new Date();
  public params :any
  constructor( private fb: FormBuilder,public activeModal: NgbActiveModal,public dataservice:DataService) { }

  ngOnInit() {
    this.newDataForm = this.fb.group({  
      Data: this.fb.group({ 
      city: ['', [Validators.required, Validators.maxLength(25)]],
      startDate: ['', [Validators.maxLength(25), Validators.pattern('^[a-zA-Z ]*$')]],
      endDate: ['', [Validators.maxLength(25), Validators.pattern('^[a-zA-Z ]*$')]],
      Price: ['', [Validators.required, Validators.email]],
      status:['', [Validators.maxLength(25), Validators.pattern('^[a-zA-Z ]*$')]],
      color: ['', [Validators.required,Validators.maxLength(10),Validators.minLength(10) ,Validators.pattern('^[0-9]*$')]],    
    })
    })
  }


  saveData(){
    // console.log('City' + this.newDataForm.controls.Data.value.city);
    // console.log('Start date' + this.newDataForm.controls.Data.value.startDate);
    // console.log('End date' + this.newDataForm.controls.Data.value.endDate);
    // console.log('Price' + this.newDataForm.controls.Data.value.Price);
    // console.log('status' + this.newDataForm.controls.Data.value.status);
    // console.log('color' + this.newDataForm.controls.Data.value.color);

    
    this.params = Object.assign({'city' : this.newDataForm.controls.Data.value.city,'start_date':this.newDataForm.controls.Data.value.startDate,
    'end_date':this.newDataForm.controls.Data.value.endDate,"price":this.newDataForm.controls.Data.value.Price,'status':this.newDataForm.controls.Data.value.status,
  'color': this.newDataForm.controls.Data.value.color})

  this.dataservice.insertdata(this.params).subscribe((res =>{
    if(res){
      console.log(res)
    }
  }))
  }

}
