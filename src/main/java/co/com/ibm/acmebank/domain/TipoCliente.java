package co.com.ibm.acmebank.domain;

import io.swagger.annotations.ApiModel;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

/**
 * IBM Test
 * @author Juan Carlos Giraldo A. - julio 2019
 * @version 1.0.0
 */
@ApiModel(description = "Tipos de Cliente")
@Entity
@Table(name = "ibm_tipo_cliente")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class TipoCliente implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "DS_NAME")
    @Size(max = 100)
    private String name;

    @Column(name = "DS_DESCRIPTION")
    @Size(max = 2000)
    private String description;

    @OneToMany(mappedBy = "cliente")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Cliente> clientes = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public TipoCliente name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public TipoCliente description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<Cliente> getClientes() {
        return clientes;
    }



    public void setClientes(Set<Cliente> clientes) {
        this.clientes = clientes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        TipoCliente mapType = (TipoCliente) o;
        if (mapType.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), mapType.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "TipoCliente{" +
            "id=" + getId() +
            ", nombre='" + getName() + "'" +
            ", descripcion='" + getDescription() + "'" +
            "}";
    }
}
