<script>
  import Title from '../atoms/Title.svelte'
  import DonutDropdown from '../molecules/DonutDropdown.svelte'
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

    div {
      padding: 1em 0 0 1em;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    ul {
      margin-top: 1em;
      list-style: square;
    }
  }

  @include size-m {
    section {
      margin: 0;
    }
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