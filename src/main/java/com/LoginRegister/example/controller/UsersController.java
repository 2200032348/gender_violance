package com.LoginRegister.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.LoginRegister.example.entity.Users;
import com.LoginRegister.example.requests.LoginRequest;
import com.LoginRegister.example.service.UserService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5177")
public class UsersController {
    @Autowired
    private UserService userService;

    @PostMapping("/useraddUser")
    public Users addUser(@RequestBody Users user) {
        return userService.addUser(user);
    }

    @PostMapping("/loginUser")
    public Boolean loginUser(@RequestBody LoginRequest loginRequest) {
        return userService.loginUser(loginRequest);
    }

    // New endpoint to retrieve all user details
    @GetMapping("/allUsers")
    public List<Users> getAllUsers() {
        return userService.getAllUsers();
    }
}
