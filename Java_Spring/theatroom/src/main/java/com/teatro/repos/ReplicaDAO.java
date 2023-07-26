
package com.teatro.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teatro.entities.Replica;


@Repository
public interface ReplicaDAO extends JpaRepository<Replica, Integer> {

}
