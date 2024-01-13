package com.example.springrest.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springrest.entity.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient,Long>{
	
}