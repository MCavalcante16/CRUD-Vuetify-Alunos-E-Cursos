<template>
    <v-container fluid class="fill-height">
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4" >
                <v-card class="elevation-12">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title>Cadastro de Curso</v-toolbar-title>
                    </v-toolbar>
                    <v-form @submit.prevent="onSubmit" ref="form" lazy-validation v-model="valid">
                        <v-card-text>
                            <p class="error--text text-center">{{error}}</p>
                            <v-text-field label="Nome" name="nome" prepend-icon="person" type="text" v-model="nome" required :rules="rules.required"/>
                            <v-text-field label="Sigla" name="sigla" prepend-icon="mdi-email" type="text" v-model="sigla" required :rules="[rules.required, rules.email]"/>
                            
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer />
                            <v-btn color="primary" type="submit" :loading="loading" large style="width: 100%;">Cadastrar</v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { mapGetters, mapState } from 'vuex'

    export default {
        props: ["to", "invalidToken"],
        data: () => ({
            valid: true,
            loading: false,
            nome: '',
            sigla: '',
            error: '',
            rules: {
            required: value => !!value || 'Required.',
            counter: value => value.length <= 20 || 'Max 20 characters'
          },
        }),
        created() {
            if (this.invalidToken) {
                this.error = 'Sua sessão expirou. Faça login novamente'
            }
        },
        methods: {
            onSubmit () {
                this.loading = true
                if (this.$refs.form.validate()) {
                    this.$store.dispatch('auth/newCurso', {nome: this.nome, sigla: this.sigla })
                        .then(() => {
                            if (this.$store.getters['auth/isAuthenticated']) {
                                this.$router.push('/cursos')
                            } else {
                                this.error = 'Informações Inválidas'
                            }
                        })
                }

                this.loading = false
            }
        },
        computed: {
            ...mapState({
                token: state => state.auth.token
            })
        }
    };
</script>

<style scoped lang="css">

</style>
