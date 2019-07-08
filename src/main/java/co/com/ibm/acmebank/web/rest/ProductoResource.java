package co.com.ibm.acmebank.web.rest;

import co.com.ibm.acmebank.domain.Cliente;
import co.com.ibm.acmebank.domain.Producto;
import co.com.ibm.acmebank.repository.ClienteRepository;
import co.com.ibm.acmebank.repository.ProductoRepository;
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
 * REST controller for managing Producto.
 * @author Juan Carlos Giraldo A. - julio 2019
 * @version 1.0.0
 */
@RestController
@RequestMapping("/api")
public class ProductoResource {

    private final Logger log = LoggerFactory.getLogger(ProductoResource.class);

    private static final String ENTITY_NAME = "producto";

    private final ProductoRepository productoRepository;

    public ProductoResource(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    /**
     * POST  /productos : Create a new Cliente.
     *
     * @param producto the producto to create
     * @return the ResponseEntity with status 201 (Created) and with body the new atlas, or with status 400 (Bad Request) if the atlas has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/producto")
    @Timed
    public ResponseEntity<Producto> createProducto(@RequestBody Producto producto) throws URISyntaxException {
        log.debug("REST request to save Producto : {}", producto);
        if (producto.getId() != null) {
            throw new BadRequestAlertException("A new producto cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Producto result = productoRepository.save(producto);
        return ResponseEntity.created(new URI("/api/producto/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /producto : Updates an existing cliente.
     *
     * @param producto the producto to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated atlas,
     * or with status 400 (Bad Request) if the atlas is not valid,
     * or with status 500 (Internal Server Error) if the atlas couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/producto")
    @Timed
    public ResponseEntity<Producto> updateProducto(@RequestBody Producto producto) throws URISyntaxException {
        log.debug("REST request to update Producto : {}", producto);
        if (producto.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Producto result = productoRepository.save(producto);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, producto.getId().toString()))
            .body(result);
    }


    /**
     * GET  /producto/:id : get the "id" producto.
     *
     * @param id the id of the producto to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the atlas, or with status 404 (Not Found)
     */
    @GetMapping("/producto/{id}")
    @Timed
    public ResponseEntity<Producto> getProdcuto(@PathVariable Long id) {
        log.debug("REST request to get Prodcuto : {}", id);
        Optional<Producto> producto = productoRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(producto);
    }

    /**
     * DELETE  /producto/:id : delete the "id" producto.
     *
     * @param id the id of the prodcuto to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/producto/{id}")
    @Timed
    public ResponseEntity<Void> deleteProducto(@PathVariable Long id) {
        log.debug("REST request to delete Producto : {}", id);

        productoRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * GET  /productos : get all the cliente pageable.
     *
     * @param pageable pagination data
     * @return the ResponseEntity with status 200 (OK) and the list of atlases in body
     */
    @GetMapping("/productos")
    @Timed
    public ResponseEntity<List<Producto>> getAllProductos(Pageable pageable) {
        log.debug("REST request to get all Productos");
        final Page<Producto> productoPage = productoRepository.findAll(pageable);
        HttpHeaders httpHeaders = PaginationUtil.generatePaginationHttpHeaders(productoPage, "api/producto");
        return new ResponseEntity<>(productoPage.getContent(), httpHeaders, HttpStatus.OK);
    }

}
