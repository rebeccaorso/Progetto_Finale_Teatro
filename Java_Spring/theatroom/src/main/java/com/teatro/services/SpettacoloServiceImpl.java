package com.teatro.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teatro.entities.Spettacolo;
import com.teatro.repos.SpettacoloDAO;

@Service
public class SpettacoloServiceImpl implements SpettacoloService{

	@Autowired
	private SpettacoloDAO dao;

	@Override
	public List<Spettacolo> getSpettacolo() {
		return dao.findAll();
	}
}
