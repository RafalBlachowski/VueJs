import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import LazyLoadDirective from './directives/LazyLoadDirective';
import router from './router';

const app = createApp(App);

app.use(router);

app.directive('lazyLoad', LazyLoadDirective);
app.mount('#app');
