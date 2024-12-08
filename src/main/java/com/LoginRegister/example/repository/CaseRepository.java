
package com.LoginRegister.example.repository;

import com.LoginRegister.example.entity.Case;
import com.LoginRegister.example.entity.LegalAdvisor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CaseRepository extends JpaRepository<Case, Long> {
    List<Case> findByLegalAdvisor(LegalAdvisor legalAdvisor);
}
