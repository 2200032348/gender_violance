package com.LoginRegister.example.service;
import com.LoginRegister.example.entity.LegalRights;
import com.LoginRegister.example.repository.LegalRightsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LegalRightsService {

    private final LegalRightsRepository legalRightsRepository;

    public LegalRightsService(LegalRightsRepository legalRightsRepository) {
        this.legalRightsRepository = legalRightsRepository;
    }

    public List<LegalRights> getAllLegalRights() {
        return legalRightsRepository.findAll();
    }

    public LegalRights addLegalRight(LegalRights legalRight) {
        return legalRightsRepository.save(legalRight);
    }
}
