import Vue from 'vue'
import Vuex from 'vuex'

import Spinner from '~/modules/Spinner'
import Api from '~/modules/Api'

Vue.use(Vuex)

const modules = {
    Spinner,
    Api
}

export default () => new Vuex.Store({
    modules
})