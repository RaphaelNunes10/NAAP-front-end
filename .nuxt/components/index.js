import { wrapFunctional } from './utils'

export { default as Ranking } from '../..\\components\\Ranking.vue'
export { default as Spinner } from '../..\\components\\Spinner.vue'
export { default as Summary } from '../..\\components\\Summary.vue'
export { default as TopBar } from '../..\\components\\TopBar.vue'
export { default as Transactions } from '../..\\components\\Transactions.vue'

export const LazyRanking = import('../..\\components\\Ranking.vue' /* webpackChunkName: "components/ranking" */).then(c => wrapFunctional(c.default || c))
export const LazySpinner = import('../..\\components\\Spinner.vue' /* webpackChunkName: "components/spinner" */).then(c => wrapFunctional(c.default || c))
export const LazySummary = import('../..\\components\\Summary.vue' /* webpackChunkName: "components/summary" */).then(c => wrapFunctional(c.default || c))
export const LazyTopBar = import('../..\\components\\TopBar.vue' /* webpackChunkName: "components/top-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyTransactions = import('../..\\components\\Transactions.vue' /* webpackChunkName: "components/transactions" */).then(c => wrapFunctional(c.default || c))
