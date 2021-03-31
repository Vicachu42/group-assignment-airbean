<template>
  <div class="wrapper">
     <navbutton v-on:click.native="getvalue"> </navbutton>
     <navbox class="nav" v-if="test"> </navbox>
    <img src="../assets/graphics/graphics-header.svg" alt="">
    <section>
      <h1>Vårt kaffe</h1>
      <p>{{ subHeader }}</p>
      <p>{{ bodyText }}</p>
    </section>
    <section>
    <img src="../assets/graphics/eva-cortado.jpg" alt="">
      <h3>Eva Cortado</h3>
      <p>VD & Grundare</p>
    </section>
    <img class="footer-img" src="../assets/graphics/graphics-footer.svg" alt="">
  </div>
</template>

<script>
import navbutton from "../components/navbutton"; 
import navbox from "../components/Nav";

export default {
    components:{
      navbutton,
      navbox,
      
    },
    name: 'About',
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
    },
    data() {
      return {
        subHeader: 'Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.',
        bodyText: 'Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.'
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