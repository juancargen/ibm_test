package co.com.ibm.acmebank.repository;

import co.com.ibm.acmebank.domain.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository Producto
 * @author Juan Carlos Giraldo A. - julio 2019
 * @version 1.0.0
 */
@SuppressWarnings("unused")
@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {

}
