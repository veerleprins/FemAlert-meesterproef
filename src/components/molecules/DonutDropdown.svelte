<script>
  // Imports
  import DonutChart from '../atoms/DonutChart.svelte'
  import Dropdown from '../atoms/Dropdown.svelte'
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  div {
    padding-top: 1em;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: column;
    }
  }

  @include size-xs {
    div {
      flex-direction: row;
    }
  }

  @include size-s {
    div {
      justify-content: space-around;
    }
  }

  @include size-m {
    div {
      div {
        display: none;
      }
    }
  }
</style>

<div>
  <DonutChart innerRadius="30"/>
  <div>
    <Dropdown name="Tijd" />
    <Dropdown name="Melding" />
  </div>
</div>