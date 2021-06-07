<script>
  // Components
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: $standard-font;
  }

  :global(body) {
    background-color: $ui-background-color;
    overflow-x: hidden;
    font-size: 14px;
  }

  @include size-xs {
    :global(body) {
      font-size: 16px;
    }
  }

  @include size-xl {
    :global(body) {
      font-size: 18px;
    }
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
