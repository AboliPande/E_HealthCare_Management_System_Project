package com.example.springrest.entity;


import java.util.List;

import jakarta.persistence.*;

@Entity
public class Doctor {
	//@GeneratedValue(strategy=GenerationType.AUTO)
	@Id
	private long doctor_id;
	private String doctor_name;
	private String gender;
	private String specialist;
	private String address;
	private String contact_no;
	private String email_id;
	private String password;
	
	public Doctor() {
		super();
	}
	public Doctor(long doctor_id, String doctor_name, String gender, String specialist, String address,
			String contact_no, String email_id, String password) {
		super();
		this.doctor_id = doctor_id;
		this.doctor_name = doctor_name;
		this.gender = gender;
		this.specialist = specialist;
		this.address = address;
		this.contact_no = contact_no;
		this.email_id = email_id;
		this.password = password;
	}
	
	public long getDoctor_id() {
		return doctor_id;
	}
	public void setDoctor_id(long doctor_id) {
		this.doctor_id = doctor_id;
	}
	public String getDoctor_name() {
		return doctor_name;
	}
	public void setDoctor_name(String doctor_name) {
		this.doctor_name = doctor_name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getSpecialist() {
		return specialist;
	}
	public void setSpecialist(String specialist) {
		this.specialist = specialist;
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
	
	@Override
	public String toString() {
		return "Doctor [doctor_id=" + doctor_id + ", doctor_name=" + doctor_name + ", gender=" + gender
				+ ", specialist=" + specialist + ", address=" + address + ", contact_no=" + contact_no + ", email_id="
				+ email_id + ", password=" + password + "]";
	}
}