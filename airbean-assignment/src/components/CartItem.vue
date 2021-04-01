<template>
  <article class="holder"> 
           <article class="top"> 
              <h2 class="sub-title">{{title}}</h2> 
                    <aside> 
                    <img src="../assets/graphics/arrow-up.svg" alt="">
                    <small> {{counter}} </small>
                    <img src="../assets/graphics/arrow-down.svg" alt=""> 
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
     counter(){
         return this.$store.state.itemCounter;
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

}
</script>

<style scoped >
body {

    display:flex;
    align-items: center;
    justify-content: center;
}

.wrap{
    padding: 5px;
}

.sub-title{
    font-size: 23px;
    margin:0;

}
p {
    margin:0;
}
.holder {
    display: flex;
    flex-direction: column;
}
.top {
    display: flex;
    justify-content: space-between;
}

aside{
    height: 2rem;
    justify-content: space-between;
    display: flex;

    flex-direction: column;
}

.bottom {
    margin-top: 2px;
    display: flex;
    justify-content: start;
}


</style>