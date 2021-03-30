import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url = 'http://localhost:3000/api/beans';

export default new Vuex.Store({
    state: {},
    mutations:{

    },
    actions: {
        async getMenuItems() {
            const response = await fetch(url, { method: 'GET'});
            const data = await response.json();
            console.log(data);
        }
    }
})