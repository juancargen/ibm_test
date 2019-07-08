package co.com.ibm.acmebank.repository;

import co.com.ibm.acmebank.domain.Producto;
import co.com.ibm.acmebank.domain.TipoProducto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository TipoProducto
 * @author Juan Carlos Giraldo A. - julio 2019
 * @version 1.0.0
 */
@SuppressWarnings("unused")
@Repository
public interface TipoProductoRepository extends JpaRepository<TipoProducto, Long> {

}
