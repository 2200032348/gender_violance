package com.LoginRegister.example.service;
import com.LoginRegister.example.entity.Session;
import com.LoginRegister.example.repository.SessionRepository;
import org.springframework.stereotype.Service;

@Service
public class SessionService {

    private final SessionRepository sessionRepository;

    public SessionService(SessionRepository sessionRepository) {
        this.sessionRepository = sessionRepository;
    }

    public Session addSession(Session session) {
        return sessionRepository.save(session);
    }
}
