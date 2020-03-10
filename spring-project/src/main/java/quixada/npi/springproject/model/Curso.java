package quixada.npi.springproject.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.List;

@Entity
public class Curso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCurso;

    @NotEmpty
    private String sigla;

    @NotEmpty
    @Column(unique = true)
    private String nome;

    @OneToMany
    private List<Usuario> usuarios;

    @NotEmpty
    //@JsonIgnore
    private String turno;

    public Curso(Integer idCurso, String sigla, String nome, String turno) {
        this.idCurso = idCurso;
        this.nome = nome;
        this.sigla = sigla;
        this.usuarios = usuarios;
        this.turno = turno;
    }
    public Curso() {
    }
    public Integer getIdCurso() {
        return idCurso;
    }

    public String getSigla() {
        return sigla;
    }

    public void setSigla(String sigla) {
        this.sigla = sigla;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTurno() {
        return turno;
    }

    public void setTurno(String turno) {
        this.turno = turno;
    }
    public List<Usuario> getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(List<Usuario> usuarios) {
        this.usuarios = usuarios;
    }
}
