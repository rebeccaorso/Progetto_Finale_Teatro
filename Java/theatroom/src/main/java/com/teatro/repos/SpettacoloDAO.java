
package com.teatro.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teatro.entities.Spettacolo;


@Repository
public interface SpettacoloDAO extends JpaRepository<Spettacolo, Integer> {

}
