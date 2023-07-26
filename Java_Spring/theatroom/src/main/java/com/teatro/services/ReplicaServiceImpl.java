package com.teatro.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teatro.entities.Replica;
import com.teatro.repos.ReplicaDAO;


@Service
public class ReplicaServiceImpl implements ReplicaService {

	@Autowired
	private ReplicaDAO dao;

	@Override
	public List<Replica> getReplica() {
		return dao.findAll();
	}

}
