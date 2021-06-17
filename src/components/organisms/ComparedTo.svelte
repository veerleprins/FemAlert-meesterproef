<script>
  import Counter from '../atoms/Counter.svelte'
  import Comparer from '../molecules/Comparer.svelte'
  import Title from '../atoms/Title.svelte'

  // Internals
  import { reportData } from '@/stores/dataStore.js'

  // Get all reports
  let allReports
  reportData.subscribe((value) => {
    allReports = value
  })
  // Select the date from the reports
  const allDates = allReports.map((item) => item.date)

  // Get todays date in DD/MM/YYYY format
  let date = new Date()
  let today =
    date.toLocaleDateString('en-US', { day: '2-digit' }) +
    '/' +
    date.toLocaleDateString('en-US', { month: '2-digit' }) +
    '/' +
    date.toLocaleDateString('en-US', { year: 'numeric' }) // 16-Nov-2019

  // Count the number of reports made today
  let todayReports = allDates.filter((item) => item === today).length
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  section {
    background-color: $ui-section;
    margin: 2em 0em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    border-radius: $borderSize;
    height: 100%;
  }

  @include size-m {
    section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      margin: 0;
    }
  }
</style>

<section>
  <Title isSubtitle smallSectionTitle>Hulp nodig</Title>
  <Counter alignCenter>{todayReports} Meldingen</Counter>
  <Comparer />
</section>
