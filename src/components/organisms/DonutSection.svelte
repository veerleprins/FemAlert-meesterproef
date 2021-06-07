<script>
  import Title from '../atoms/Title.svelte'
  import Legend from '../atoms/Legend.svelte'
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
    }

    ul {
      margin-top: 1em;
      list-style: square;
    }
  }

  @include size-m {
    section {
      margin: 0;
      display: flex;
      flex-direction: column;

      div {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
      }
    }
  }

</style>

<section>
  <Title isSubtitle>Soort meldingen</Title>
  <div>
    <DonutDropdown />
    <Legend />
  </div>
</section>