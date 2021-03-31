<template>

    <article class="holder">
      <article  class="othernavbutton" v-on:click="close">X</article>
       <h1 v-on:click="goToMenu" > Meny </h1>
       <div class="navdivider"></div>
       <h1 v-on:click="goToOurCoffee" > Vårt kaffe </h1>
       <div class="navdivider"></div>
       <h1 v-on:click="goToMyProfile" > Min profil </h1>
       <div class="navdivider"></div>
       <h1 v-on:click="goToOrderstatus" > Orderstatus </h1>
    </article>
 
</template>

<script>
export default {
  name: "Nav",

  methods:{
    close: function (){
       this.$store.commit("toggle");
    },
    goToMenu: function(){
      this.$router.push("/menu");
      
    },
    goToOurCoffee:function(){
      this.$router.push("/about");
    },
    goToMyProfile:function(){
      this.$router.push('/profile');
    },
    goToOrderstatus:function(){
      this.$router.push('/status');
    },
  }
}
</script>

<style scoped>
.holder {
  position: relative;
  width:375px;
  height: 667px;
  background:#2F2926;
  display: flex;
  align-items: center;
  justify-content: center;
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

.othernavbutton:hover {
  cursor: pointer;
}

h1{
    margin-bottom: 16px;
  color: #fff;
  font-size: 32px;
}
h1:hover {
  cursor: pointer;
}
.navdivider {
  
  width: 48px;
height: 1px;
background: rgba(255, 255, 255, 0.2);
border-radius: 2px;
}


</style>
