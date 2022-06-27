import { createRouter, createWebHashHistory } from 'vue-router';
import homePageView from '../components/dashboard/homePage/HomePageView';
import editorPageView from '../components/dashboard/editorPage/EditorPageView';

export default createRouter({
    mode: history,
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: homePageView,
        },
        {
            path: '/editor',
            component: editorPageView,
        },
    ],
});
