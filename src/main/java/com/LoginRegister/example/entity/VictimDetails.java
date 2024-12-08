package com.LoginRegister.example.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "victim_details") // Database table name
public class VictimDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @Column(name = "phone_number", nullable = false, length = 15)
    private String phoneNumber;

    @Column(name = "gender", nullable = false, length = 10)
    private String gender;

    @Column(name = "address", nullable = false, length = 255)
    private String address;

    @Column(name = "demographics", length = 100)
    private String demographics;

    @Column(name = "case_details", length = 500)
    private String caseDetails;

    @Column(name = "emergency_contact", nullable = false, length = 15)
    private String emergencyContact;

    @Column(name = "incident_date", nullable = false)
    private LocalDate incidentDate;

    @Column(name = "proof_photo_path", nullable = false, length = 255)
    private String proofPhotoPath;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
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

    public String getDemographics() {
        return demographics;
    }

    public void setDemographics(String demographics) {
        this.demographics = demographics;
    }

    public String getCaseDetails() {
        return caseDetails;
    }

    public void setCaseDetails(String caseDetails) {
        this.caseDetails = caseDetails;
    }

    public String getEmergencyContact() {
        return emergencyContact;
    }

    public void setEmergencyContact(String emergencyContact) {
        this.emergencyContact = emergencyContact;
    }

    public LocalDate getIncidentDate() {
        return incidentDate;
    }

    public void setIncidentDate(LocalDate incidentDate) {
        this.incidentDate = incidentDate;
    }

    public String getProofPhotoPath() {
        return proofPhotoPath;
    }

    public void setProofPhotoPath(String proofPhotoPath) {
        this.proofPhotoPath = proofPhotoPath;
    }
}
