package com.LoginRegister.example.service;

import com.LoginRegister.example.entity.VictimDetails;
import com.LoginRegister.example.repository.VictimDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

@Service
public class VictimDetailsService {

    @Autowired
    private VictimDetailsRepository victimDetailsRepository;

    private final String uploadDir = "C:\\uploads\\"; // Change the path as per your environment

    public VictimDetails createVictimDetails(
            String name,
            String phoneNumber,
            String gender,
            String address,
            String demographics,
            String caseDetails,
            String emergencyContact,
            String incidentDate,
            MultipartFile proofPhoto
    ) throws IOException {

        // Ensure upload directory exists
        File uploadDirectory = new File(uploadDir);
        if (!uploadDirectory.exists()) {
            uploadDirectory.mkdir();
        }

        // Save the file
        String filePath = uploadDir + proofPhoto.getOriginalFilename();
        proofPhoto.transferTo(new File(filePath));

        // Map data to the entity
        VictimDetails victimDetails = new VictimDetails();
        victimDetails.setName(name);
        victimDetails.setPhoneNumber(phoneNumber);
        victimDetails.setGender(gender);
        victimDetails.setAddress(address);
        victimDetails.setDemographics(demographics);
        victimDetails.setCaseDetails(caseDetails);
        victimDetails.setEmergencyContact(emergencyContact);
        victimDetails.setIncidentDate(LocalDate.parse(incidentDate));
        victimDetails.setProofPhotoPath(filePath);

        // Save to database
        return victimDetailsRepository.save(victimDetails);
    }

    public List<VictimDetails> getAllVictimDetails() {
        return victimDetailsRepository.findAll();
    }

    public VictimDetails getVictimDetailsById(Long id) {
        return victimDetailsRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Victim details not found with id: " + id));
    }
}
