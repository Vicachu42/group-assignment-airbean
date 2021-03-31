<template>
  <div class="wrapper">
     <navbutton v-on:click.native="getvalue"> </navbutton>
     <navbox class="nav" v-if="test"> </navbox>
    <img src="../assets/graphics/graphics-header.svg" alt="">
    
    <img src="../assets/graphics/eva-cortado.jpg" alt="">
    <h3>Eva Cortado</h3>
    <p>VD och Grundare</p>
   
  </div>
</template>

<script>
import navbutton from "../components/navbutton"; 
import navbox from "../components/Nav";

export default {
    name: 'Profile',
     components:{
      navbutton,
      navbox,
    },

    computed:{
      test(){
        return this.$store.state.test
      }
    },
    methods:{
      getvalue(){
        console.log("hej");
        this.$store.commit("toggle");

      }
    }
}

</script>

<style scoped>
.wrapper {
  width:375px;
  background:#F3E4E1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
}

.nav {
  position: absolute;
  top:0;
}
</style>