package com.teatro.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teatro.entities.Biglietto;
import com.teatro.services.BigliettoService;

@RestController
@RequestMapping("api")
public class BigliettoRest {

	@Autowired
	private BigliettoService service;

	@CrossOrigin
	@GetMapping("biglietto")
	public List<Biglietto> getBiglietto() {
		return service.getBiglietto();
	}
	
	 @CrossOrigin
	 @PostMapping("biglietto")
		Biglietto addBiglietto(@RequestBody Biglietto biglietto) {
			return service.addBiglietto(biglietto);
		}
	 
	 @CrossOrigin
	 @GetMapping("biglietto/{cod_cliente}")
	 public List<Biglietto> getBigliettoBycodiceCliente(@PathVariable int cod_cliente){
		 return service.getBigliettoBycod_cliente(cod_cliente);
	 }
}

