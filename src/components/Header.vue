<template>
    <header>
        <div>
            <h2>Title</h2>
        </div>
        <nav v-if="data">
            <g-link to="/">Home</g-link>
            <g-link to="/products/">Products</g-link>
            <g-link v-for="product in data.products.slice(0, 4)" v-bind:key="product.slug" :to="data['productRoute'] + product.slug + '/'">{{ product.name }}</g-link>
            <g-link to="/contact/">Contact</g-link>
        </nav>
    </header>
</template>

<script>
let data = require('~/assets/data/data.json')

export default {
  data() {
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  & > div {
    display: block;
    width: calc(100% - .8rem);
    border: inset #000 .4rem;

    h2 {
      margin: 0;
      font-size: 6rem;
      padding: .5rem 0;
      padding-left: 5rem;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: .6px;
    }
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    
    a {
      padding: 1rem 1.25rem;
      text-transform: uppercase;
      color: inherit;
      font-weight: 700;
      font-size: 1.5rem;
      text-decoration: none;
    }
  }
}
</style>