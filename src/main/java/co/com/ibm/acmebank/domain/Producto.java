package co.com.ibm.acmebank.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.annotations.ApiModel;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

/**
 * IBM Test
 * @author Juan Carlos Giraldo A. - julio 2019
 * @version 1.0.0
 */
@ApiModel(description = "Productos")
@Entity
@Table(name = "ibm_producto")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Producto implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "id_tarjeta")
    private String idTarjeta;

    @Column(name = "dt_fecha_registro",
            insertable = true,
            updatable = false) //para manejo de fecha por default en la BD
    private ZonedDateTime fechaRegistro;

    @Column(name = "dt_fecha_activacion")
    private ZonedDateTime fechaActivacion;

    @Column(name = "dt_fecha_retiro")
    private ZonedDateTime fechaRetiro;

    @Column(name = "es_vigente")
    private Boolean esVigente;

    @OneToMany(mappedBy = "tipoProducto", fetch = FetchType.EAGER)
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<TipoProducto> tiposProducto = new HashSet<>();
    /*
    @ManyToOne
    @JsonIgnoreProperties("presentations")
    private UserAc userAc;
    */
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIdTarjeta() {
        return idTarjeta;
    }

    public void setIdTarjeta(String idTarjeta) {
        this.idTarjeta = idTarjeta;
    }

    public ZonedDateTime getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(ZonedDateTime fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    public ZonedDateTime getFechaActivacion() {
        return fechaActivacion;
    }

    public void setFechaActivacion(ZonedDateTime fechaActivacion) {
        this.fechaActivacion = fechaActivacion;
    }

    public ZonedDateTime getFechaRetiro() {
        return fechaRetiro;
    }

    public void setFechaRetiro(ZonedDateTime fechaRetiro) {
        this.fechaRetiro = fechaRetiro;
    }

    public Boolean getEsVigente() {
        return esVigente;
    }

    public void setEsVigente(Boolean esVigente) {
        this.esVigente = esVigente;
    }

    public void setTiposProducto(Set<TipoProducto> tiposProducto) {
        this.tiposProducto = tiposProducto;
    }


    public Set<TipoProducto> getTiposProducto() {
        return tiposProducto;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Producto presentation = (Producto) o;
        if (presentation.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), presentation.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Producto{" +
            "id=" + getId() +
            ", idTarjeta='" + getIdTarjeta() + "'" +
            ", fechaRegistro='" + getFechaRegistro() + "'" +
            ", fechaActivacion='" + getFechaActivacion() + "'" +
            ", fechaRetiro='" + getFechaRetiro() + "'" +
            ", fechaRetiro='" + getFechaRetiro() + "'" +
            ", esVigente='" + getEsVigente() + "'" +
            "}";
    }
}
