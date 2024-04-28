package com.HMSapp.doc.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.HMSapp.doclog.repo.AppointmentRepo;
import com.HMSapp.doctor.entity.Appointment;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v2")
public class AppointmentController {
	
	private AppointmentRepo appointmentRepo;

	public AppointmentController(AppointmentRepo appointmentRepo) {
		super();
		this.appointmentRepo = appointmentRepo;
	}
	@PostMapping("/appointment")
	public Appointment createAppointment(@RequestBody Appointment appointment) {
		
		return this.appointmentRepo.save(appointment);
	}
	
	@GetMapping("/appointment")
	public List<Appointment>getAllAppointments(){
		return appointmentRepo.findAll();
		}
	
	@DeleteMapping("/appointment/{id}")
	public ResponseEntity<Map<String, Boolean>>deleteAppointment(@PathVariable long id) throws AttributeNotFoundException
	{
		Appointment appointment= appointmentRepo.findById(id).orElseThrow(()->new AttributeNotFoundException("Appointment not found :"+id));
		
		appointmentRepo.delete(appointment);
		
		Map<String, Boolean> response= new HashMap<String,Boolean>();
		
		response.put("Deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
}
