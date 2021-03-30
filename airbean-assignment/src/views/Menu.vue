<template>
  <div class="wrapper">
    <img src="../assets/graphics/graphics-header.svg" alt="">
    <navbutton class="nav" v-if="test" > </navbutton>
    <article v-on:click="toggle"  class="navbutton"><img class="naviocon" src="../assets/graphics/navicon.svg" alt=""></article>
    <article v-if="test" v-on:click="toggleback" class="othernavbutton">X</article>
    <h1 class="title">Meny</h1>
  <coffeitems v-for="(items,index) in getCoffeeList" v-bind:key="index" v-bind:items="items"> </coffeitems>
  <img class="footer-img" src="../assets/graphics/graphics-footer.svg" alt="">
  </div>
</template>

<script>

import  coffeitems from "../components/MenuItem";
import navbutton from "../components/Nav";

export default {
    name: 'Menu',

    components:{
      coffeitems,
      navbutton,
       
    },
    data:function(){
      return {
        test: false,
      }
    },
    computed:{
      getCoffeeList(){
        return this.$store.state.coffelistitems[0];
      }
    },
    methods:{
      toggle(){
        this.test = true;
      },
      toggleback(){
        this.test = false;
      }
    }
}
</script>

<style scoped>
.title{
  font-size: 42px;
}

.wrapper {
  width:375px;
  height: 839px;
  background:#F3E4E1;
  display: flex;
  flex-direction: column;
  position: relative;

}
.footer-img {
  margin-top: auto;
}
.navbutton {
  position: absolute;
left: 4.27%;
right: 82.93%;
top: 1.91%;
bottom: 92.37%;
 width: 48px;
    height: 48px;
    background: white;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav {
  position: absolute;
}
.othernavbutton {
    position: absolute;
left: 4.27%;
right: 82.93%;
top: 1.91%;
bottom: 92.37%;
 width: 48px;
    height: 48px;
    background: white;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>