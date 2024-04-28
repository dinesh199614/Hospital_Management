package com.HMSapp.doclog.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HMSapp.doctor.entity.Appointment;

@Repository
public interface AppointmentRepo extends JpaRepository<Appointment,Long>{

}
