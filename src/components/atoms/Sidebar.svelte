<script>
  // Components
  import List from '@/components/atoms/List.svelte'
  // Props
  export let open = false
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  aside {
    right: -100%;
    transition: right 0.3s ease-in-out;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $ui-white;
    padding: 5em 1em 1em 1em;
    z-index: 2;
    nav {
      display: flex;
      flex-direction: column;
      ul {
        height: 100%;
      }
    }
  }

  .open {
    right: 0%;
  }
</style>

<aside class:open>
  <nav>
    <ul>
      <List isNav href="/">Dashboard</List>
      <List isNav href="">Kaart</List>
      <List isNav href="/meldingen">Alle meldingen</List>
      <List isNav href="/instellingen">Instellingen</List>
      <List isNav href="">Uitloggen</List>
    </ul>
  </nav>
</aside>
