<template>
  <div class="wrapper">

    

    <img class="header-img" src="../assets/graphics/graphics-header.svg" alt="">
    <navbox class="nav" v-if="test" > </navbox>
    <navbutton v-on:click.native="toggle" v-if="test2"> </navbutton>
    <article v-if="test" v-on:click="toggleback" class="othernavbutton">X</article>

    <h1 class="title">Meny</h1>
  <coffeitems v-for="(items,index) in getCoffeeList" v-bind:key="index" v-bind:items="items"> </coffeitems>
  <img class="footer-img" src="../assets/graphics/graphics-footer.svg" alt="">
  </div>
</template>

<script>

import  coffeitems from "../components/MenuItem";
import navbox from "../components/Nav";
import navbutton from "../components/navbutton";
export default {
    name: 'Menu',

    components:{
      coffeitems,
      navbox,
      navbutton,
       
    },
    data:function(){
      return {
        test: false,
        test2:true,
      }
    },
    computed:{
      getCoffeeList(){
        return this.$store.state.coffelistitems[0];
      }
    },
    methods:{
      toggle(){
        this.test = !false;
        console.log("hej")
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
.header-img {
  
}

.nav {
  position: absolute;
  top:0;
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