<template>
<div class="wrap">

  <article class="holder"> <article class="button" v-on:click="send"><img src="../assets/graphics/add.svg" alt=""></article>  <article class="top"> <h2 class="sub-title">{{title}}</h2> <p>{{price}} Kr</p> </article>  <article class="bottom"><p>{{description}}</p> </article> </article>
</div>
  
  
</template>

<script>
export default {
props:{
    items:Object
},
computed:{
    price(){
        return this.items.price;
    },
    title(){
        return this.items.title;
    },
    description(){
        return this.items.desc;
    }
    
},
methods:{
    send(){
        console.log(this.items);
    }
}
}
</script>

<style>
body {
    display:flex;
    align-items: center;
    justify-content: center;
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
    justify-content: center;
}
.top p {
    margin-left:75px;
    font-size: 23px;
}
.bottom {
    display: flex;
    justify-content: center;
}
.button {
    width:32px;
    height: 32px;
    background: #2F2926;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
}
.button img {
    height: 11.19px;
    widows: 11.19px;
}
</style>