<script>
  // Components
  import DateSlider from '@/components/organisms/DateSlider.svelte'
  import NewReportCounter from '@/components/organisms/NewReportCounter.svelte'
  import DonutSection from '@/components/organisms/DonutSection.svelte'
  import GraphSection from '@/components/organisms/GraphSection.svelte'
  import WelcomeMessage from '@/components/organisms/WelcomeMessage.svelte'
  import Title from '@/components/atoms/Title.svelte'
  import ComparedTo from '@/components/organisms/ComparedTo.svelte'
</script>

<style lang="scss">
  // Importing fonts, vars, etc.
  @import 'src/styles/index.scss';

  @include size-m {
    // outer container styling
    section:only-child {
      max-height: 100vh;
      display: grid;
      grid-template-columns: 0.2em 1fr 1fr 1fr 0.2em;
      grid-template-rows: 0.2em 1fr 2fr 3fr 2fr 0.2em;
      grid-column-gap: 2em;
      grid-row-gap: 2em;

      // welcome message + date select
      header {
        grid-column: 2 / 5;
        grid-row: 2;
        align-self: center;
      }

      // large chart
      section:nth-of-type(1) {
        grid-row: 4 / 6;
        grid-column: 2 / 4;
      }

      // pie chart
      section:nth-of-type(2) {
        grid-column: 4;
        grid-row: 3 / 5;
      }

      // small text blocks
      div:first-of-type {
        grid-row: 3;
        grid-column: 2 / 4;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 2em;
      }

      // Small extra block
      div:nth-of-type(2) {
        grid-row: 5;
        grid-column: 4;
        background-color: #FFFFFF;
        border-radius: 15px;
      }
    }
  }
</style>

<section>
  <header>
      <Title>Dashboard</Title>
    <DateSlider />
  </header>


  <section>
    <GraphSection />
  </section>

  <section>
    <DonutSection />
  </section>

  <div>
    <NewReportCounter />
    <ComparedTo />
  </div>

  <div>
    <!--Insert something fancy here-->
  </div>
</section>
