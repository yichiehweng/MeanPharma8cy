import { Component, OnInit } from '@angular/core';
import{ MedicineService} from '../../services/medicine.service'

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

  medicines: any;

  constructor(private medicineService:MedicineService) { }

  ngOnInit() {
    this.getMedineList();
  }
  getMedineList(){
    this.medicineService.getAllMedicines()
    .then((res)=>{
      this.medicines=res;
      console.log(this.medicines);
    },(err)=>{
      console.log(err);
    });
  }
}
