import { createRouter, createWebHistory } from 'vue-router'
import Map from '@/views/map.vue';



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/map',
            component: Map
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash, behavior: 'smooth' };
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});

export default router;