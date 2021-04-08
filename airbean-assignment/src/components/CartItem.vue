<template>
  <article class="holder"> 
           <article class="top"> 
               <article class="left">
                   <article class="box">
              <h2 class="sub-title">{{title}}</h2> 
              </article>
              </article>
              <article class="right">
             
              </article>
                    <aside> 
                    <img v-on:click="addOrder" src="../assets/graphics/arrow-up.svg" alt="">
                    <small> {{count}} </small>
                    <img v-on:click="reduceOrder"  src="../assets/graphics/arrow-down.svg" alt=""> 
                    </aside>
         </article> 
              
         <article class="bottom"> <p>{{price}} Kr</p> </article>
               
         </article>
</template>

<script>
export default {
name: "cartItem",

props:{
    cartItem:Object
},

computed:{
     count(){
        return this.cartItem.count;
       },
    price(){
        return this.cartItem.price;
    },
    title(){
        return this.cartItem.title;
    },
    description(){
        return this.cartItem.desc;
    }
    
},
methods:{
    addOrder(){
        this.$store.commit("addCounter",this.cartItem);
    },
    reduceOrder(){
        this.$store.commit("delFromCart",this.cartItem);
    }
}

}
</script>

<style scoped >
body {

    display:flex;
    align-items: center;
    justify-content: center;
}
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&family=Work+Sans&display=swap");

.wrap{
    padding: 5px;
    
}

.sub-title{
    font-size: 20px;
    margin:0;
    color:#2F2926;
   white-space: nowrap;
   display: flex;
  

}
.box {
    width:275px;
}
.sub-title:after {
     border-bottom: 1px dashed rgba(0, 0, 0, 0.4);
    content: '';
    flex: 1;
    margin-bottom: 4px;
}
.left {
    width:fit-content;
}
.right {
   width: 90%;
}
p {
    margin:0;
    font-size: 12px;
    font-family: 'Work Sans', sans-serif;
}
.holder {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    
}
.top {
    display: flex;
    justify-content: space-between;
    margin-bottom: -5px;
}

aside{
    height: 2rem;
    justify-content: space-between;
    display: flex;
    margin-top:5px;
    flex-direction: column;
}

.bottom {
    margin-top: 2px;
    display: flex;
    justify-content: start;
}



small {
font-weight: 600;
}
</style>