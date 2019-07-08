package co.com.ibm.acmebank.web.rest;

import co.com.ibm.acmebank.domain.TipoCliente;
import co.com.ibm.acmebank.domain.TipoProducto;
import co.com.ibm.acmebank.repository.TipoClienteRepository;
import co.com.ibm.acmebank.repository.TipoProductoRepository;
import co.com.ibm.acmebank.web.rest.errors.BadRequestAlertException;
import co.com.ibm.acmebank.web.rest.util.HeaderUtil;
import co.com.ibm.acmebank.web.rest.util.PaginationUtil;
import com.codahale.metrics.annotation.Timed;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Tipos de Cliente.
 * @author Juan Carlos Giraldo A. - julio 2019
 * @version 1.0.0
 */
@RestController
@RequestMapping("/api")
public class TipoClienteResource {

    private final Logger log = LoggerFactory.getLogger(TipoClienteResource.class);

    private static final String ENTITY_NAME = "tipo_cliente";

    private final TipoClienteRepository tipoClienteRepository;

    public TipoClienteResource(TipoClienteRepository tipoClienteRepository) {
        this.tipoClienteRepository = tipoClienteRepository;
    }

    /**
     * POST  /tiposcliente : Create a new tipoCliente.
     *
     * @param tipoCliente the producto to create
     * @return the ResponseEntity with status 201 (Created) and with body the new atlas, or with status 400 (Bad Request) if the atlas has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/tipoCliente")
    @Timed
    public ResponseEntity<TipoCliente> createTipoCliente(@RequestBody TipoCliente tipoCliente) throws URISyntaxException {
        log.debug("REST request to save TipoCliente : {}", tipoCliente);
        if (tipoCliente.getId() != null) {
            throw new BadRequestAlertException("A new tipo producto cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TipoCliente result = tipoClienteRepository.save(tipoCliente);
        return ResponseEntity.created(new URI("/api/tipoProducto/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /tiposcliente : Updates an existing tiposCliente.
     *
     * @param tipoCliente the tipocliente to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated atlas,
     * or with status 400 (Bad Request) if the atlas is not valid,
     * or with status 500 (Internal Server Error) if the atlas couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/tipoCliente")
    @Timed
    public ResponseEntity<TipoCliente> updateTipoCliente(@RequestBody TipoCliente tipoCliente) throws URISyntaxException {
        log.debug("REST request to update TipoCliente : {}", tipoCliente);
        if (tipoCliente.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        TipoCliente result = tipoClienteRepository.save(tipoCliente);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, tipoCliente.getId().toString()))
            .body(result);
    }


    /**
     * GET  /cliente/:id : get the "id" cliente.
     *
     * @param id the id of the producto to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the atlas, or with status 404 (Not Found)
     */
    @GetMapping("/tipoCliente/{id}")
    @Timed
    public ResponseEntity<TipoCliente> getTipoCliente(@PathVariable Long id) {
        log.debug("REST request to get TipoProducto : {}", id);
        Optional<TipoCliente> tipoCliente = tipoClienteRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(tipoCliente);
    }

    /**
     * DELETE  /tipoCliente/:id : delete the "id" tipoCliente.
     *
     * @param id the id of the prodcuto to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/tipoCliente/{id}")
    @Timed
    public ResponseEntity<Void> deleteTipoCliente(@PathVariable Long id) {
        log.debug("REST request to delete TipoCliente : {}", id);

        tipoClienteRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * GET  /tiposproducto : get all the tipos producto pageable.
     *
     * @param pageable pagination data
     * @return the ResponseEntity with status 200 (OK) and the list of clientes in body
     */
    @GetMapping("/tiposCliente")
    @Timed
    public ResponseEntity<List<TipoCliente>> getAllTiposCliente(Pageable pageable) {
        log.debug("REST request to get all TiposProducto");
        final Page<TipoCliente> tipoClientePage = tipoClienteRepository.findAll(pageable);
        HttpHeaders httpHeaders = PaginationUtil.generatePaginationHttpHeaders(tipoClientePage, "api/tiposCliente");
        return new ResponseEntity<>(tipoClientePage.getContent(), httpHeaders, HttpStatus.OK);
    }

}
