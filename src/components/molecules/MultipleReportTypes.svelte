<script>
  // Props
  export let numberOfReports
  // Imports
  import ReportType from '../atoms/ReportType.svelte'

</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  div {
    display: grid;
    grid-column-gap: 0.5em;
    grid-row-gap: 0.5em;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }

</style>

<div>
  {#each numberOfReports as report}
    <ReportType>{report}</ReportType>
  {/each}
</div>
