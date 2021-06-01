<script>
  import Title from '../atoms/Title.svelte'
  import DonutDropdown from '../molecules/DonutDropdown.svelte'
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  section {
    margin: 1.5em;
  }

  div {
    padding-top: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  ul {
    margin-top: 1em;
    list-style: square;
  }
</style>

<section>
  <Title isSubtitle>Soort meldingen</Title>
  <DonutDropdown />
  <div>
    <ul>
      <li>Agressie</li>
      <li>Aanranding</li>
      <li>Racisme</li>
    </ul>
    <ul>
      <li>Discriminatie</li>
      <li>Uitschelden</li>
      <li>Anders</li>
    </ul>
  </div>
</section>
