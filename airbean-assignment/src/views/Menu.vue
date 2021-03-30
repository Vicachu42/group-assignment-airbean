<template>
  <div>
      <p>Menu</p>
      <p></p>
  </div>
</template>

<script>
export default {
    name: 'Menu',
    mounted() {
      return this.$store.dispatch('getMenuItems');
    }
}
</script>

<style>

</style>