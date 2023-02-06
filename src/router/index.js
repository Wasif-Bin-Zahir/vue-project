import { createRouter, createWebHistory } from 'vue-router';
import List from '../components/student/List.vue';
import Add from '../components/student/Add.vue';
import View from '../components/student/View.vue';
import Edit from '../components/student/Edit.vue';
import NotFound from '../views/Notfound.vue';

const routes = [
	{
		name: 'add',
		path: '/add',
		component: Add,
	},
	{
		name: 'view',
		path: '/view/:id',
		component: View,
	},
	{
		name: 'edit',
		path: '/edit/:id',
		component: Edit,
	},
	{
		name: 'list',
		path: '/',
		component: List,
	},

	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes,
});

export default router;
