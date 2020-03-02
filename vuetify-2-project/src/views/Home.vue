<template>
  <div>
    <v-card-widget enableActions :title="'Página Inicial'">
      <div slot="widget-header-action">

      </div>
      <div slot="widget-content">
        <v-row>
          <v-col cols="12">
            <v-data-table
                    :headers="headers"
                    :items="usuarios"
                    :items-per-page="5"
                    class="elevation-1"
            ></v-data-table>
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
import {RepositoryFactory} from "@/repositories/RepositoryFactory";
const usuarioRepo = RepositoryFactory.get("usuario");

export default {
  name: 'home',
  components: {
    VCardWidget
  },

  data: () => ({
    headers: [
      {
        text: 'Nome',
        align: 'left',
        value: 'nome',
      },
      { text: 'Email', value: 'email' },
      { text: 'Usuário Ativo', value: 'habilitado' }
    ],
    usuarios :[]
  }),

  created() {
    usuarioRepo.getAll().then(res => {
      this.usuarios = res.data;
    }).catch(console.error);
  },

  computed: {

  },

  methods: {
    newUser() {
      this.$router.push('/newUser')
    }
  }
}
</script>
