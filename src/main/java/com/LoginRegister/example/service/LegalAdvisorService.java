package com.LoginRegister.example.service;

import com.LoginRegister.example.entity.LegalAdvisor;
import com.LoginRegister.example.repository.LegalAdvisorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LegalAdvisorService {

    private final LegalAdvisorRepository repository;

    @Autowired
    public LegalAdvisorService(LegalAdvisorRepository repository) {
        this.repository = repository;
    }

    // Save a legal advisor
    public LegalAdvisor saveLegalAdvisor(LegalAdvisor legalAdvisor) {
        return repository.save(legalAdvisor);
    }

    // Authenticate legal advisor by username and password
    public LegalAdvisor authenticate(String username, String password) {
        return repository.findByUsernameAndPassword(username, password);
    }
}
