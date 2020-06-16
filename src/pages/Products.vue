<template>
    <Layout>
        <main class="products">
            <div>
                <h1>All Products</h1>
                <section>
                    <g-link v-for="product in data.products" v-bind:key="product.slug" :to="data.productRoute + product.slug + '/'">
                        <g-image :src="'/img/' + product.image" />
                        <h3 v-html="product.name" />
                    </g-link>
                </section>
            </div>
        </main>
    </Layout>
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

<style lang="scss">
.products {
    margin-bottom: 3rem;

    section {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0;
        margin-top: 2rem;

        & > a {
            display: block;
            min-height: 12.5rem;
            text-align: center;
            padding: 0 5rem;
            color: #222;
            text-decoration: none;
            font-size: 1.4rem;
            margin: 1rem 0;
            transition: 600ms ease;
            opacity: .95;

            &:hover {
                transform: scale(1.07515, 1.075);
                opacity: 1;
                transition: 350ms;
            }

            img {
                width: 100%;
            }

            h3 {
                margin-top: 1rem;
            }
        }
    }
}
</style>