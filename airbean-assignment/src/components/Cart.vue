<template>

      <article class="cartHolder">
    <h1 class="cartTitle">Din beställning</h1>
    <div class="cart-item">
      <cart-item 
      v-for="(cartItem, index) in cartItems"
      :key="index"
      v-bind:cartItem="cartItem"
    />
    </div>
    

    <h1>your total: {{ total }}</h1>
    <div v-on:click="postOrder" class="btn">
      <p class="btn-text" > Take my money!</p>
   </div>
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
    cartItems() {
      return this.$store.state.cart;
    },
    total() {
      return this.$store.state.totalAmount;
    },
  },
  methods:{
    postOrder: function(){
      if( this.$store.state.cart.length === 0){
        alert("make an order")
      } else {
         this.$router.push("/status");
      this.$store.dispatch('postOrder');
      }
    }
  }
}
</script>

<style scoped>

.cartHolder {
  position: absolute;
  left: 4.53%;
  right: 4.53%;
  top: 11.03%;
  bottom: 2.6%;

display: flex;
flex-direction: column;
align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  border-radius: 3px;

 

}

.cart-item {
  width: 90%;

}

.cartTitle{
  font-family: PT Serif;
font-style: normal;
font-weight: bold;
font-size: 32px;
color: #2F2926
}

.btn {

width: 248px;
height: 55px;
display: flex;
justify-content: center;
background: #2F2926;
border-radius: 50px;

}

.btn-text{
font-family: 'PT Serif', serif;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 55px;
color: #fff;
}

.btn:hover{
  cursor: pointer;
}

</style>
