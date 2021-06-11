<script>
  // Components
  import SingleReport from '@/components/organisms/SingleReport.svelte'
  import Title from '@/components/atoms/Title.svelte'
  import Input from '@/components/atoms/Input.svelte'
  // Internals
  import { reportData } from '@/stores/dataStore.js'
  let data
  reportData.subscribe((value) => {
    data = value
  })
</script>

<style lang="scss">
  // Importing fonts, vars, etc.
  @import 'src/styles/index.scss';
  div {
    header {
      width: 100%;
      margin-bottom: 1.5em;
    }
    section {
      ul {
        margin-top: 1.5em;
      }
    }
    section:nth-of-type(2) {
      display: none;
    }
  }
  @include size-m {
    // Styling for grid
    div {
      max-height: 100vh;
      display: grid;
      grid-template-columns: 0.2em 2fr 1fr 0.2em;
      grid-template-rows: 0.2em 1fr 1fr 4fr 0.2em;
      grid-column-gap: 2em;
      grid-row-gap: 2em;
      header {
        grid-column: 2 / 4;
        grid-row: 2;
        align-self: center;
      }
      section:first-of-type {
        grid-column: 2;
        grid-row: 3;
      }
    }
  }
</style>

<div>
  <header>
    <Title>Alle meldingen</Title>
  </header>
  <section>
    <Input
      type="text"
      name="search"
      placeholder="Zoek melding... (Bijv. “Aanranding”)"
      searchBar
    />
    <ul>
      {#each data as report, index}
        <SingleReport {report} {index} />
      {/each}
    </ul>
  </section>
</div>
