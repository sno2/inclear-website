<template>
    <Layout>
        <div class="contact">
            <div>

            </div>
            <main>
                <div>
                    <h1>Connect with Us</h1>
                    <section>
                        <div>
                            <label>Mailing Address</label>
                            <a v-html="data.contacts.address" />
                        </div>
                        <div>
                            <label>Email Address</label>
                            <a :href="'mailto:'+data.contacts.email" v-html="data.contacts.email" />
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <a :href="'tel:'+data.contacts.phone" v-html="data.contacts.phone" />
                        </div>
                    </section>
                </div>
            </main>
        </div>
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
.contact {
    display: grid;
    grid-gap: 5%;
    grid-template-columns: repeat(2, 1fr);

    & > div {
        background-image: url(https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80);
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 100%;
    }

    main {
        max-height: 50vh;
        text-align: right;

        section {
            display: grid;
            grid-template-rows: repeat(3, 1fr);
        }

        section div {
            display: flex;
            flex-direction: column;
            margin: 0;
            padding: 1rem 0;

            label {
                font-weight: 600;
                font-size: 1.1rem;
            }

            a {
                padding-top: .7rem;
                color: inherit;
                text-decoration: none;
            }
        }
    }
}
</style>