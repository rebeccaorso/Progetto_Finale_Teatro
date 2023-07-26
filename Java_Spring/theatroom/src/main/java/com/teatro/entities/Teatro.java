package com.teatro.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "teatri")
public class Teatro {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	protected int cod_teatro;
	@Column(length = 30)
	protected String nome;
	@Column(length = 30)
	protected String indirizzo;
	@Column(length = 25)
	protected String citta;
	@Column(length = 2)
	protected String provincia;
	@Column(length = 14)
	protected String telefono;
	protected int posti;

	public int getCod_teatro() {
		return cod_teatro;
	}

	public void setCod_teatro(int cod_teatro) {
		this.cod_teatro = cod_teatro;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getIndirizzo() {
		return indirizzo;
	}

	public void setIndirizzo(String indirizzo) {
		this.indirizzo = indirizzo;
	}

	public String getCitta() {
		return citta;
	}

	public void setCitta(String citta) {
		this.citta = citta;
	}

	public String getProvincia() {
		return provincia;
	}

	public void setProvincia(String provincia) {
		this.provincia = provincia;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public int getPosti() {
		return posti;
	}

	public void setPosti(int posti) {
		this.posti = posti;
	}

	@Override
	public String toString() {
		return "Teatro [cod_teatro=" + cod_teatro + ", nome=" + nome + ", indirizzo=" + indirizzo + ", citta=" + citta
				+ ", provincia=" + provincia + ", telefono=" + telefono + ", posti=" + posti + "]";
	}

}
