<template>

    <article class="cartHolder">
        <h1> Din beställning </h1>
        <cart-item v-for="(cartItem, index) in cartItems" :key="index" v-bind:cartItem="cartItem"/>
    </article>
    
</template>

<script>
import cartItem from "./CartItem";


export default {
  name: "Cart",
  components: {
      cartItem
    
  },
  computed: {
    cartItems(){
        return this.$store.state.cart;
      },
  },
  methods:{
    
  }
}
</script>

<style scoped>

.cartHolder{
  position: absolute;
left: 4.53%;
right: 4.53%;
top: 11.03%;
bottom: 2.6%;

background: #FFFFFF;
box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
border-radius: 3px;
}

</style>
