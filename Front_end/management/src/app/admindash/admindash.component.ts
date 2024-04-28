import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { AdminaouthService } from '../adminaouth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css'] 
})
export class AdmindashComponent implements OnInit {

  patients: Patient[] = [];

  constructor(private patientService: PatientService, private adminaouthService :AdminaouthService, private router:Router ) {}

  ngOnInit(): void {
    this.getPatients();
  }


  private getPatients(){
    this.patientService.getPatientsList().subscribe(data => { this.patients = data; 
    });

  }

  delete(id:number){

    this.patientService.delete(id).subscribe(data=>{
      console.log(data);
      this.getPatients();

    });

  }

    logout() {

      this.adminaouthService.logOut();
      this.router.navigate(['home'])

    

  }
}

