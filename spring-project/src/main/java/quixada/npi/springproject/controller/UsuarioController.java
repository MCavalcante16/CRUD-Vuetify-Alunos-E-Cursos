package quixada.npi.springproject.controller;

import com.sun.mail.iap.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import quixada.npi.springproject.model.Usuario;
import quixada.npi.springproject.service.UsuarioService;

import java.util.List;

@RestController
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/usuarios")
    public ResponseEntity<List<Usuario>> findAll() {
        return ResponseEntity.ok(usuarioService.findAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<List<Usuario>> find(@PathVariable Integer id) {
        // Busca usuário pelo id e retornar usuário...
        return ResponseEntity.ok().build();
    }

    @PostMapping("/newUser")
    public ResponseEntity<List<Usuario>> create(@RequestBody Usuario usuario) {
        usuarioService.cadastrar(usuario);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<List<Usuario>> delete(@PathVariable Integer id) {
        usuarioService.delete(id);
        return ResponseEntity.ok().build();
    }
    //TODO: excluir usuário

    @PutMapping("/{id}")
    public ResponseEntity<List<Usuario>> update(@RequestBody Usuario usuario) {
        usuarioService.update(usuario);
        return ResponseEntity.ok().build();
    }



}
