import axios from 'axios'


const show = function ({ commit }) {


    this.dispatch('Spinner/setSpinner', true)

    axios
        .get(`https://run.mocky.io/v3/fbb7ec01-1dab-4f90-9130-683f475d7d67`)
        .then(res => {
            commit('SET_DATA', res.data);
            return res.data
        })
        .catch(e => {
            catchError(e);
        })
        .finally(() => {

            this.dispatch('Spinner/setSpinner', false)

        })
}

export default {
    show
}