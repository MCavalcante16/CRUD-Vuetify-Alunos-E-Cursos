package quixada.npi.springproject.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import quixada.npi.springproject.model.Curso;
import quixada.npi.springproject.model.Usuario;
import quixada.npi.springproject.repository.CursoRepository;
import quixada.npi.springproject.service.CursoService;

import java.util.List;

public class CursoServiceImpl implements CursoService {
    private CursoRepository cursoRepository;

    @Override
    public Curso findByNome(String nome) {
        return cursoRepository.findByNome(nome);    }

    @Override
    public List<Curso> findAll() {
        return cursoRepository.findAll();
    }

    @Override
    public void cadastrar(Curso curso) {
        cursoRepository.save(curso);
    }

    @Override
    public void cadastrarUsuario(Usuario usuario) {
        Curso c = cursoRepository.findById(usuario.getCurso().getIdCurso()).get();
        c.getUsuarios().add(usuario);
        cursoRepository.save(c);
    }

    @Override
    public void update(Curso curso) {
        Curso c = cursoRepository.findById(curso.getIdCurso()).get();
        c.setNome(curso.getNome());
        c.setSigla(curso.getSigla());
        c.setTurno(curso.getTurno());
        cursoRepository.save(c);
    }

    @Override
    public void delete(Integer id) {
        Curso c = cursoRepository.findById(id).get();
        cursoRepository.delete(c);
    }
}
