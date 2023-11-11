import { createRouter, createWebHashHistory } from "vue-router";

import AppLayout from "../layout/AppLayout.vue";

const Profile = () => import("../pages/Profile.vue");

const routes = [
    {
        path: "/",
        component: AppLayout,
        children: [
            {
                path: "/",
                component: Profile,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
