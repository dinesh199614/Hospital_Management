package com.HMSapp.doc.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HMSapp.doclog.repo.MedicineRepo;
import com.HMSapp.doctor.entity.Medicine;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v3")
public class MedicineController {
	
	public MedicineRepo medicineRepo;

	public MedicineController(MedicineRepo medicineRepo) {
		super();
		this.medicineRepo = medicineRepo;
	}
	
	@PostMapping("/medicine")
	public Medicine creatMedicine (@RequestBody Medicine medicine) {
		
		return this.medicineRepo.save(medicine);
	}
	
	@GetMapping("/medicine")
	public List<Medicine>getAllMedicines(){
		return medicineRepo.findAll();
	}
	

}
