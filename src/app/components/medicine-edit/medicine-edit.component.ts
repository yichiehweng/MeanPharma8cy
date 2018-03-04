import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormControl } from '@angular/forms';
import { MedicineService } from '../../services/medicine.service';
import{ Medicine} from '../../models/medicine';

@Component({
  selector: 'app-medicine-edit',
  templateUrl: './medicine-edit.component.html',
  styleUrls: ['./medicine-edit.component.css']
})
export class MedicineEditComponent implements OnInit {
  // @ViewChild('theForm')
  // newForm: NgForm;
  theMedicine:any;

  constructor(private router: Router, private route: ActivatedRoute,private medicineService: MedicineService ) { }

  ngOnInit() {
    this.getTheMedicine(this.route.snapshot.params['id']);
  }
  getTheMedicine(id){
    this.medicineService.showMedicine(id)
    .then((res)=>{
      this.theMedicine=res;
      console.log(res)
    },(err)=>{
      console.log(err);
    });
  }
  updateMedicine(id){
    this.medicineService.updateMedicine(id, this.theMedicine)
    .then((result)=>{
      let code=result['_id'];
      this.router.navigate(['/medicine-details/', id]);
    },(err)=>{
      console.log(err);
    });
  }

}
