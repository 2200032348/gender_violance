package com.LoginRegister.example.repository;

import com.LoginRegister.example.entity.CounsellorRegister;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CounsellorRepository extends JpaRepository<CounsellorRegister, Long> {
    
    // Query to find counsellor by username and password
    CounsellorRegister findByUsernameAndPassword(String username, String password);
}
