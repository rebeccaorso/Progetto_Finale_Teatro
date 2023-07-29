package com.teatro.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teatro.entities.Replica;
import com.teatro.services.ReplicaService;

@RestController
@RequestMapping("api")
public class ReplicaRest {

	@Autowired
	private ReplicaService service;

	@CrossOrigin
	@GetMapping("replica")
	public List<Replica> getReplica(){
		return service.getReplica();
	}

}
