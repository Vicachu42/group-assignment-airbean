import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url = 'http://localhost:3000/api/beans';

export default new Vuex.Store({
    state: {
        coffelistitems:[],
        cart:[],
        counter:0,
        test: false,
        toggler:true,
        viewCart: false,

    },
    mutations:{

        sendtostate(state,data){
            state.coffelistitems.push(data);
        },
        addCounter(state,data){
            state.counter ++;
           // addToCart(data)
            state.cart.push(data);
        },
        toggle(state){
            state.test = !state.test;
            state.toggler = !state.toggler;
        },
        showCart(state){
            state.viewCart = !state.viewCart;
            
        }
        
    },
    actions: {
        async getMenuItems(ctx) {
            const response = await fetch(url, { method: 'GET'});
            const data = await response.json();
           
            const newdata = data.menu;
            console.log(newdata);
            ctx.commit("sendtostate",newdata);
        }
    }
})