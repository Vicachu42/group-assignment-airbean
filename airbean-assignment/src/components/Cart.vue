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
    
    <article class="bottom-holder">
      <article class="top">
        <article class="box">
      <h1 class="total-title">Total</h1>
      </article>
        <h1 class="total-counter"> {{ total }} Kr</h1>
      </article>
  
    <article class="bottom">
    <p class="detail"> inkl moms + drönarleverans </p>
    </article>
    </article>
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
        alert("You need to select items in order to proceed")
      } else {
         this.$router.push("/status");
      this.$store.dispatch('postOrder');
      }
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&family=Work+Sans&display=swap");
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
  height: 565.77px;
  width: 341px;
   font-family: 'PT Serif', serif;
   
}
.box {
  width: 230px;
}
.cart-item {
  width: 90%;
  height: 325px;
}
.detail {
    font-size: 12px;
    font-family: 'Work Sans', sans-serif;
    margin:0;
}
.cartTitle{
  font-family: PT Serif;
font-style: normal;
font-weight: bold;
font-size: 32px;
color: #2F2926;
margin:15px;
}

.btn {

width: 248px;
height: 55px;
display: flex;
justify-content: center;
background: #2F2926;
border-radius: 50px;
margin-top: 25px;
align-items: center;

}

.btn-text{
font-family: 'PT Serif', serif;
font-style: normal;
font-weight: bold;
font-size: 24px;

color: #fff;
}

.btn:hover{
  cursor: pointer;
}
.line {
  width: 166px;
    border: 1px dashed rgba(0, 0, 0, 0.4);
    height: 0;
    margin-top: 22px;
    margin-right: 70px;
}
.bottom-holder {
  display: flex;
  flex-direction: column;
   color:#2F2926;
  width: 90%;
}
.total-title {
  font-size: 23px;
  margin:0;
  display: flex;
}
.total-title:after {
  border-bottom: 1px dashed rgba(0, 0, 0, 0.4);
    content: '';
    flex: 1;
    margin-bottom: 7px;
    margin-left:5px;
}
.top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.bottom{
  display: flex;
  flex-direction: row;
  justify-content: left;
}
.total-counter {
  position: absolute;
  margin:0;
  font-size: 23px;
  right:12px;

}
</style>
