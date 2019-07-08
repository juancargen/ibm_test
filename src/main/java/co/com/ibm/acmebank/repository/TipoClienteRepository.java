package co.com.ibm.acmebank.repository;

import co.com.ibm.acmebank.domain.Cliente;
import co.com.ibm.acmebank.domain.TipoCliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository TipoCliente
 * @author Juan Carlos Giraldo A. - julio 2019
 * @version 1.0.0
 */
@SuppressWarnings("unused")
@Repository
public interface TipoClienteRepository extends JpaRepository<TipoCliente, Long> {
    
}
