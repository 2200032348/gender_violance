package com.LoginRegister.example.repository;
import com.LoginRegister.example.entity.Session;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionRepository extends JpaRepository<Session, Long> {
}
