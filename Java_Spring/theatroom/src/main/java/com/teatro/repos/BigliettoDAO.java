
package com.teatro.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.teatro.entities.Biglietto;

@Repository
public interface BigliettoDAO extends JpaRepository<Biglietto, Integer> {
	
	 @Query("SELECT b FROM Biglietto b WHERE b.co_cliente = :codiceCliente")
	    List<Biglietto> getBigliettoBycodiceReplica(@Param("codiceCliente") int cod_cliente);

}
