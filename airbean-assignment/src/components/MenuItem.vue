<template>
<div class="wrap">
    <article class="holder">
        <article class="button" v-on:click="send"> <img src="../assets/graphics/add.svg" alt=""> </article>
            <article class="top">
                <h2 class="sub-title">{{title}}</h2>
                <!-- <div class="horizontal_dotted_line"></div> -->
                <!-- <div class="line"></div> -->
                <article class="description"> <p>{{description}}</p> </article>
                

            </article>

          <p class="price">{{price}} Kr</p>

    </article>
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
        this.$store.commit("addCounter",this.items);

    }
}
}
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Work+Sans&display=swap%27);

body {

    display:flex;
    align-items: center;
    justify-content: center;
}

/* .line {
    width: 70%;
    border: 1px dashed rgba(0, 0, 0, 0.4);
    height: 0;
    margin-top: 22px;
    margin-right: 70px;
} */

.wrap{
    padding: 15px;
    margin: 0px 20px 0px 20px;

}

.sub-title{
    font-family: PT Serif;
    font-weight: bold;
    font-size: 23px;
    margin: 0;
    color: #2F2926;
    text-align: left;
    display: flex;
}


/* border: 1px dashed rgba(0, 0, 0, 0.4); */

.sub-title:after {
    border-bottom: 1px dashed rgba(0, 0, 0, 0.4);
    content: '';
    flex: 1;
    margin-bottom: 4px;
}

p {
    font-family: 'Work Sans', sans-serif;
    margin:0;
    color: #2F2926;

}

.holder {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.price {
    font-family: PT Serif;
    font-weight: bold;
    font-size: 23px;
}

.top {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 194.44px;
}

/* .top p {
    margin-left:75px;
    font-size: 23px;
} */

.description {
    display: flex;
    justify-content: flex-start;
    font-size: 12px;
}

.button {
    width:32px;
    height: 32px;
    background: #2F2926;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    /* box-sizing: border-box; */
}

.button img {
    height: 11.19px;
    widows: 11.19px;
}

.button:hover {
     cursor: pointer;
}
</style>