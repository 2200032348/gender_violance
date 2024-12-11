package com.LoginRegister.example.controller;

import com.LoginRegister.example.entity.VictimDetails;
import com.LoginRegister.example.service.VictimDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/victim-details")
@CrossOrigin(origins = "https://tiny-axolotl-983850.netlify.app")
public class VictimDetailsController {

    @Autowired
    private VictimDetailsService victimDetailsService;

    @PostMapping("/create")
    public VictimDetails createVictimDetails(
            @RequestParam("name") String name,
            @RequestParam("phoneNumber") String phoneNumber,
            @RequestParam("gender") String gender,
            @RequestParam("address") String address,
            @RequestParam(value = "demographics", required = false) String demographics,
            @RequestParam(value = "caseDetails", required = false) String caseDetails,
            @RequestParam("emergencyContact") String emergencyContact,
            @RequestParam("incidentDate") String incidentDate,
            @RequestParam("proofPhoto") MultipartFile proofPhoto
    ) throws IOException {
        return victimDetailsService.createVictimDetails(
                name,
                phoneNumber,
                gender,
                address,
                demographics,
                caseDetails,
                emergencyContact,
                incidentDate,
                proofPhoto
        );
    }

    @GetMapping("/all")
    public List<VictimDetails> getAllVictimDetails() {
        return victimDetailsService.getAllVictimDetails();
    }

    @GetMapping("/{id}")
    public VictimDetails getVictimDetailsById(@PathVariable Long id) {
        return victimDetailsService.getVictimDetailsById(id);
    }
}
