package co.com.ibm.acmebank.web.rest;

import co.com.ibm.acmebank.domain.Cliente;
import co.com.ibm.acmebank.repository.ClienteRepository;
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
 * REST controller for managing Cliente.
 * @author Juan Carlos Giraldo A. - julio 2019
 * @version 1.0.0
 */
@RestController
@RequestMapping("/api")
public class ClienteResource {

    private final Logger log = LoggerFactory.getLogger(ClienteResource.class);

    private static final String ENTITY_NAME = "cliente";

    private final ClienteRepository clienteRepository;

    public ClienteResource(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    /**
     * POST  /Clientes : Create a new Cliente.
     *
     * @param cliente the cliente to create
     * @return the ResponseEntity with status 201 (Created) and with body the new atlas, or with status 400 (Bad Request) if the atlas has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/cliente")
    @Timed
    public ResponseEntity<Cliente> createCliente(@RequestBody Cliente cliente) throws URISyntaxException {
        log.debug("REST request to save Cliente : {}", cliente);
        if (cliente.getId() != null) {
            throw new BadRequestAlertException("A new cliente cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Cliente result = clienteRepository.save(cliente);
        return ResponseEntity.created(new URI("/api/cliente/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /cliente : Updates an existing cliente.
     *
     * @param cliente the cliente to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated atlas,
     * or with status 400 (Bad Request) if the atlas is not valid,
     * or with status 500 (Internal Server Error) if the atlas couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/cliente")
    @Timed
    public ResponseEntity<Cliente> updateCliente(@RequestBody Cliente cliente) throws URISyntaxException {
        log.debug("REST request to update Cliente : {}", cliente);
        if (cliente.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Cliente result = clienteRepository.save(cliente);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, cliente.getId().toString()))
            .body(result);
    }


    /**
     * GET  /cliente/:id : get the "id" cliente.
     *
     * @param id the id of the cliente to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the atlas, or with status 404 (Not Found)
     */
    @GetMapping("/cliente/{id}")
    @Timed
    public ResponseEntity<Cliente> getCliente(@PathVariable Long id) {
        log.debug("REST request to get Cliente : {}", id);
        Optional<Cliente> cliente = clienteRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(cliente);
    }

    /**
     * DELETE  /atlases/:id : delete the "id" Cliente.
     *
     * @param id the id of the atlas to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/cliente/{id}")
    @Timed
    public ResponseEntity<Void> deleteCliente(@PathVariable Long id) {
        log.debug("REST request to delete Cliente : {}", id);

        clienteRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * GET  /atlas : get all the cliente pageable.
     *
     * @param pageable pagination data
     * @return the ResponseEntity with status 200 (OK) and the list of atlases in body
     */
    @GetMapping("/clientes")
    @Timed
    public ResponseEntity<List<Cliente>> getAllClientes(Pageable pageable) {
        log.debug("REST request to get all Clientes");
        final Page<Cliente> clientePage = clienteRepository.findAll(pageable);
        HttpHeaders httpHeaders = PaginationUtil.generatePaginationHttpHeaders(clientePage, "api/clientes");
        return new ResponseEntity<>(clientePage.getContent(), httpHeaders, HttpStatus.OK);
    }

}
