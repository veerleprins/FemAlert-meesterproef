<script>
  import DonutChart from '../atoms/DonutChart.svelte'
  import Title from '../atoms/Title.svelte'
  import SubTitle from '../atoms/SubTitle.svelte'
  import Dropdown from '../atoms/Dropdown.svelte'
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';

  section {
    margin: 1.5em;
  }

  div {
    padding-top: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
    }
  }

  ul {
    margin-top: 1em;
    list-style: square;
  }

</style>

<section>
  <SubTitle>Soort meldingen</SubTitle>
  <div>
    <DonutChart innerRadius="40"/>
    <div>
      <Dropdown name="Tijd" />
      <Dropdown name="Melding" />
    </div>
  </div>
  <div>
    <ul>
      <li>Agressie</li>
      <li>Aanranding</li>
      <li>Racisme</li>
    </ul>
    <ul>
      <li>Discriminatie</li>
      <li>Uitschelden</li>
      <li>Anders</li>
    </ul>
  </div>


</section>