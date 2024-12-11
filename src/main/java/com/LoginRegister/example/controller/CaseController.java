
package com.LoginRegister.example.controller;

import com.LoginRegister.example.entity.Case;
import com.LoginRegister.example.entity.LegalAdvisor;
import com.LoginRegister.example.service.CaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cases")
@CrossOrigin(origins = "https://tiny-axolotl-983850.netlify.app")
public class CaseController {

    @Autowired
    private CaseService caseService;

    @PostMapping("/assign/{legalAdvisorId}")
    public ResponseEntity<Case> assignCaseToLegalAdvisor(@RequestBody Case caseDetails,
                                                         @PathVariable Long legalAdvisorId) {
        try {
            Case assignedCase = caseService.assignCaseToLegalAdvisor(caseDetails, legalAdvisorId);
            return ResponseEntity.ok(assignedCase);
        } catch (Exception e) {
            e.printStackTrace();  // Log error for debugging
            return ResponseEntity.status(500).body(null);
        }
    }

    @GetMapping("/legaladvisor/{id}")
    public ResponseEntity<List<Case>> getCasesForLegalAdvisor(@PathVariable Long id) {
        return ResponseEntity.ok(caseService.getCasesForLegalAdvisor(id));
    }

    @GetMapping("/legaladvisors")
    public ResponseEntity<List<LegalAdvisor>> getAllLegalAdvisors() {
        return ResponseEntity.ok(caseService.getAllLegalAdvisors());
    }
}
