import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView';
import UserView from '../views/UserView';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/vue-news',
      redirect: '/vue-news/news',
    },
    {
      path: '/vue-news/news', // url 주소
      component: NewsView, // 보여줄 컴포넌트
      name: 'news',
    },
    {
      path: '/vue-news/ask',
      component: AskView,
      name: 'ask',
    },
    {
      path: '/vue-news/jobs',
      component: JobsView,
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
