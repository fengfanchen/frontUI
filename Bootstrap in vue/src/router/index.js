import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import aaa from '@/components/aaa';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/aaa',
      name: 'aaa',
      component: aaa
    }
  ]
})
