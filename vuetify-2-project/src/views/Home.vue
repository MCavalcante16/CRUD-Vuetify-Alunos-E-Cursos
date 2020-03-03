
<template>
  <div>
    <v-card-widget enableActions :title="'Página Inicial'">
      <div slot="widget-header-action"></div>
      <div slot="widget-content">
        <v-row>
          <v-col cols="12">
            <v-data-table
              :headers="headers"
              :items="usuarios"
              :items-per-page="5"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat color="white">
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>
                  <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on }">
                      <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field v-model="editedItem.nome" label="Nome"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-switch v-model="editedItem.habilitado" label= "`Ativo: ${}`"></v-switch>
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
              
              <template v-slot:item.acoes= "{ item }">
                <v-icon small class="mr-2" @click= "editItem(item)">mdi-pencil</v-icon>
                <v-icon small @click= "deleteItem(item)">mdi-delete</v-icon>
              </template>
              
              <template v-slot:no-data>
                <v-btn color="primary" @click= "initialize">Reset</v-btn>
              </template>
            </v-data-table>
          </v-col>
        </v-row>

        <v-btn @click="newUser" text style="float: left;">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <p style="margin-top: 7px; padding-left: 10px;">Adicionar Novo Usuário</p>
      </div>
    </v-card-widget>
  </div>
</template>



<script>
// @ is an alias to /src
import VCardWidget from "@/components/VWidget";
import { RepositoryFactory } from "@/repositories/RepositoryFactory";
const usuarioRepo = RepositoryFactory.get("usuario");
export default {
  name: "home",
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
      { text: "Email", value: 'email' },
      { text: "Usuário Ativo", value: 'habilitado', sortable: false },
      { text: "Ações", value: 'acoes', sortable: false }
    ],
    usuarios: [],
    editedIndex: -1,
    editedItem: {
      nome: 'nome',
      email: 'email',
      habilitado: 'habilitado'
    },
    defaultItem: {
      nome: "",
      email: "",
      habilitado: false
    }
  }),
  created() {
    usuarioRepo
      .getAll()
      .then(res => {
        this.usuarios = res.data;
      })
      .catch(console.error);
  },
  computed: {
     formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
  },
  methods: {
    newUser() {
      this.$router.push("/newUser");
    },
      editItem (item) {
        this.editedIndex = this.usuarios.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.usuarios.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.usuarios.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.usuarios[this.editedIndex], this.editedItem)
        } else {
          this.usuarios.push(this.editedItem)
        }
        this.close()
      }    
  }
};
</script>