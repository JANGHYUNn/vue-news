import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView';
import UserView from '../views/UserView';
import bus from '../utils/bus.js';
// import CreateListView from '../views/CreateListView.js';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/vue-news',
      redirect: '/vue-news/news',
    },
    {
      path: '/vue-news/news',
      component: NewsView,
      // component: CreateListView('NewsView'),
      name: 'news',
    },
    {
      path: '/vue-news/ask',
      component: AskView,
      // component: createListView('AskView'),
      name: 'ask',
    },
    {
      path: '/vue-news/jobs',
      component: JobsView,
      // component: createListView('JobsView'),
      name: 'jobs',
    },
    {
      path: '/vue-news/item/:id',
      component: ItemView,
    },
    {
      path: '/vue-news/user/:id',
      component: UserView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(to.name);
  bus.$emit("start:spinner");
  store
    .dispatch("FETCH_LIST", to.name)
    .then(() => {

      next();
    })
    .catch(error => {
      console.log(error);
    });
})
