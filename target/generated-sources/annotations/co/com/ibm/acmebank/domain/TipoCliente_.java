package co.com.ibm.acmebank.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(TipoCliente.class)
public abstract class TipoCliente_ {

	public static volatile SingularAttribute<TipoCliente, String> name;
	public static volatile SingularAttribute<TipoCliente, String> description;
	public static volatile SingularAttribute<TipoCliente, Long> id;
	public static volatile SetAttribute<TipoCliente, Cliente> clientes;

}

