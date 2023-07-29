package com.teatro.services;

import java.util.List;

import com.teatro.entities.Biglietto;

public interface BigliettoService {

		List<Biglietto> getBiglietto();

	Biglietto addBiglietto(Biglietto b);

	List<Biglietto> getBigliettoByCod_cliente(int cod_cliente);
}
