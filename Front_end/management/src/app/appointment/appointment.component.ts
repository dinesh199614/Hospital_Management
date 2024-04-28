import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';
import { AdminaouthService } from '../adminaouth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'] 
})
export class AppointmentComponent implements OnInit {

  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService ,private  adminaouthService:AdminaouthService,private router:Router) {}

  ngOnInit(): void {
    this.getAppointment();
  }

  getAppointment() {
    this.appointmentService.getAllAppointments().subscribe(data => {
      this.appointments = data;
    });
  }
  delete(id:number){

    this.appointmentService.deleteAppointment(id).subscribe(data=>{
      console.log(data);
      this.getAppointment();
    });

  }

  logout(){

    this.adminaouthService.logOut();
    this.router.navigate(['home'])

  }

}
