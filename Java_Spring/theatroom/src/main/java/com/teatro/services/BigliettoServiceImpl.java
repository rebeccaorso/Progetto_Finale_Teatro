package com.teatro.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teatro.entities.Biglietto;
import com.teatro.integration.BigliettoRest;
import com.teatro.repos.BigliettoDAO;


@Service
public class BigliettoServiceImpl implements BigliettoService{

	@Autowired
	private BigliettoDAO dao;

	@Override
	public List<Biglietto> getBiglietto() {
		return dao.findAll();
	}

	@Override
	public Biglietto addBiglietto(Biglietto biglietto) {
		return dao.save(biglietto);
	}

	@Override
	public List<Biglietto> getBigliettoBycod_cliente(int cod_cliente) {
		// TODO Auto-generated method stub
		return dao.getBigliettoBycodiceReplica(cod_cliente);
	}
}
