package com.example.springrest.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springrest.Dao.DoctorRepository;
import com.example.springrest.Dao.PatientRepository;
import com.example.springrest.entity.Doctor;
import com.example.springrest.entity.Patient;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class MyController {
	
	@Autowired
	private PatientRepository patientRepo;
	
	@Autowired
	private DoctorRepository docRepo;
	
	@GetMapping("/patients")
	public List<Patient> getPatient(){
		return this.patientRepo.findAll();	
	}
	
	@GetMapping("patients/{patient_id}")
	public ResponseEntity<Patient> getPatient(@PathVariable() String patient_id) {
		Patient patient = this.patientRepo.getOne(Long.parseLong(patient_id));
		return ResponseEntity.ok(patient);
	}
	
	@GetMapping("doctors/{doctor_id}")
	public ResponseEntity<Doctor> getDoctor(@PathVariable() String doctor_id) {
		Doctor doctor = this.docRepo.getOne(Long.parseLong(doctor_id));
		return ResponseEntity.ok(doctor);
	}
	
	@GetMapping("/doctors")
	public List<Doctor> getDoctors(){
		return this.docRepo.findAll();	
	}
	
	@PostMapping("/patients")
	public Patient addPatient(@RequestBody Patient patient) {
		this.patientRepo.save(patient);
		return patient;
	}

	@PutMapping("/patients/{patient_id}")
	public ResponseEntity<Patient> updatePatient(@PathVariable String patient_id, @RequestBody Patient patient_details){
		Patient patient = patientRepo.getOne(Long.parseLong(patient_id));
		//patient.setPatient_id(patient_details.getPatient_id());
		patient.setPatient_name(patient_details.getPatient_name());
		patient.setGender(patient_details.getGender());
		patient.setAddress(patient_details.getAddress());
		patient.setContact_no(patient_details.getContact_no());
		patient.setEmail_id(patient_details.getEmail_id());
		patient.setPassword(patient_details.getPassword());
		patient.setApp_date(patient_details.getApp_date());
		patient.setPayment(patient_details.getPayment());
		//patient.setDoctor(patient_details.getDoctor());
		Patient updatedPatient = patientRepo.save(patient);
		return ResponseEntity.ok(updatedPatient);
	}
	@PutMapping("/doctors/{doctor_id}")
	public ResponseEntity<Doctor> updateDoctor(@PathVariable String doctor_id, @RequestBody Doctor doctor_details){
		Doctor doctor = docRepo.getOne(Long.parseLong(doctor_id));
		//doctor.setDoctor_id(doctor_details.getDoctor_id());
		doctor.setDoctor_name(doctor_details.getDoctor_name());
		doctor.setGender(doctor_details.getGender());
		doctor.setAddress(doctor_details.getAddress());
		doctor.setContact_no(doctor_details.getContact_no());
		doctor.setEmail_id(doctor_details.getEmail_id());
		doctor.setPassword(doctor_details.getPassword());
		doctor.setSpecialist(doctor_details.getSpecialist());
		
		Doctor updatedDoctor = docRepo.save(doctor);
		return ResponseEntity.ok(updatedDoctor);
	}
	
	@PostMapping("/doctors")
	public Doctor addDoctor(@RequestBody Doctor doctor) {
		this.docRepo.save(doctor);
		return doctor;
	}
	
	@DeleteMapping("/patients/{patientId}")
	public void deletePatient(@PathVariable String patientId){
		Patient entity = this.patientRepo.getOne(Long.parseLong(patientId));
		this.patientRepo.delete(entity);
	}
	
	@DeleteMapping("/doctors/{doctorId}")
	public void deleteDoctor(@PathVariable String doctorId){
		Doctor entity = this.docRepo.getOne(Long.parseLong(doctorId));
		this.docRepo.delete(entity);
	}
}