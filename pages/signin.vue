<template>
  <div class="container">
    <button class="button is-primary is-rounded" @click="signin">
      ログイン
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    signin() {
      console.log('signin')
      this.$store.dispatch('signin')
    }
  }
}
</script>

<style>
  .container {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    min-height: 100vh;
    text-align: center;
  }
</style>
