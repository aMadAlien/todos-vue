import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import TodoList from "./components/TodoList.vue";
import NotFound from "./components/NotFound.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: HomePage},
        {path: '/main', component: TodoList},
        {path: '/others', component: NotFound}
    ]
})