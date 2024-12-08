package com.LoginRegister.example.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.LoginRegister.example.entity.Users;
import com.LoginRegister.example.repository.UsersRepo;
import com.LoginRegister.example.requests.LoginRequest;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UsersRepo usersRepo;

    public Users addUser(Users user) {
        return usersRepo.save(user);
    }

    public Boolean loginUser(LoginRequest loginRequest) {
        Optional<Users> optionalUser = usersRepo.findById(loginRequest.getUserId());
        if (!optionalUser.isPresent()) {
            return false; // User not found
        }
        Users user = optionalUser.get();
        return user.getPassword().equals(loginRequest.getPassword());
    }

    // Method to retrieve all users
    public List<Users> getAllUsers() {
        return usersRepo.findAll();
    }
}
