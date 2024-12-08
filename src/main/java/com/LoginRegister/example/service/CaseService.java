
package com.LoginRegister.example.service;

import com.LoginRegister.example.entity.Case;
import com.LoginRegister.example.entity.LegalAdvisor;
import com.LoginRegister.example.repository.CaseRepository;
import com.LoginRegister.example.repository.LegalAdvisorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CaseService {

    @Autowired
    private CaseRepository caseRepository;

    @Autowired
    private LegalAdvisorRepository legalAdvisorRepository;

    public Case assignCaseToLegalAdvisor(Case caseDetails, Long legalAdvisorId) {
        LegalAdvisor legalAdvisor = legalAdvisorRepository.findById(legalAdvisorId)
                .orElseThrow(() -> new RuntimeException("Legal Advisor not found"));
        caseDetails.setLegalAdvisor(legalAdvisor);
        return caseRepository.save(caseDetails);
    }

    public List<Case> getCasesForLegalAdvisor(Long legalAdvisorId) {
        LegalAdvisor legalAdvisor = legalAdvisorRepository.findById(legalAdvisorId)
                .orElseThrow(() -> new RuntimeException("Legal Advisor not found"));
        return caseRepository.findByLegalAdvisor(legalAdvisor);
    }

    public List<LegalAdvisor> getAllLegalAdvisors() {
        return legalAdvisorRepository.findAll();
    }
}
