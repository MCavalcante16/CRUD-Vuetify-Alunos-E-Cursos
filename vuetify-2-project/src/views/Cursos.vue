<template>
  <div>
    <v-card-widget enableActions :title="'Cursos'">
      <div slot="widget-header-action"></div>
      <div slot="widget-content">
        <v-row>
          <v-col cols="12">
            <v-data-table
              :headers="headers"
              :items="cursos"
              :items-per-page="10"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat color="white">
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>
                  <template>
                    <v-btn @click="newCurso" color="primary" dark class="mb-2">Adicionar Novo Curso</v-btn>
                  </template>
                  <v-dialog v-model="dialog" max-width="650px">
                    <v-card>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field v-model="editedItem.nome" label="Nome"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field v-model="editedItem.sigla" label="Sigla"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field v-model="editedItem.turno" label="Turno"></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>

              <template v-slot:item.acoes="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
                <v-icon :disabled="item.habilitado" small @click="deleteItem(item)">mdi-delete</v-icon>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </div>
    </v-card-widget>
  </div>
</template>
<script>
// @ is an alias to /src
import VCardWidget from "@/components/VWidget";
import { RepositoryFactory } from "@/repositories/RepositoryFactory";
const cursoRepo = RepositoryFactory.get("curso");
export default {
  name: "cursos",
  components: {
    VCardWidget
  },
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "Nome",
        align: "left",
        value: "nome"
      },
      { text: "Sigla", value: "sigla" },
      { text: "Turno", value: "turno" },
      { text: "Ações", value: "acoes", sortable: false }
    ],
    cursos: [],
    editedIndex: -1,
    editedItem: {
      nome: "nome",
      sigla: "sigla",
      turno: "turno"
    },
    defaultItem: {
      nome: "",
      sigla: "",
      turno: ""
    }
  }),
  created() {
    cursoRepo
      .getAll()
      .then(res => {
        this.cursos = res.data;
      })
      .catch(console.error);
  },
  computed: {},
  methods: {
    newCurso() {
      this.$router.push("cursos/new");
    },
    editItem(item) {
      this.editedIndex = this.cursos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.cursos.indexOf(item);
      confirm("Você tem certeza que quer deletar esse item?") && 
      this.$store
          .dispatch("auth/delete", {
            id: this.cursos[index].id
          })
          .then(() => {
            this.$router.go(0);
          });
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    save() {
      if (this.editedIndex > -1) {
        //   Object.assign(this.usuarios[this.editedIndex], this.editedItem)
        this.$store
          .dispatch("auth/update", {
            id: this.cursos[this.editedIndex].id,
            nome: this.editedItem.nome,
            sigla: this.editedItem.sigla,
            turno: this.editedItem.turno
          })
          .then(() => {
            this.$router.go(0);
          });
      } else {
        this.cursos.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>