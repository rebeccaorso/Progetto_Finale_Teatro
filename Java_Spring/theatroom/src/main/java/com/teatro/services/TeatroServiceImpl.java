package com.teatro.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teatro.entities.Teatro;
import com.teatro.repos.TeatroDAO;

@Service
public class TeatroServiceImpl implements TeatroService{

	@Autowired
	private TeatroDAO dao;
	
	@Override
	public List<Teatro> getTeatro() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	
	
}
