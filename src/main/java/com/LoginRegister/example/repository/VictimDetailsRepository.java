package com.LoginRegister.example.repository;

import com.LoginRegister.example.entity.VictimDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VictimDetailsRepository extends JpaRepository<VictimDetails, Long> {
}
