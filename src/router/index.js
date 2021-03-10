import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

import aboutView from '../views/About';
import vmodelView from '../views/basics/Vmodel';
import conditionsView from '../views/basics/Conditions';
import listingView from '../views/basics/Listing';
import computedAndWatchersView from '../views/basics/ComputedAndWatchers';
import componentRegistrationView from '../views/basics/ComponentRegistration';

import lifecyclesView from '../views/advanced/Lifecycles';
import communicationView from '../views/advanced/Communication';
import slotView from '../views/advanced/Slot';
import mixinsView from '../views/advanced/Mixins';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: aboutView
  },
  {
    path: '/basics/vmodel',
    name: 'Vmodel',
    component: vmodelView
  },
  {
    path: '/basics/conditions',
    name: 'Conditions',
    component: conditionsView
  },
  {
    path: '/basics/listing',
    name: 'Listing',
    component: listingView
  },
  {
    path: '/basics/computed-and-watchers',
    name: 'ComputedAndWatchers',
    component: computedAndWatchersView
  },
  {
    path: '/basics/component-registration',
    name: 'ComponentRegistration',
    component: componentRegistrationView
  },
  {
    path: '/advanced/lifecycles',
    name: 'lifecycles',
    component: lifecyclesView
  },
  {
    path: '/advanced/communication',
    name: 'communication',
    component: communicationView
  },
  {
    path: '/advanced/slot',
    name: 'slot',
    component: slotView
  },
  {
    path: '/advanced/mixins',
    name: 'mixins',
    component: mixinsView
  }
]



// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   else next()
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // beforeRouteEnter (to, from, next) {
  //   // called before the route that renders this component is confirmed.
  //   // does NOT have access to `this` component instance,
  //   // because it has not been created yet when this guard is called!
  // },
  // beforeRouteUpdate (to, from, next) {
  //   // called when the route that renders this component has changed.
  //   // This component being reused (by using an explicit `key`) in the new route or not doesn't change anything.
  //   // For example, for a route with dynamic params `/foo/:id`, when we
  //   // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
  //   // will be reused (unless you provided a `key` to `<router-view>`), and this hook will be called when that happens.
  //   // has access to `this` component instance.
  // },
  // beforeRouteLeave (to, from, next) {
  //   // called when the route that renders this component is about to
  //   // be navigated away from.
  //   // has access to `this` component instance.
  // }
})

export default router
