import { createRouter, createWebHistory } from "vue-router";
import AppNotFound from "./pages/AppNotFound.vue";

const router = createRouter({
    history: createWebHistory(), 
    routes: [

        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: AppNotFound,
        }
    ]

}); 

export {router}; 