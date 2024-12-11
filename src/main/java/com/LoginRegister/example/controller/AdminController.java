package com.LoginRegister.example.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.LoginRegister.example.entity.Admin;
import com.LoginRegister.example.requests.AdminLoginRequest;
import com.LoginRegister.example.service.AdminService;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    // Add a new admin
    @PostMapping("/addUser")
    public Admin addUser(@RequestBody Admin admin) {
        return adminService.addUser(admin);
    }

    // Login admin
    @PostMapping("/loginUser")
    public Boolean loginUser(@RequestBody AdminLoginRequest adminLoginRequest) {
    	System.out.println("runing");
        return adminService.loginUser(adminLoginRequest);
      
    }
}
