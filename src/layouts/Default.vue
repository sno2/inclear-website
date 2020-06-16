<template>
  <div>
    <Header />
    <slot />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;700;800;900&display=swap');

html, body {
  width: calc(100% - 3rem);
  height: 100vh;
  margin: 0 auto;
  padding: 0;
  font-family: 'Jost', sans-serif;

  body {
    height: calc(100vh - 2.5rem);
    padding-top: 2.5rem;
  }
}

main {
  min-height: 56vh;
  width: calc(100% - .8rem);
  border: inset #000 .4rem;

  div {
    padding: 1.5rem;
    padding-left: 5rem;

    h1 {
      margin: 0;
      text-transform: uppercase;
      font-size: 3rem;
    }

    p {
      margin-top: 1rem;
      max-width: 50%;
      font-size: 1.1rem;
    }
  }
}
</style>