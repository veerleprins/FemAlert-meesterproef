<script>
  import Button from '../atoms/Button.svelte'
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';
  section {
    margin: 2em 1.5em;
    padding: 1em 2em;
    background-color: $ui-section;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #9a9a9a;

    section {
      box-shadow: none;
      display: flex;
      margin: 0;
      padding: 0;
    }
  }
</style>

<section>
  <section>
    <Button>Aanranding</Button>
    <Button>Agressie</Button>
  </section>

  <p>Was iemand die mij aanrandde tijdens het dansen. Hij bleef maar doorgaan ondanks dat ik al een aantal keer zei dat hij moest stoppen. Lees meer...</p>

</section>