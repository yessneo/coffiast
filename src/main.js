import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import store from './store.js';

import TheRandomizer from './components/TheRandomizer.vue';
import HomePage from './components/HomePage.vue';
import LaunchedSteps from './components/steps/LaunchedSteps.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage},
        { path: '/randomizer', component: TheRandomizer },
        { path: '/launched', component: LaunchedSteps },
    ]
});


const app = createApp(App);

app.use(store);
app.use(router);
app.mount('#app');


