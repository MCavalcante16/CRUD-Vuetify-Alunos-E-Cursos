package quixada.npi.springproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import quixada.npi.springproject.model.Curso;
import quixada.npi.springproject.service.CursoService;
import quixada.npi.springproject.service.impl.CursoServiceImpl;

import java.util.List;

@RestController
public class CursoController {

    private CursoService c = new CursoServiceImpl();

    @GetMapping("/cursos")
    public ResponseEntity<List<Curso>> findAll() {
        return ResponseEntity.ok(c.findAll());
    }

    @GetMapping("{idCurso}")
    public ResponseEntity<List<Curso>> find(@PathVariable Integer id) {
        // Busca curso pelo id e retorna...
        return ResponseEntity.ok().build();
    }

    @PostMapping("/cursos/new")
    public ResponseEntity<List<Curso>> create(@RequestBody Curso curso) {
        c.cadastrar(curso);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/cursos/{idCurso}")
    public ResponseEntity<List<Curso>> delete(@PathVariable Integer id) {
        c.delete(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/cursos/{idCurso}")
    public ResponseEntity<List<Curso>> update(@RequestBody Curso curso) {
        c.update(curso);
        return ResponseEntity.ok().build();
    }
}
