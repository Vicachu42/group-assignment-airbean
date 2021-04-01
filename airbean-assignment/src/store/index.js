import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url = 'http://localhost:3000/api/beans';

export default new Vuex.Store({
    state: {
        coffelistitems:[],
        cart:[],
        itemsInCart:[],
        counter:0,
        test: false,
        toggler:true,
        viewCart: false,
        itemCounter:1,
        

    },
    mutations:{
        

        sendtostate(state,data){
            state.coffelistitems.push(data);
        },

        addCounter(state,data){
            state.counter ++;
            const itemInCart = state.cart.find(item => item.id === data.id);
            if(itemInCart) {
                console.log("item in cart");
                state.itemsInCart.push(data);

              
            } else{
             
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
    },
    getters: {
        
    }
})