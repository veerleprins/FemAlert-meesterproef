<script>
  // Imports
  import Counter from '../atoms/Counter.svelte'

  // Will be removed once more data is in the database
  const testDates = [
    '11/06/2021',
    '11/06/2021',
    '11/06/2021',
    '04/06/2021',
    '28/06/2021'
  ]

  // Document the number of days each month has
  const monthDays = {
    '01': 31,
    '02': 28,
    '03': 31,
    '04': 30,
    '05': 31,
    '06': 30,
    '07': 31,
    '08': 31,
    '09': 30,
    '10': 31,
    '11': 30,
    '12': 31
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
  let today = date.toLocaleDateString("en-US", { day: '2-digit' })+ "/"+ date.toLocaleDateString("en-US", { month: '2-digit' })+ "/" + date.toLocaleDateString("en-US", { year: 'numeric' }) // 16-Nov-2019

  // Count the number of reports made today
  let todayReports = testDates.filter((item) => item === today).length

  // Turn todays date into an array and make the numbers from strings to integers
  let numbereDateArray = today
        .split('/')
        .map((item) => parseInt(item, 10))

  let lastWeeksDate = (() => {
    if (numbereDateArray[1] - 7 >= 1 ) {
      return new Array(numbereDateArray[0], numbereDateArray[1] - 7, numbereDateArray[2])
    }
  })
  console.log(lastWeeksDate())
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';
</style>

<Counter>{todayReports}</Counter>