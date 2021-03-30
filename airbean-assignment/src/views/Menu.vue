<template>
  <div class="wrapper">
    <h1 class="title">Meny</h1>
  <coffeitems v-for="(items,index) in getCoffeeList" v-bind:key="index" v-bind:items="items"> </coffeitems>
  </div>
</template>

<script>

import  coffeitems from "../components/MenuItem"

export default {
    name: 'Menu',

    components:{
      coffeitems
    },
    computed:{
      getCoffeeList(){
        return this.$store.state.coffelistitems[0];
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
  justify-content: space-evenly;
}
</style>