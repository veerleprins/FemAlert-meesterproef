<script>
  // Components
  import Title from '@/components/atoms/Title.svelte'
  import BarChart from '@/components/molecules/BarChart.svelte'
  import Dropdown from '@/components/atoms/Dropdown.svelte'

  // Internals
  let width = 800
  let options = [
    'Totaal',
    'Aanranding',
    'Agressie',
    'Discriminatie',
    'Uitgescholden',
    'Racisme',
    'Anders',
  ]
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';
  section {
    margin: 1em 0em;
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
  <Dropdown {options} name="Melding" />
  <BarChart {width} />
</section>
