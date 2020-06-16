<template>
    <Layout>
        <div class="product">
            <main >
                <div>
                    <h1 v-html="$context.product.name" />
                    <p v-html="$context.product.description" />
                    <g-image :src="'/img/' + $context.product.image" />
                </div>
            </main>
            <div />
        </div>
    </Layout>
</template>

<style lang="scss">
.product {
    margin-bottom: 2rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 65% auto;

    & > div {
        background-image: url(https://images.unsplash.com/photo-1531471689044-dd3ca86632e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 100%;
    }

    main {

        div {

            h1 {
                text-transform: none;
            }

            p {
                color: #111;
            }

            img {
                max-width: 30%;
            }
        }
    }

}
</style>