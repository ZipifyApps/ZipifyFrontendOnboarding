import '../styles/application.css';
import App from './App';
import { createApp } from 'vue';
import router from './shared/router';
import component from '/app-frontend/packs/components/core/layout';

const app = createApp(App);

component.forEach(component => {
    app.component(component.name, component);
})
app.use(router);
app.mount(document.querySelector('[data-app]'));
