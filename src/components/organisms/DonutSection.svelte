<script>
  import Legend from '../atoms/Legend.svelte'
  import DonutDropdown from '../molecules/DonutDropdown.svelte'
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  section {
    padding-top: 1em;
    margin: 2em 1.5em;
    background-color: $ui-section;
    border-radius: 15px;
    box-shadow: 1px 1px 6px #9a9a9a;
    p {
      margin-left: 1em;
      font-weight: 100;
    }
  }

  @include size-m {
    section {
      margin: 0;
      display: flex;
      flex-direction: column;

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
</style>

<section>
  <p>Soort meldingen</p>
  <div>
    <DonutDropdown />
    <Legend />
  </div>
</section>