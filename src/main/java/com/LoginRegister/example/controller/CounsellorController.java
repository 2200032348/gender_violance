package com.LoginRegister.example.controller;

import com.LoginRegister.example.entity.CounsellorRegister;
import com.LoginRegister.example.service.CounsellorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/counsellors")
@CrossOrigin(origins = "http://localhost:5177")
public class CounsellorController {

    @Autowired
    private CounsellorService service;

    // Register Counsellor
    @PostMapping("/register")
    public ResponseEntity<?> registerCounsellor(@RequestBody CounsellorRegister counsellor) {
        try {
           CounsellorRegister  savedCounsellor = service.saveCounsellor(counsellor);
            return ResponseEntity.ok(savedCounsellor);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error registering counsellor: " + e.getMessage());
        }
    }

    // Login Counsellor
    @PostMapping("/login")
    public ResponseEntity<?> loginCounsellor(@RequestBody CounsellorRegister counsellor) {
        try {
            CounsellorRegister existingCounsellor = service.findByUsernameAndPassword(counsellor.getUsername(), counsellor.getPassword());
            if (existingCounsellor != null) {
                return ResponseEntity.ok("Login successful");
            } else {
                return ResponseEntity.status(401).body("Invalid username or password");
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error during login: " + e.getMessage());
        }
    }
}
