import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-appointment',
  templateUrl: './creat-appointment.component.html',
  styleUrl: './creat-appointment.component.css'
})
export class CreatAppointmentComponent {

  appointment:Appointment=new Appointment();

  constructor(private appointmentService:AppointmentService,private router:Router){}


  saveAppointment(){
    this.appointmentService.createAppointment(this.appointment).subscribe(data=>{

      console.log(data);
      this.goToApponitment();
    })
  }
  onSubmit(){

    this.saveAppointment();

  }

  goToApponitment(){
    this.router.navigate(['/appointment'])
  }
}
