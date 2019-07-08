package co.com.ibm.acmebank.repository;

import co.com.ibm.acmebank.domain.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository Cliente
 * @author Juan Carlos Giraldo A. - julio 2019
 * @version 1.0.0
 */
@SuppressWarnings("unused")
@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {

}
