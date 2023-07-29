package com.teatro.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teatro.entities.Cliente;
import com.teatro.services.ClienteService;

@RestController
@RequestMapping("api")
public class ClienteRest {

	@Autowired
	private ClienteService service;

	@CrossOrigin
	@GetMapping("cliente")
	public List<Cliente> getCliente() {
		return service.getCliente();
	}
}
