package quixada.npi.springproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import quixada.npi.springproject.model.Curso;

import java.util.List;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Integer> {
    Curso findByNome(String nome);
    @Query("SELECT new Curso(c.idCurso, c.sigla, c.nome, c.turno) FROM Curso c")
    List<Curso> findAll();
}
