package com.LoginRegister.example.controller;

import com.LoginRegister.example.entity.UserInfo;
import com.LoginRegister.example.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/userinfo")
@CrossOrigin(origins = "https://tiny-axolotl-983850.netlify.app")
public class UserInfoController {

    @Autowired
    private UserInfoService userInfoService;

    // Endpoint to create new UserInfo
    @PostMapping
    public UserInfo createUserInfo(@RequestBody UserInfo userInfo) {
        return userInfoService.saveUserInfo(userInfo);
    }

    // Endpoint to fetch all UserInfo records
    @GetMapping
    public List<UserInfo> getAllUserInfo() {
        return userInfoService.getAllUserInfo();
    }
}
