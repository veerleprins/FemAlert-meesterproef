<script>
  // Imports
  import Counter from '../atoms/Counter.svelte'

  // Will be removed once more data is in the database
  const testDates = [
    '11/06/2021',
    '11/06/2021',
    '11/06/2021',
    '04/06/2021',
    '04/06/2021',
    '04/06/2021',
    '28/5/2021'
  ]

  // Document the number of days each month has
  const monthDays = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  }

  // Internals
  import { reportData } from '@/stores/dataStore.js'

  // Select the date from the reports
  let allReports
  reportData.subscribe((value) => {
    allReports = value
  })
  const allDates = allReports.map((item) => item.date)

  // Get todays date in DD/MM/YYYY format
  let date  = new Date()
  let today = date.toLocaleDateString("en-US", { day: 'numeric' })+ "/"+ date.toLocaleDateString("en-US", { month: 'numeric' })+ "/" + date.toLocaleDateString("en-US", { year: 'numeric' }) // 16-Nov-2019

  let testDay = '4/6/2021'

  // Count the number of reports made today
  let todayReports = testDates.filter((item) => item === today).length

  //replace testDay with numberDateArray
  // Calculate the date from last week
  const lastWeekDate = date.setDate(date.getDate() - 7)
  const formattedDate = lastWeekDate.getDate()+'/'+ lastWeekDate.getMonth()+'/'+ lastWeekDate.getYear()


  console.log('last week date ' + formattedDate)
  let lastWeekReport = testDates.filter((item) => item === formattedDate).length
  console.log(lastWeekReport)
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';
</style>

<Counter>{todayReports}</Counter>