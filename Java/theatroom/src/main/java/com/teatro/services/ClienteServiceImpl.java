package com.teatro.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teatro.entities.Cliente;
import com.teatro.repos.ClienteDAO;

@Service
public class ClienteServiceImpl implements ClienteService {

	@Autowired
	private ClienteDAO dao;

	@Override
	public List<Cliente> getCliente() {
		return dao.findAll();
	}

}
