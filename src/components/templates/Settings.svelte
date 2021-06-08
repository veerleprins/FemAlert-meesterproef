<script>
  // Components
  import {onMount} from 'svelte'
  import Nav from '../molecules/Nav.svelte'
  import WelcomeMessage from '../organisms/WelcomeMessage.svelte'
  import SettingOverview from '../organisms/SettingOverview.svelte'

  let data = []

  onMount(async () => {
    const res = await fetch(
      `https://my.api.mockaroo.com/fem_alert_v5?key=6cbcdbc0`
    )
    data = await res.json()
  })
</script>

<style lang="scss">
  // Importing fonts, vars, etc.
  @import 'src/styles/index.scss';

  section:nth-of-type(3) {
    display: block;
  }

  @include size-m {
    // outer container styling
    div {
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

      // large section
      section:nth-of-type(1) {
        display: block;
        grid-column: 2 / 4;
        grid-row: 3;
      }
    }
  }

</style>

<div>
  <header>
    <WelcomeMessage />
  </header>

  <section>
    <SettingOverview />
  </section>
</div>