package com.LoginRegister.example.service;

import com.LoginRegister.example.entity.CounsellorRegister;
import com.LoginRegister.example.repository.CounsellorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CounsellorService {

    @Autowired
    private CounsellorRepository repository;

    // Save Counsellor
    public CounsellorRegister saveCounsellor(CounsellorRegister counsellor) {
        return repository.save(counsellor);
    }

    // Find Counsellor by Username and Password
    public CounsellorRegister findByUsernameAndPassword(String username, String password) {
        return repository.findByUsernameAndPassword(username, password);
    }
}
