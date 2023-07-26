package com.teatro.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teatro.entities.Teatro;


@Repository
public interface TeatroDAO extends JpaRepository<Teatro, Integer> {

}
