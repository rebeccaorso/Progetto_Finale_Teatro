package com.teatro.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.teatro.entities.Teatro;
import com.teatro.services.TeatroService;

@RestController
@RequestMapping("api")
public class TeatroRest {
	
	@Autowired
	private TeatroService service;
	
	@CrossOrigin
	@GetMapping("teatro")
	public List<Teatro> getCliente() {
		return service.getTeatro();
	}

}
