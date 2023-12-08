import { createRouter, createWebHistory } from 'vue-router';
import EventList from '../views/EventList.vue';
import EventDetails from '../views/EventDetails.vue';
import EditEvent from '../components/EditEvent.vue'
import AddEvent from '../views/AddEvent.vue';
import RegistrationUser from '../views/RegistrationUser.vue';
import LoginUser from '../views/LoginUser.vue';


const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
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
  {
    path: '/auth/register',
    name: 'RegistrationUser',
    props: true,
    component: RegistrationUser,
  },
  {
    path: '/auth/login',
    name: 'LoginUser',
    props: true,
    component: LoginUser,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.is_admin == 1) {
          next()
        } else {
          next({ name: 'userboard' })
        }
      } else {
        next()
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('jwt') == null) {
      next()
    } else {
      next({ name: 'userboard' })
    }
  } else {
    next()
  }
});

export default router;
