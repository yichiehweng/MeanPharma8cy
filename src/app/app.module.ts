import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { MedicineService } from './services/medicine.service';
import{ MedicineListComponent} from './components/medicine-list/medicine-list.component';
import { MedicineDetailComponent } from './components/medicine-detail/medicine-detail.component';
import { MedicineEditComponent } from './components/medicine-edit/medicine-edit.component';
import { MedicineAddComponent } from './components/medicine-add/medicine-add.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'medicine-list', pathMatch: 'full' },
  { path: 'medicine-list', component: MedicineListComponent },
  { path: 'medicine-details/:id', component: MedicineDetailComponent },
  { path: 'medicine-add', component: MedicineAddComponent },
  { path: 'medicine-edit/:id', component: MedicineEditComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    MedicineListComponent,
    MedicineDetailComponent,
    MedicineEditComponent,
    MedicineAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MedicineService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
