<script>
  // Internals
  import { reportData } from '@/stores/dataStore.js'

  // Imports
  import Counter from '../atoms/Counter.svelte'

  // Will be removed once more data is in the database
  const testDates = [
    { date: '11/06/2021' },
    { date: '11/06/2021' },
    { date: '11/06/2021' },
    { date: '04/06/2021' },
    { date: '04/06/2021' },
    { date: '05/06/2021' },
    { date: '28/05/2021' }
  ]

  // Retrieve reports
  let allReports
    reportData.subscribe((value) => {
      allReports = value
    })
  allReports = testDates // TODO: remove

  // DD/MM/YYYY format
  const dateOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  };

  const today = new Date()
  const lastWeek = new Date()
  lastWeek.setDate(today.getDate() - 7)

  const todayFormatted = today.toLocaleDateString('en-GB', dateOptions)
  const lastWeekFormatted = lastWeek.toLocaleDateString('en-GB', dateOptions)

  const reportsToday = allReports.filter((item) => item.date === todayFormatted).length
  const reportsLastWeek = allReports.filter((item) => item.date === lastWeekFormatted).length

  const difference = reportsLastWeek - reportsToday
  const content = difference > 0
    ? `+${difference}`
    : difference
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';
</style>

<Counter isNegative="{difference < 0}" isPositive="{difference > 0}">
  {content}
</Counter>