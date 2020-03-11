package quixada.npi.springproject.service;

import quixada.npi.springproject.model.Curso;
import quixada.npi.springproject.model.Usuario;

import java.util.List;

public interface CursoService {
    Curso findByNome(String nome);

    List<Curso> findAll();

    void cadastrar(Curso curso);

    void cadastrarUsuario(Usuario usuario);

    void update(Curso curso);

    void delete(Integer id);
}
