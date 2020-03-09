<template>
    <v-container fluid class="fill-height">
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4" >
                <v-card class="elevation-12">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title>Login</v-toolbar-title>
                    </v-toolbar>
                    <v-form @submit.prevent="onSubmit" ref="form" lazy-validation v-model="valid">
                        <v-card-text>
                            <p class="error--text text-center">{{error}}</p>
                            <v-text-field label="Nome" name="nome" prepend-icon="person" type="text" v-model="nome" required :rules="rules.required"/>
                            <v-text-field label="E-mail" name="email" prepend-icon="mdi-email" type="text" v-model="email" required :rules="[rules.required, rules.email]"/>
                            <v-text-field id="password" label="Password" name="password" prepend-icon="lock" type="password" v-model="password" required :rules="rules.required"/>
                            <v-switch 
                            v-model="habilitado"
                            :label="`Usuário Ativo`"
                            class="mx-2"
                            ></v-switch>
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
            email: '',
            password: '',
            habilitado: true,
            error: '',
            rules: {
            required: value => !!value || 'Required.',
            counter: value => value.length <= 20 || 'Max 20 characters',
            email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
            },
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
                    this.$store.dispatch('auth/newUser', {nome: this.nome, email: this.email, password: this.password, habilitado: this.habilitado})
                        .then(() => {
                            if (this.$store.getters['auth/isAuthenticated']) {
                                this.$router.push('/')
                            } else {
                                this.error = 'Informações Inválidas: Tente um email diferente.'
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
