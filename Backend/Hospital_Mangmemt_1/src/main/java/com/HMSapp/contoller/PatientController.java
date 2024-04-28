package com.HMSapp.contoller;

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

import com.HMSapp.entity.Patient;
import com.HMSapp.repository.PatientRepo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class PatientController {

	private PatientRepo patientRepo;

	public PatientController(PatientRepo patientRepo) {
		super();
		this.patientRepo = patientRepo;
	}

	@PostMapping("/patient")
	public Patient createPatient(@RequestBody Patient patient) {

		return patientRepo.save(patient);

	}

	@GetMapping("/patient")
	public List<Patient> getAllPatients() {
		return patientRepo.findAll();
	}


	@DeleteMapping("/patient/{id}")
	public ResponseEntity<Map<String, Boolean>>deletepatient(@PathVariable long id) throws AttributeNotFoundException
	{
		Patient patient =patientRepo.findById(id).orElseThrow(() -> new AttributeNotFoundException("patient not found with id :"+id));
		
		patientRepo.delete(patient);
		Map<String, Boolean> response=new HashMap<String,Boolean>();
		
		response.put("Deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}

}
