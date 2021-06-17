<script>
  // Components
  import WelcomeMessage from '@/components/organisms/WelcomeMessage.svelte'
  import SettingOverview from '@/components/organisms/SettingOverview.svelte'
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
