import { createRouter, createWebHistory } from 'vue-router';
import EventList from '../views/EventList.vue';
import EventDetails from '../views/EventDetails.vue';
import EditEvent from '../components/EditEvent.vue'
import AddEvent from '../views/AddEvent.vue';
import RegistrationUser from '../views/RegistrationUser.vue';
import LoginUser from '../views/LoginUser.vue';
import VueJwtDecode from "vue-jwt-decode";

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/add',
    name: 'AddEvent',
    props: true,
    component: AddEvent,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/event/:id/edit',
    name: 'EditEvent',
    props: true,
    component: EditEvent,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/auth/register',
    name: 'RegistrationUser',
    props: true,
    component: RegistrationUser,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/auth/login',
    name: 'LoginUser',
    props: true,
    component: LoginUser,
    meta: {
      requiresAuth: false,
    },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});



async function isAuthenticated() {
  const { default: store } = await import('../main.js'); // Adjust the path as necessary
  const token = localStorage.getItem('user');
  if (token) {
    const decodedToken = VueJwtDecode.decode(token);
    const currentTime = Date.now() / 1000;
    const isValid = decodedToken.exp > currentTime;

    store.commit('editIsAuth', isValid);
    console.log(store.state.isAuth)
    return isValid;
  }
  store.commit('editIsAuth', false);
  return false;
}

router.beforeEach(async (to, from, next) => {
  const auth = await isAuthenticated();
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (auth) {
      next();
      return;
    }
    next('/auth/login');
  } else {
    next();
  }
});

export default router;
