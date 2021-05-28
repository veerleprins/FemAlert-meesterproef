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
    flex-direction: row;

    div{
      display: flex;
      flex-direction: column;
    }
  }
</style>

<div>
  <DonutChart innerRadius="40"/>
  <div>
    <Dropdown name="Tijd" />
    <Dropdown name="Melding" />
  </div>
</div>
