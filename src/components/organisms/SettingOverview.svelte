<script>
  // Imports
  import SettingsEdit from '../molecules/SettingsEdit.svelte'
  import UserProfile from '../molecules/UserProfile.svelte'
  import SelectLang from '../atoms/SelectLang.svelte'
  import SelectDarkMode from '../atoms/SelectDarkMode.svelte'

  export let userData

  //switch between editing and static mode
  let edit = true

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

<section>
{#if edit === true}
  <SettingsEdit />
  {:else}
      <UserProfile />
{/if}
</section>
<section>
  <SelectDarkMode />
</section>
<section>
  <SelectLang />
</section>