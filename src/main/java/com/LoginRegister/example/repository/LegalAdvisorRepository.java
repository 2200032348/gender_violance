
package com.LoginRegister.example.repository;

import com.LoginRegister.example.entity.LegalAdvisor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LegalAdvisorRepository extends JpaRepository<LegalAdvisor, Long> {

    // Custom query to find by username and password
    LegalAdvisor findByUsernameAndPassword(String username, String password);
}

