package co.com.ibm.acmebank.web.rest;

import co.com.ibm.acmebank.domain.Producto;
import co.com.ibm.acmebank.domain.TipoProducto;
import co.com.ibm.acmebank.repository.ProductoRepository;
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
 * REST controller for managing Tipos de Producto.
 * @author Juan Carlos Giraldo A. - julio 2019
 * @version 1.0.0
 */
@RestController
@RequestMapping("/api")
public class TipoProductoResource {

    private final Logger log = LoggerFactory.getLogger(TipoProductoResource.class);

    private static final String ENTITY_NAME = "tipo_producto";

    private final TipoProductoRepository tipoProductoRepository;

    public TipoProductoResource(TipoProductoRepository tipoProductoRepository) {
        this.tipoProductoRepository = tipoProductoRepository;
    }

    /**
     * POST  /tiposproducto : Create a new tipoProdcuto.
     *
     * @param tipoProducto the producto to create
     * @return the ResponseEntity with status 201 (Created) and with body the new atlas, or with status 400 (Bad Request) if the atlas has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/tipoProducto")
    @Timed
    public ResponseEntity<TipoProducto> createTipoProducto(@RequestBody TipoProducto tipoProducto) throws URISyntaxException {
        log.debug("REST request to save TipoProducto : {}", tipoProducto);
        if (tipoProducto.getId() != null) {
            throw new BadRequestAlertException("A new tipo producto cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TipoProducto result = tipoProductoRepository.save(tipoProducto);
        return ResponseEntity.created(new URI("/api/tipoProducto/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /tiposproducto : Updates an existing tiposProdcuto.
     *
     * @param tipoProducto the tipoproducto to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated atlas,
     * or with status 400 (Bad Request) if the atlas is not valid,
     * or with status 500 (Internal Server Error) if the atlas couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/tipoProducto")
    @Timed
    public ResponseEntity<TipoProducto> updateTipoProducto(@RequestBody TipoProducto tipoProducto) throws URISyntaxException {
        log.debug("REST request to update TipoProducto : {}", tipoProducto);
        if (tipoProducto.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        TipoProducto result = tipoProductoRepository.save(tipoProducto);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, tipoProducto.getId().toString()))
            .body(result);
    }


    /**
     * GET  /producto/:id : get the "id" producto.
     *
     * @param id the id of the producto to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the atlas, or with status 404 (Not Found)
     */
    @GetMapping("/tipoProducto/{id}")
    @Timed
    public ResponseEntity<TipoProducto> getTipoProdcuto(@PathVariable Long id) {
        log.debug("REST request to get TipoProducto : {}", id);
        Optional<TipoProducto> tipoProducto = tipoProductoRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(tipoProducto);
    }

    /**
     * DELETE  /tipoProducto/:id : delete the "id" tipoProducto.
     *
     * @param id the id of the prodcuto to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/tipoProducto/{id}")
    @Timed
    public ResponseEntity<Void> deleteTipoProducto(@PathVariable Long id) {
        log.debug("REST request to delete Producto : {}", id);

        tipoProductoRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * GET  /tiposproducto : get all the tipos producto pageable.
     *
     * @param pageable pagination data
     * @return the ResponseEntity with status 200 (OK) and the list of atlases in body
     */
    @GetMapping("/tiposProducto")
    @Timed
    public ResponseEntity<List<TipoProducto>> getAllTiposProducto(Pageable pageable) {
        log.debug("REST request to get all TiposProducto");
        final Page<TipoProducto> tipoProductoPage = tipoProductoRepository.findAll(pageable);
        HttpHeaders httpHeaders = PaginationUtil.generatePaginationHttpHeaders(tipoProductoPage, "api/tiposProducto");
        return new ResponseEntity<>(tipoProductoPage.getContent(), httpHeaders, HttpStatus.OK);
    }

}
