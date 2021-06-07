<script>
  import Counter from '../atoms/Counter.svelte'
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  section {
    margin: 2em 1.5em;
    padding: 1em;
    background-color: $ui-section;
    border-radius: 15px;
    box-shadow: 1px 1px 6px #9a9a9a;
    height: 6em;
    display: flex;
    flex-direction: column;
    align-items: center;

      p {
        align-self: flex-start;
        font-weight: 100;
        margin-bottom: 1em;
      }
  }

   @include size-m {
     section {
       height: 8em;
       margin: 0 ;
     }
   }
</style>

<section>
  <p>Totaal aantal meldingen</p>
  <Counter>6</Counter>
</section>