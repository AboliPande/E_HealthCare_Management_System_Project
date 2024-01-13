package com.example.springrest.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springrest.entity.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor,Long>{
	
}