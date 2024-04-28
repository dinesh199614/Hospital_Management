import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrls: ['./docdash.component.css'] // Corrected styleUrl to styleUrls
})
export class DocdashComponent implements OnInit { // Implement OnInit interface

  constructor(private patientService: PatientService) {}

  patients: Patient[] = [];

  ngOnInit(): void {
    this.getPatients(); // Corrected method name and added parentheses
  }

  getPatients() { // Corrected method name

    this.patientService.getPatientsList().subscribe(data => {
      this.patients = data;
    });
  }

  logout(){

  
  }

}
