<script>
  import Counter from '../atoms/Counter.svelte'

</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  section {
    margin: 1em;
    height: 5em;
    display: flex;
    flex-direction: column;
    align-items: center;

      p {
        align-self: flex-start;
        font-weight: 100;
      }
  }




</style>

<section>
  <p>Totaal aantal meldingen </p>
  <Counter>6</Counter>
</section>
