package com.example.springrest.entity;

import java.util.Date;


import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;



@Entity
public class Patient {
	//@GeneratedValue(strategy=GenerationType.AUTO)
	@Id
	private long patient_id;
	private String patient_name;
	private String gender;
	private String address;
	private String contact_no;
	private String email_id;
	private String password;
	private Date app_date;
	private String payment;
	public Patient() {
		super();
	}

	public long getPatient_id() {
		return patient_id;
	}

	public void setPatient_id(long patient_id) {
		this.patient_id = patient_id;
	}

	public String getPatient_name() {
		return patient_name;
	}

	public void setPatient_name(String patient_name) {
		this.patient_name = patient_name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getContact_no() {
		return contact_no;
	}

	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getApp_date() {
		return app_date;
	}

	public void setApp_date(Date app_date) {
		this.app_date = app_date;
	}

	public String getPayment() {
		return payment;
	}

	public void setPayment(String payment) {
		this.payment = payment;
	}

	public Patient(long patient_id, String patient_name, String gender, String address, String contact_no,
			String email_id, String password, Date app_date, String payment) {
		super();
		this.patient_id = patient_id;
		this.patient_name = patient_name;
		this.gender = gender;
		this.address = address;
		this.contact_no = contact_no;
		this.email_id = email_id;
		this.password = password;
		this.app_date = app_date;
		this.payment = payment;
	}
	

	@Override
	public String toString() {
		return "Patient [patient_id=" + patient_id + ", patient_name=" + patient_name + ", gender=" + gender
				+ ", address=" + address + ", contact_no=" + contact_no + ", email_id=" + email_id + ", password="
				+ password + ", app_date=" + app_date + ", payment=" + payment;
	}
}