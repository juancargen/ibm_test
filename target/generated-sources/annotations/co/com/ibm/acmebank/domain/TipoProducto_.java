package co.com.ibm.acmebank.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(TipoProducto.class)
public abstract class TipoProducto_ {

	public static volatile SingularAttribute<TipoProducto, String> name;
	public static volatile SingularAttribute<TipoProducto, String> description;
	public static volatile SingularAttribute<TipoProducto, Long> id;
	public static volatile SetAttribute<TipoProducto, Producto> productos;

}

