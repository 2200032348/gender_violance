package com.LoginRegister.example.controller;
import com.LoginRegister.example.entity.Session;
import com.LoginRegister.example.service.SessionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sessions")
@CrossOrigin(origins = "https://tiny-axolotl-983850.netlify.app")
public class SessionController {

    private final SessionService sessionService;

    public SessionController(SessionService sessionService) {
        this.sessionService = sessionService;
    }

    @PostMapping
    public ResponseEntity<Session> addSession(@RequestBody Session session) {
        return ResponseEntity.ok(sessionService.addSession(session));
    }
}
