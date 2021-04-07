<template>
  <div class="wrapper">
    <navbutton v-on:click.native="getvalue"> </navbutton>
    <navbox class="nav" v-if="test"> </navbox>
    <img src="../assets/graphics/graphics-header.svg" alt="" />
    <section class="about-text">
      <h1>Vårt kaffe</h1>
      <p class="sub-header">{{ subHeader }}</p>
      <p>{{ firstSection }}</p>
      <p>{{ secondSection }}</p>
    </section>
    <section>
      <img class="vd" src="../assets/graphics/eva-cortado.jpg" alt="e-cortado" />
      <h3>Eva Cortado</h3>
      <p>VD & Grundare</p>
    </section>
    <img
      class="footer-img"
      src="../assets/graphics/graphics-footer.svg"
      alt=""
    />
  </div>
</template>

<script>
import Navbutton from "../components/Navbutton";
import navbox from "../components/Nav";

export default {
  components: {
    Navbutton,
    navbox,
  },
  name: "About",
  computed: {
    test() {
      return this.$store.state.test;
    },
  },
  methods: {
    getvalue() {
      console.log("hej");
      this.$store.commit("toggle");
    },
  },
  data() {
    return {
      subHeader:
        `Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.`,
      firstSection:
        `Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.`,
      secondSection: 
        `Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.`
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap');

.wrapper {
  width: 375px;
  background: #f3e4e1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
}

.nav {
  position: absolute;
  top: 0;
}

.about-text {
  text-align: left;
  padding: 32px;
}

h1 {
  font-family: 'PT Serif', serif;
  color: #2F2926;
  font-size: 42px;
  margin-top: 0;
  margin-bottom: 17px;
}

h3 {
  font-family: 'PT Serif', serif;
  color: #2F2926;
  font-size: 22px;
  margin-top: 0;
  margin-bottom: 0;
}

p {
  font-family: 'Work Sans', sans-serif;
  color: #2F2926;
  font-size: 12px;
  font-weight: 400;
  line-height: 19.2px;
  padding-bottom: 19.2px;
}

.sub-header {
  font-size: 14px;
  font-weight: 600;
  line-height: 22.4px;
  padding-bottom: 22.4px;
}

.vd {
  border-radius: 999rem;
}
</style>