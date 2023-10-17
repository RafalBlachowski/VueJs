import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import LazyLoadDirective from './directives/LazyLoadDirective';
import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.directive('lazyLoad', LazyLoadDirective);
app.mount('#app');
