package co.com.ibm.acmebank.domain;

import java.time.ZonedDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Producto.class)
public abstract class Producto_ {

	public static volatile SingularAttribute<Producto, String> idTarjeta;
	public static volatile SingularAttribute<Producto, ZonedDateTime> fechaRegistro;
	public static volatile SingularAttribute<Producto, Boolean> esVigente;
	public static volatile SetAttribute<Producto, TipoProducto> tiposProducto;
	public static volatile SingularAttribute<Producto, Long> id;
	public static volatile SingularAttribute<Producto, ZonedDateTime> fechaActivacion;
	public static volatile SingularAttribute<Producto, ZonedDateTime> fechaRetiro;

}

