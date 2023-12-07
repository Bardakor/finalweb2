import { createRouter, createWebHistory } from 'vue-router';
import EventList from '../views/EventList.vue';
import EventDetails from '../views/EventDetails.vue';
import EditEvent from '../components/EditEvent.vue'
import AddEvent from '../views/AddEvent.vue';
import AboutView from '../views/AboutView.vue';


const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails,
  },
  {
    path: '/add',
    name: 'AddEvent',
    props: true,
    component: AddEvent,
  },
  {
    path: '/event/:id/edit',
    name: 'EditEvent',
    props: true,
    component: EditEvent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
  