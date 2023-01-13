import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "@/components/HomePage";
import CatalogPage from "@/components/CatalogPage";
import ProductPage from "@/components/ProductPage";
import NotFound from "@/components/NotFound";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: CatalogPage
        },
        {
            path: '/product/:id',
            name: 'product',
            component: ProductPage
        },
        {
            path: '/:catchAll(.*)',
            name: 'notfound',
            component: NotFound,
        },

    ]
})
