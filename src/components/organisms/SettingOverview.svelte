<script>
  // Imports
  import SettingsEdit from '../molecules/SettingsEdit.svelte'
  import UserProfile from '../molecules/UserProfile.svelte'
  import SelectLang from '../atoms/SelectLang.svelte'
  import SelectDarkMode from '../atoms/SelectDarkMode.svelte'

  export let userData


  let edit = false

  userData = {
    'name': 'Harold Janssen',
    'email': 'H.Janssen@mail.com',
    'rol': 'Eigenaar',
    'clubName': 'De Eendenkooi',
    'clubStreet': 'Het Kattengat 420',
    'clubCity': 'Amsterdam',
  }
</script>

<style lang="scss">
  // Import fonts, vars, etc.
  @import 'src/styles/index.scss';
  section {
    margin: 0 1.5em 2em 1.5em;
    padding: 1em;
    background-color: $ui-section;
    border-radius: 15px;
    box-shadow: 1px 1px 6px #9a9a9a;
    height: auto;
  }
  section:not(:first-of-type) {
    height: 3em;
    margin: 2em 1.5em;
  }

  @include size-m {
    section,
    section:not(:first-of-type) {
      margin-left: 0;
      margin-right: 0;
    }
  }
</style>


{#if edit === true}
  <section>
    <SettingsEdit />
  </section>
    {:else}
  <section>
    <UserProfile />
  </section>
  {/if}
<section>
  <SelectDarkMode />
</section>
<section>
  <SelectLang />
</section>