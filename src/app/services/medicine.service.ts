import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MedicineService {

  constructor(private http: Http) { }

  getAllMedicines() {
    return new Promise((resolve, reject) => {
      this.http.get('/medicine')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showMedicine(code) {
    return new Promise((resolve, reject) => {
        this.http.get('/medicine/' + code)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  addMedicine(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/medicine', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateMedicine(code, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/medicine/'+code, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deleteMedicine(code) {
    return new Promise((resolve, reject) => {
        this.http.delete('/medicine/'+code)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}
