<script>
  // Components
  import Button from '../atoms/Button.svelte'
</script>

<style lang="scss">
  // Importing fonts, vars, etc.
  @import 'src/styles/index.scss';
  h1 {
    margin: 10em;
  }
</style>

<section>
  <h1>FemAlert</h1>
  <Button text="Send" />
  <Button text="Save" />
</section>
