package quixada.npi.springproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import quixada.npi.springproject.model.Usuario;

import java.util.List;


@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    Usuario findByEmail(String email);

    @Query("SELECT new Usuario(u.id, u.nome, u.email, u.habilitado) FROM Usuario u")
    List<Usuario> findAll();

    @Query("update Usuario u set u.nome = ?1, u.email = ?2, u.habilitado = ?3 where u.id = ?3")
    void update(String nome, String email, boolean habilitado, Integer userId);

}
