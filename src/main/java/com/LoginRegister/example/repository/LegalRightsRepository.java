package com.LoginRegister.example.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.LoginRegister.example.entity.LegalRights;

@Repository
public interface LegalRightsRepository extends JpaRepository<LegalRights, Long> {
}
