import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormControl } from '@angular/forms';
import {MedicineService} from '../../services/medicine.service';
import{ Medicine} from '../../models/medicine';

@Component({
  selector: 'app-medicine-add',
  templateUrl: './medicine-add.component.html',
  styleUrls: ['./medicine-add.component.css']
})

export class MedicineAddComponent implements OnInit {

  @ViewChild('theForm')
  newForm: NgForm;
  medicine:any;
  constructor(private medicineService: MedicineService, private router: Router) { }

  ngOnInit() {
  }

  addMedicine(){
    this.medicine={
      code:this.newForm.value.code,
      name:this.newForm.value.name,
      function:this.newForm.value.function
    }
    this.medicineService.addMedicine(this.medicine)
    .then((res)=>{
      let code=res['_id'];
      this.router.navigate(['/medicine-details', code]);
    },(err)=>{
      console.log(err);
    });
  }
}
