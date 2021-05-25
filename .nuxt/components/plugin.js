import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Ranking: () => import('../..\\components\\Ranking.vue' /* webpackChunkName: "components/ranking" */).then(c => wrapFunctional(c.default || c)),
  Spinner: () => import('../..\\components\\Spinner.vue' /* webpackChunkName: "components/spinner" */).then(c => wrapFunctional(c.default || c)),
  Summary: () => import('../..\\components\\Summary.vue' /* webpackChunkName: "components/summary" */).then(c => wrapFunctional(c.default || c)),
  TopBar: () => import('../..\\components\\TopBar.vue' /* webpackChunkName: "components/top-bar" */).then(c => wrapFunctional(c.default || c)),
  Transactions: () => import('../..\\components\\Transactions.vue' /* webpackChunkName: "components/transactions" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
