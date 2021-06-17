<script>
  // Imports
  import DonutChart from '@/components/atoms/DonutChart.svelte'
  import Dropdown from '@/components/atoms/Dropdown.svelte'

  // Internals
  let options = [
    '22:00',
    '23:00',
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
  ]
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
      margin: 0 0.5em;
    }
  }

  @include size-xs {
    div {
      div {
        flex-direction: row;
      }
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
  <DonutChart innerRadius="30" />
  <div>
    <Dropdown name="Tijd" {options} />
    <Dropdown name="Melding" {options} />
  </div>
</div>
