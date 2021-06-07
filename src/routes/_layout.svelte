<script>
  // Components
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'OpenSans-Regular';
  }

  :global(body) {
    background-color: #e8e8e8;
    overflow-x: hidden;
  }

  main {
    width: 100%;
    padding: 1em;
  }
</style>

<header />

<main>
  <slot />
</main>

<footer />
