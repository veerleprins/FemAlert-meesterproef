<script>
  // Components
  import DateSlider from '../organisms/DateSlider.svelte'
  import NewReportCounter from '../organisms/NewReportCounter.svelte'
  import DonutSection from '../organisms/DonutSection.svelte'
  import LargeChartSection from '../organisms/LargeChartSection.svelte'
  import WelcomeMessage from '../organisms/WelcomeMessage.svelte'
</script>

<style lang="scss">
  // Importing fonts, vars, etc.
  @import 'src/styles/index.scss';

  section:nth-of-type(3) {
    display: block;
  }

  @include size-m {
    // outer container styling
    section:only-child {
      max-height: 100vh;
      display: grid;
      grid-template-columns: 0.2em 2fr 2fr 0.2em;
      grid-template-rows: 0.2em 1fr 5fr 4fr 0.2em;
      grid-column-gap: 2em;
      grid-row-gap: 2em;

      // welcome message
      header {
        grid-column: 2 / 4;
        grid-row: 2;
        align-self: center;
      }

      // date slider
      section:nth-of-type(1) {
        display: none;
      }

      // large chart
      section:nth-of-type(2) {
        display: block;
        grid-column: 2 / 4;
        grid-row: 3;
      }

      // pie chart
      section:nth-of-type(3) {
        grid-column: 2;
        grid-row: 4;
      }

      // small text blocks
      section:nth-of-type(4) {
        grid-column: 3;
        grid-row: 4;
        display: grid;
        grid-row-gap: 2em;
      }
    }
  }
</style>

<section>
  <header>
    <WelcomeMessage />
  </header>

  <section>
    <DateSlider />
  </section>

  <section>
    <LargeChartSection />
  </section>

  <section>
    <DonutSection />
  </section>

  <section>
    <NewReportCounter />
    <NewReportCounter />
  </section>
</section>
