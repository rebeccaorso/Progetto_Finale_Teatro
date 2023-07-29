
package com.teatro.entities;



import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "biglietti")
public class Biglietto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	protected int cod_operazione;
	protected int cod_cliente;
	protected int cod_replica;
	protected Date data_ora;

	@Column(length = 30)
	protected String tipo_pagamento;
	protected int quantita;
	protected String data;
	@Column(length = 50)
	protected String titolo;
	
	
	public int getCod_operazione() {
		return cod_operazione;
	}
	public void setCod_operazione(int cod_operazione) {
		this.cod_operazione = cod_operazione;
	}
	public int getCod_cliente() {
		return cod_cliente;
	}
	public void setCod_cliente(int cod_cliente) {
		this.cod_cliente = cod_cliente;
	}
	public int getCod_replica() {
		return cod_replica;
	}
	public void setCod_replica(int cod_replica) {
		this.cod_replica = cod_replica;
	}
	
	
	
	
	public String getTitolo() {
		return titolo;
	}
	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}
	public Date getData_ora() {
		return data_ora;
	}
	public void setData_ora(Date data_ora) {
		this.data_ora = data_ora;
	}
	public String getTipo_pagamento() {
		return tipo_pagamento;
	}
	public void setTipo_pagamento(String tipo_pagamento) {
		this.tipo_pagamento = tipo_pagamento;
	}
	public int getQuantita() {
		return quantita;
	}
	public void setQuantita(int quantita) {
		this.quantita = quantita;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}







}
