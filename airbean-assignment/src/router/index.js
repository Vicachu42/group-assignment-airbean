import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '../views/Landing.vue';
import Menu from '../views/Menu.vue';
import About from '../views/About.vue';
import Status from '../views/Status.vue';
import Profile from '../views/Profile.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: Landing
    },
    {
        path: '/menu',
        name: 'Menu',
        component: Menu
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/status',
        name: 'Status',
        component: Status
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }
];

const router = new VueRouter ({
    routes
});

export default router;