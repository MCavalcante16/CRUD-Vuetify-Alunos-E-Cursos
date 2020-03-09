package quixada.npi.springproject.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import quixada.npi.springproject.model.Usuario;
import quixada.npi.springproject.repository.UsuarioRepository;
import quixada.npi.springproject.service.UsuarioService;

import java.util.List;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public Usuario findByEmail(String email) {
        return usuarioRepository.findByEmail(email);
    }

    @Override
    public List<Usuario> findAll() {
        return usuarioRepository.findAll();
    }

    public void cadastrar(Usuario usuario) {
        usuario.setPassword(new BCryptPasswordEncoder().encode(usuario.getPassword()));
        usuarioRepository.save(usuario);
    }

    public void update(Usuario usuario) {
        Usuario usuarioU = usuarioRepository.findByEmail(usuario.getEmail());
        usuarioU.setNome(usuario.getNome());
        usuarioU.setEmail(usuario.getEmail());
        usuarioU.setHabilitado(usuario.isHabilitado());
        usuarioRepository.update(usuarioU.getNome(), usuarioU.getEmail(), usuarioU.isHabilitado(), usuarioU.getId());
    }

    public void delete(Integer id) {
        usuarioRepository.deleteById(id);
    }

}
