package com.backend.service;

import com.backend.exception.ProductException;
import com.backend.model.Cart;
import com.backend.model.User;
import com.backend.request.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);
	
	public String addCartItem(Long userId,AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);
	
	
	

}