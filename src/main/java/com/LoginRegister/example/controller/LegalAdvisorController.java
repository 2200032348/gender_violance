package com.LoginRegister.example.controller;

import com.LoginRegister.example.entity.LegalAdvisor;
import com.LoginRegister.example.service.LegalAdvisorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/legaladvisors")
@CrossOrigin(origins = "https://tiny-axolotl-983850.netlify.app")
public class LegalAdvisorController {

    private final LegalAdvisorService legalAdvisorService;

    @Autowired
    public LegalAdvisorController(LegalAdvisorService legalAdvisorService) {
        this.legalAdvisorService = legalAdvisorService;
    }

    // Register a legal advisor
    @PostMapping("/register")
    public ResponseEntity<LegalAdvisor> registerLegalAdvisor(@RequestBody LegalAdvisor legalAdvisor) {
        LegalAdvisor savedLegalAdvisor = legalAdvisorService.saveLegalAdvisor(legalAdvisor);
        return ResponseEntity.ok(savedLegalAdvisor);
    }

    // Login legal advisor
    @PostMapping("/login")
    public ResponseEntity<String> loginLegalAdvisor(@RequestBody LegalAdvisor loginDetails) {
        LegalAdvisor legalAdvisor = legalAdvisorService.authenticate(loginDetails.getUsername(), loginDetails.getPassword());

        if (legalAdvisor != null) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
    }
}
