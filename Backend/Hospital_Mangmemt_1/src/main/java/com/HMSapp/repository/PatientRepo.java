package com.HMSapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HMSapp.entity.Patient;

@Repository
public interface PatientRepo extends JpaRepository<Patient, Long> {

}
