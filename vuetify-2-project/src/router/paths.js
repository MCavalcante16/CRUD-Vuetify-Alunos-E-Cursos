import store from '../store'
import LoginPage from '../views/Login'
import Home from '../views/Home'
import formNewUser from '../views/formNewUser'
import Cursos from '../views/Cursos'
import newCurso from '../views/formNewCurso'


export default [


    /* Geral */
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        meta: {
            public: true,
        },
        props: true,
        name: 'Login',
        component: LoginPage
    },

    {
        path: '/newUser',
        name: 'newUser',
        component: formNewUser
    },

    {
        path: '/cursos',
        name: 'Cursos',
        component: Cursos
    },

    {
        path: '/cursos/new',
        name: 'newCurso',
        component: newCurso
    },

    {
        path: '/logout',
        meta: { breadcrumb: true },
        name: 'Logout',
        beforeEnter (to, from, next) {
            store.dispatch('auth/logout', false)
        },
        component: LoginPage
    },

];
