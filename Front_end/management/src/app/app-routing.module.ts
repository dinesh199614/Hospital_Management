import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreatAppointmentComponent } from './creat-appointment/creat-appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdminlogComponent } from './adminlog/adminlog.component';
import { AdmingaurdService } from './admingaurd.service';

const routes: Routes = [
  {path:'admin', component:AdmindashComponent, canActivate:[AdmingaurdService]},
  {path:'appointment',component:AppointmentComponent},
  {path:'create-appointment',component:CreatAppointmentComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'docdash',component:DocdashComponent},
  {path:'create-patient',component:CreatePatientComponent},
  {path:'view-medicine',component:MedicinelistComponent},
  {path:'doclogin',component:DocloginComponent},
  {path:'adminlog',component:AdminlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
