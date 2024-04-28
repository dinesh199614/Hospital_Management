package com.HMSapp.doclog.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HMSapp.doctor.entity.Medicine;

@Repository
public interface MedicineRepo extends JpaRepository<Medicine, Long>{

}
