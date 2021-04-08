<template>
  <div>
    <div class="wrapper">
      <navbutton v-on:click.native="getvalue"> </navbutton>
      <navbox class="nav" v-if="test"> </navbox>
      <img src="../assets/graphics/graphics-header.svg" alt="" />

      <article class="user-info">
        <img class="profile-img" src="../assets/graphics/profile.svg" alt="" />
        <h1>Sixten Kaffelövér</h1>
        <p>sixten.kaffelover@zocom.se</p>
      </article>

      <article class="user-history">
        <h1>Orderhistorik</h1>
        <section class="order-num">
          <h3>#AB1123282323Z</h3>
          <p>20/03/06</p>
        </section>
        <section class="order-sum">
          <p>total ordersumma</p>
          <p>443 kr</p>
        </section>
        <div class="profile-divider"></div>

        <section class="order-num">
          <h3>#AB1128382323X</h3>
          <p>20/03/03</p>
        </section>
        <section class="order-sum">
          <p>total ordersumma</p>
          <p>333 kr</p>
        </section>
        <div class="profile-divider"></div>

        <section class="order-num">
          <h3>#AB1444482323X</h3>
          <p>20/02/21</p>
        </section>
        <section class="order-sum">
          <p>total ordersumma</p>
          <p>893 kr</p>
        </section>

        <div class="total-divider"></div>
        <section class="total-sum">
          <p>Totalt spenderat</p>
          <p>1669 kr</p>
        </section>
      </article>
    </div>
  </div>
</template>

<script>
import navbutton from "../components/navbutton";
import navbox from "../components/Nav";

export default {
  name: "Profile",
  components: {
    navbutton,
    navbox,
  },

  computed: {
    test() {
      return this.$store.state.test;
    },
  },
  methods: {
    getvalue() {
      this.$store.commit("toggle");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap");

* {
  margin: 0;
}

.wrapper {
  width: 375px;
  min-height: 100vh;
  background: #2f2926;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;

}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-bottom: auto;
}

.user-info img {
  width: 94px;
  height: 94px;
}

.user-info h1 {
  font-family: "PT Serif", serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
color: #fff;

}

.user-info p {
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 29px;

  display: flex;
  align-items: center;
  text-align: center;

  color: rgba(255, 255, 255, 0.8);
}

.nav {
  position: absolute;
  top: 0;
}

.user-history {
  width: 90%;
  text-align: left;
  margin-bottom: auto;
}

.user-history h1 {
  font-family: "PT Serif", serif;

  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 15px;

  color: #ffffff;
}

.order-num {
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 19px;
  margin-top: 8px;
}

.order-num h3 {
  font-family: "Work Sans", sans-serif;

  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: rgba(255, 255, 255, 0.7);
}

.order-num p {
  font-family: "Work Sans", sans-serif;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  color: rgba(255, 255, 255, 0.7);
}
.order-sum {
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 19px;
  margin-bottom: 5px;
}
.order-sum p {
  font-family: "Work Sans", sans-serif;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 19px;
  color: rgba(255, 255, 255, 0.5);
}

.profile-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
}
.total-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.6);
}
.total-sum {
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 19px;
 font-family: "Work Sans", sans-serif;
color: rgba(255, 255, 255, 0.8);;

}
.total-sum p {
  font-weight: 700;
  font-size:14px;
}
</style>