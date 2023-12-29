package com.backend.service;

import java.util.List;

import com.backend.exception.ProductException;
import com.backend.model.Product;
import com.backend.request.CreateProductRequest;
import org.springframework.data.domain.Page;

public interface ProductService {
	
	// only for Admin
	public Product createProduct(CreateProductRequest req) throws ProductException;
	
	public String deleteProduct(Long productId) throws ProductException;
	
	public Product updateProduct(Long productId,Product product)throws ProductException;
	
	public List<Product> getAllProducts();
	
	// for user and Admin both
	public Product findProductById(Long id) throws ProductException;
	
	public List<Product> findProductByCategory(String category);
	
	public List<Product> searchProduct(String query);
	
//	public List<Product> getAllProduct(List<String>colors,List<String>sizes,int minPrice, int maxPrice,int minDiscount, String category, String sort,int pageNumber, int pageSize);
	public Page<Product> getAllProduct(String category, List<String>colors, List<String> sizes, 
			Integer minPrice, Integer maxPrice, Integer minDiscount,String sort, 
			String stock, Integer pageNumber, Integer pageSize);
	
	
	
	

}
