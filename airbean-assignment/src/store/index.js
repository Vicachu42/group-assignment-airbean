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
            
            const itemInCart = state.cart.find(item => item.id === data.id);
            if(itemInCart) {
                alert("item in cart");
            } else{
                state.counter ++;
                console.log("någontig");
                 state.cart.push(data);
            }
           
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