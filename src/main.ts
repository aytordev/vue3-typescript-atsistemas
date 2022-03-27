import App from '@/App.vue';
import store from '@/store';
import { createApp } from 'vue';

const application = createApp(App);

application.use(store);
application.mount('#app');
