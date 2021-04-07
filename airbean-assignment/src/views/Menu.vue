<template>
  <div class="wrapper">
    <img class="header-img" src="../assets/graphics/graphics-header.svg" alt="">


    <navbox class="nav"  v-if="test"  > </navbox>
    <navbutton v-on:click.native="toggle" v-else > </navbutton>

        <cart v-if="viewCart" />
  

    <article class="basket-button" v-on:click="toggleCart" v-if="toggler" >
      <img class="basket" src="../assets/graphics/bag.svg"  alt="">
      <div class="item-counter">{{counter}}</div>
    </article>


    <h1 class="title">Meny</h1>
  <coffeitems  v-for="(items,index) in getCoffeeList" v-bind:key="index" v-bind:items="items"> </coffeitems>
  <img class="footer-img" src="../assets/graphics/graphics-footer.svg" alt="">
  </div>
</template>

<script>

import coffeitems from "../components/MenuItem";
import navbox from "../components/Nav";
import Navbutton from "../components/Navbutton";
import Cart from "../components/Cart"

export default {
    name: 'Menu',

    components:{
      coffeitems,
      navbox,
      Navbutton,
      Cart
       
    },
    
    data:function(){
      return {
        
      }
    },
    computed:{
      getCoffeeList(){
        return this.$store.state.coffelistitems[0];
      },
      counter(){
         return this.$store.state.counter;
       },
        test(){
        return this.$store.state.test
      },
      toggler(){
        return this.$store.state.toggler;
      },
      viewCart(){
        return this.$store.state.viewCart
      }
    },
    methods:{
      toggle(){
         this.$store.commit("toggle");
      },
      toggleCart(){
         this.$store.commit("showCart");
      },
     
    },

}
</script>

<style scoped>

.title{
  font-size: 42px;
  margin:0;
}

.wrapper {
  
  width:375px;
  height: 839px;
  background:#F3E4E1;
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  position: relative;

}
.footer-img {
  margin-top: auto;
}


.nav {
  position: absolute;
  top:0;
}


.basket-button {
  background-color: #2F2926;
  height: 48px;
  width: 48px;
  border-radius: 999rem;
  position: absolute;
  left: 82.93%;
  right: 4.27%;
  top: 1.91%;
  bottom: 90.94%;
}

.basket-button:hover {
  cursor: pointer;
}

.basket {
  position: absolute;
  top: 12px;
  right: 16px;
}

.item-counter {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E5674E;
  color: white;
  height: 22px;
  width: 22px;
  border-radius: 999rem;
  position: absolute;
  top: -15%;
  right: -4%;
}
</style>