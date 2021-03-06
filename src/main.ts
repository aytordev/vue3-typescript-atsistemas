import App from '@/App.vue';
import '@/assets/styles/index.scss';
import i18n from '@/locale';
import router from '@/router';
import store from '@/store';
import { createApp } from 'vue';

const application = createApp(App);

application.use(router);
application.use(store);
application.use(i18n);
application.mount('#app');
