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

  let noto = compareReports(allReports)

</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';
</style>

<Counter isNegative="{noto.difference < 0}" isPositive="{noto.difference > 0}">
  {noto.content}
</Counter>