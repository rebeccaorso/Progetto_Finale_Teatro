package com.teatro.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teatro.entities.Cliente;

@Repository
public interface ClienteDAO extends JpaRepository<Cliente, Integer> {

}
