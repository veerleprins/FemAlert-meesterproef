<script>
  // Components
  import Title from '@/components/atoms/Title.svelte'
  import BarChart from '../molecules/BarChart.svelte'

  // Internals
  let width = 800
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';
  section {
    margin: 2em 1.5em;
    padding: 1em;
    background-color: $ui-section;
    border-radius: 15px;
    height: 100%;
  }

  @include size-m {
    section {
      margin: 0;
    }
  }
</style>

<section bind:clientWidth={width}>
  <Title isSubtitle>Aantal meldingen per uur</Title>
  <BarChart {width} />
</section>
