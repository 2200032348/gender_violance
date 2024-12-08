package com.LoginRegister.example.service;

import com.LoginRegister.example.entity.UserInfo;
import com.LoginRegister.example.repository.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserInfoService {

    @Autowired
    private UserInfoRepository userInfoRepository;

    // Save UserInfo
    public UserInfo saveUserInfo(UserInfo userInfo) {
        return userInfoRepository.save(userInfo);
    }

    // Get all UserInfo records
    public List<UserInfo> getAllUserInfo() {
        return userInfoRepository.findAll();
    }
}
