package com.backend.service;

import com.backend.exception.UserException;
import com.backend.model.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;

}