
package com.teatro.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

@Table(name = "spettacoli")
public class Spettacolo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	protected int cod_spettacolo;
	@Column(length = 50)
	protected String titolo;
	@Column(length = 40)
	protected String autore;
	@Column(length = 25)
	protected String regista;
	protected double prezzo;

	public int getCod_spettacolo() {
		return cod_spettacolo;
	}
	public void setCod_spettacolo(int cod_spettacolo) {
		this.cod_spettacolo = cod_spettacolo;
	}
	public String getTitolo() {
		return titolo;
	}
	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}
	public String getAutore() {
		return autore;
	}
	public void setAutore(String autore) {
		this.autore = autore;
	}
	public String getRegista() {
		return regista;
	}
	public void setRegista(String regista) {
		this.regista = regista;
	}
	public double getPrezzo() {
		return prezzo;
	}
	public void setPrezzo(double prezzo) {
		this.prezzo = prezzo;
	}




}
