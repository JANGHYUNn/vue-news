import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView';
import UserView from '../views/UserView';

Vue.use(VueRouter);
const mode = process.env.NODE_ENV;

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: mode === 'production' ? '/vue-news' : '/',
      redirect: '/news',
    },
    {
      path: '/news', // url 주소
      component: NewsView, // 보여줄 컴포넌트
      name: 'news',
    },
    {
      path: '/ask',
      component: AskView,
      name: 'ask',
    },
    {
      path: '/jobs',
      component: JobsView,
      name: 'jobs',
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
    {
      path: '/user/:id',
      component: UserView,
    },
  ],
});