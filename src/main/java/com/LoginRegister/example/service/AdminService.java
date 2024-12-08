package com.LoginRegister.example.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.LoginRegister.example.entity.Admin;
import com.LoginRegister.example.repository.AdminRepository;
import com.LoginRegister.example.requests.AdminLoginRequest;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public Admin addUser(Admin admin) {
        return adminRepository.save(admin);
    }

    public Boolean loginUser(AdminLoginRequest adminLoginRequest) {
        Optional<Admin> optionalAdmin = adminRepository.findByEmail(adminLoginRequest.getEmail());
        if (optionalAdmin.isEmpty()) {
            return false; // Admin not found
        }
        Admin admin = optionalAdmin.get();
        return admin.getPassword().equals(adminLoginRequest.getPassword());
    }
}
