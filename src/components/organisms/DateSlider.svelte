<script>
  import Button from '../atoms/Button.svelte'
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    grid-column-gap: 0.5em;
    overflow-x: scroll;
    margin: 1.5em 0 1.5em 1.5em;
  }
</style>

<section>
  <Button buttonTag>Vandaag</Button>
  <Button buttonTag>Gister</Button>
  <Button buttonTag>Deze week</Button>
  <Button buttonTag=>Deze maand</Button>
</section>