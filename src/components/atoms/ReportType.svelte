<script>
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  p {
    font-size: 0.9em;
    background-color: $ui-accent-grey;
    padding: 0.25em;
    border-radius: 3px;
    min-width: 6em;
    text-align: center;
    color: $ui-black;
  }

</style>

<p>
  <slot />
</p>
