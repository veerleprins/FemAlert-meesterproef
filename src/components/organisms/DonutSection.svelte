<script>
  import Legend from '../atoms/Legend.svelte'
  import Title from '../atoms/Title.svelte'
  import DonutDropdown from '../molecules/DonutDropdown.svelte'
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  section {
    padding-top: 1em;
    margin: 2em 0em;
    background-color: $ui-section;
    border-radius: 15px;
  }

  @include size-m {
    section {
      margin: 0;
      display: flex;
      flex-direction: column;
      height: 100%;

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
</style>

<section>
  <Title isSubtitle sectionTitle>Soort meldingen</Title>
  <div>
    <DonutDropdown />
    <Legend />
  </div>
</section>
