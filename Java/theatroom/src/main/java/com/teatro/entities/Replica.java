
package com.teatro.entities;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

@Table(name = "repliche")
public class Replica {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	protected int cod_replica;
	protected int cod_spettacolo;
	@Column(length = 11)
	protected String data_replica;


	public int getCod_replica() {
		return cod_replica;
	}
	public void setCod_replica(int cod_replica) {
		this.cod_replica = cod_replica;
	}


	public int getCod_spettacolo() {
		return cod_spettacolo;
	}
	public void setCod_spettacolo(int cod_spettacolo) {
		this.cod_spettacolo = cod_spettacolo;
	}
	public String getData_replica() {
		return data_replica;
	}
	public void setData_replica(String data_replica) {
		this.data_replica = data_replica;
	}








}
