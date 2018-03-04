import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{ MedicineService} from '../../services/medicine.service';
import{ Medicine} from '../../models/medicine'
@Component({
  selector: 'app-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.css']
})
export class MedicineDetailComponent implements OnInit {

  medicine:any;
  constructor(private route: ActivatedRoute, private router: Router, private medicineService: MedicineService) { }

  ngOnInit() {
    this.getMedicineDetail(this.route.snapshot.params['id']);
  }
  getMedicineDetail(id){
    this.medicineService.showMedicine(id)
    .then((res)=>{
      this.medicine=res;
      console.log(this.medicine);
    },(err)=>{
      console.log(err);
    });
  }
  deleteMedicine(id){
    this.medicineService.deleteMedicine(id)
      .then((res)=>{
        this.router.navigate(['/medicine-list']);
      },(err)=>{
        console.log(err);
      });
  }

}
