import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url = 'http://localhost:3000/api/beans';

export default new Vuex.Store({
    state: {
        coffelistitems:[],
        cart:[],
        totalAmount: 0,
        counter:0,
        eta:'',
        orderNumber:'',
        test: false,
        toggler:true,
        viewCart: false,
    
        

    },
    mutations:{
        sendtostate(state,data){
            state.coffelistitems.push(data);
        },

        updateOrder(state, orderData){
            state.eta = '';
            state.orderNumber = '';
            state.eta = orderData.eta;
            state.orderNumber = orderData.orderNr;

           
            state.cart= [];
            state.totalAmount= 0;
            state.counter= 0

        },

        addCounter(state, data) {
            state.counter++;
            const itemInCartIndex = state.cart.findIndex(item => item.id === data.id);
          
            if (itemInCartIndex === -1) {
                //item is new
               
                state.cart.push({
                  ...data,
                    count: 1,
                })
            } else {
                // item exist add to counter
    
                const newItem = {
                  ...state.cart[itemInCartIndex],
                    count: state.cart[itemInCartIndex]['count'] + 1
                }

                //delete and replace existing with new cartItem
                state.cart.splice(itemInCartIndex, 1, newItem);
             
            }

            let total = 0;
            for (let item of state.cart) {
                total += item.price * item.count;

            }

            state.totalAmount = total;

        },

        delFromCart(state, data) {
            state.counter--;
            const itemInCartIndex = state.cart.findIndex(item => item.id === data.id);
          
            if (itemInCartIndex === -1) {
                //this should not happen
               
            } else {
            
                if (state.cart[itemInCartIndex]['count'] === 1){
                    // only one item exists, we should remove it 
                    state.cart.splice(itemInCartIndex,1)
                } else {
                    // more than one  item exists, reduce count 

                     // has same cartItem with diffrent count
                const newItem = {
                    ...state.cart[itemInCartIndex],
                    count: state.cart[itemInCartIndex]['count'] - 1
                }
                //delete and replace existing with new cartItem
                state.cart.splice(itemInCartIndex, 1, newItem);
                }
                
            }

            let total = 0;
            for (let item of state.cart) {
                total += item.price * item.count;

            }

            state.totalAmount = total;

        },

        toggle(state){
            state.test = !state.test;
            state.toggler = !state.toggler;
        },
        showCart(state){
            state.viewCart = !state.viewCart;
            
        },

        resetCart(state) {
            state.viewCart = false;
        }
        
    },
    actions: {
        async getMenuItems(ctx) {
            const response = await fetch(url, { method: 'GET'});
            const data = await response.json();
           
            const newdata = data.menu;
            console.log(newdata);
            ctx.commit("sendtostate",newdata);
        },
        async postOrder(ctx){
            const response = await fetch(url, { method: 'POST' });
            const data = await response.json();
            console.log(data)
           
           
           ctx.commit("updateOrder", data);
           }
    },
    
})