<template>
  <Layout>
    <div class="home">
      <main>
        <div>
          <h1>Story</h1>
          <p>Established in 1972, Merland Furniture has been part of over 10 million homes with their high-quality furniture, office, and decor products.</p>
        </div>
      </main>
      <div />
    </div>
  </Layout>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.home {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 65% auto;

  & > div {
    background-image: url(https://images.unsplash.com/photo-1496180727794-817822f65950?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80);
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
  }
}
</style>