package com.LoginRegister.example.controller;
import com.LoginRegister.example.entity.LegalRights;
import com.LoginRegister.example.service.LegalRightsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/legal-rights")
@CrossOrigin(origins = "https://tiny-axolotl-983850.netlify.app")
public class LegalRightsController {

    private final LegalRightsService legalRightsService;

    public LegalRightsController(LegalRightsService legalRightsService) {
        this.legalRightsService = legalRightsService;
    }

    @GetMapping
    public ResponseEntity<List<LegalRights>> getAllLegalRights() {
        return ResponseEntity.ok(legalRightsService.getAllLegalRights());
    }

    @PostMapping
    public ResponseEntity<LegalRights> addLegalRight(@RequestBody LegalRights legalRight) {
        return ResponseEntity.ok(legalRightsService.addLegalRight(legalRight));
    }
}
