<script>
  // Components
  import SingleReport from '@/components/organisms/SingleReport.svelte'
  import Title from '@/components/atoms/Title.svelte'
  import Input from '@/components/atoms/Input.svelte'
  import ClickedReport from '@/components/molecules/ClickedReport.svelte'

  // Internals
  import { reportData } from '@/stores/dataStore.js'
  import { singleReport } from '@/stores/reportStore.js'

  // Data
  let data
  reportData.subscribe((value) => {
    data = value
  })

  singleReport.set(data[0])
</script>

<style lang="scss">
  // Importing fonts, vars, etc.
  @import 'src/styles/index.scss';

  div {
    header {
      width: 100%;
      margin-bottom: 1.5em;
    }

    div {
      display: flex;
      flex-direction: column;
      section {
        ul {
          margin-top: 1.5em;
        }
      }
      section:nth-of-type(2) {
        display: none;
      }
    }
  }

  @include size-m {
    // Styling for grid
    div {
      max-height: 100vh;
      // padding-left: 1em;
      header {
        height: auto;
      }
      div {
        flex-direction: row;
        gap: 1em;
        section:first-of-type {
          background-color: #f3f3f3;
          border-radius: $borderSize;
          height: 80vh;
          width: 50%;
          padding: 1em;
          overflow-y: scroll;
          ul {
            position: relative;
          }
        }
        section:nth-of-type(2) {
          display: block;
          position: relative;
          background-color: $ui-section;
          border-radius: $borderSize;
          padding: 1em;
          height: 80vh;
          width: 50%;
        }
      }
    }
  }
</style>

<div>
  <header>
    <Title>Alle meldingen</Title>
  </header>

  <div>
    <section>
      <Input
        type="text"
        name="search"
        placeholder="Zoek melding...  (Bijv. “Aanranding”)"
        searchBar
      />
      <ul>
        {#each data as report, index}
          <SingleReport {report} {index} />
        {/each}
      </ul>
    </section>
    <section>
      <ClickedReport />
    </section>
  </div>
</div>
