package com.teatro.services;

import java.util.List;

import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;

import com.teatro.entities.Biglietto;

public interface BigliettoService {

	List<Biglietto> getBiglietto();

	Biglietto addBiglietto(Biglietto biglietto);
	
	List<Biglietto>getBigliettoBycod_cliente( int cod_cliente);
}
