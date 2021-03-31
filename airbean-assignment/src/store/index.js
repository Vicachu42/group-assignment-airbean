import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url = 'http://localhost:3000/api/beans';

export default new Vuex.Store({
    state: {
        coffelistitems:[],
    },
    mutations:{
        //update coffeeListItems 
        sendtostate(state,data){
            state.coffelistitems.push(data);
        }
    },
    actions: {
        // fetch coffee data from web server. 
        async getMenuItems(ctx) {
            const response = await fetch(url, { method: 'GET'});
            const data = await response.json();
           
            const newdata = data.menu;
            console.log(newdata);
            ctx.commit("sendtostate",newdata);
        }
    }
})