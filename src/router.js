import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home';
import Deatils from './components/Details';
import City from './components/City';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search/:keyword',
      name: 'search-weather',
      component: City
    },
    {
      path: '/weather/:woeid',
      name: 'details-weather',
      component: Deatils
    }
  ],
  scrollBehavior: function(to, from, savedPos) {
    if (savedPos) {
      return savedPos;
    }

    if (to.hash) {
      return { selector: to.hash };
    }

    return { x: 0, y: 0 };
  }
});
