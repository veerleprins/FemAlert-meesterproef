<script>
  // Components
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    background-color: hotpink;
  }
  main {
    width: 100%;
  }
</style>

<header />

<main>
  <slot />
</main>

<footer />
