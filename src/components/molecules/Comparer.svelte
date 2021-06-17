<script>
  // Internals
  import { reportData } from '@/stores/dataStore.js'
  import { compareReports } from '@/utils/compareDates.js'

  // Imports
  import Counter from '../atoms/Counter.svelte'

  // Retrieve reports
  let allReports
    reportData.subscribe((value) => {
      allReports = value
    })

  let data = compareReports(allReports)

</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';
  div {
    display: flex;
    align-items: center;
  }
</style>

<div>
  <Counter isNegative="{data.difference < 0}" isPositive="{data.difference > 0}">
    <span>{data.content}</span>
  </Counter>
  vergeleken met vorige week
</div>
