package co.com.ibm.acmebank.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Objects;

/**
 * IBM Test
 * @author Juan Carlos Giraldo A. - julio 2019
 * @version 1.0.0
 */
@ApiModel(description = "tabla clientes")
@Entity
@Table(name = "ibm_cliente")
public class Cliente implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "ds_nombre1")
    private String nombre1;

    @Column(name = "ds_nombre2")
    private String nombre2;

    @Column(name = "ds_apellido1")
    private String apellido1;

    @Column(name = "ds_apellido2")
    private String apellido2;

    @Column(name = "ds_identificacion")
    private String identificacion;

    @Column(name = "ds_sexo")
    private String sexo;

    @Column(name = "ds_ciudad")
    private String ciudad;

    @ManyToOne
    @JsonIgnoreProperties("tipoCliente")
    private TipoCliente tipoCliente;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre1() {
        return nombre1;
    }

    public void setNombre1(String nombre1) {
        this.nombre1 = nombre1;
    }

    public String getNombre2() {
        return nombre2;
    }

    public void setNombre2(String nombre2) {
        this.nombre2 = nombre2;
    }

    public String getApellido1() {
        return apellido1;
    }

    public void setApellido1(String apellido1) {
        this.apellido1 = apellido1;
    }

    public String getApellido2() {
        return apellido2;
    }

    public void setApellido2(String apellido2) {
        this.apellido2 = apellido2;
    }

    public String getIdentificacion() {
        return identificacion;
    }

    public void setIdentificacion(String identificacion) {
        this.identificacion = identificacion;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Cliente atlas = (Cliente) o;
        if (atlas.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), atlas.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Cliente{" +
            "id=" + getId() +
            ", nombre1='" + getNombre1() + "'" +
            ", nombre2='" + getNombre2() + "'" +
            ", apellido1='" + getApellido1() + "'" +
            ", apellido2='" + getApellido2() + "'" +
            ", identificacion='" + getIdentificacion() + "'" +
            ", sexo='" + getSexo() + "'" +
            ", ciudad='" + getCiudad() + "'" +
            "}";
    }
}
