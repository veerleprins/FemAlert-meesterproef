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
    background-color: $ui-background-color;
    padding: 5em 1em 1em 1em;
    nav {
      display: flex;
      flex-direction: column;
    }
  }

  .open {
    right: 0%;
  }
</style>

<aside class:open>
  <nav class="p-12 text-xl">
    <ul>
      <List href="/">Dashboard</List>
      <List href="">Kaart</List>
      <List href="/meldingen">Alle meldingen</List>
      <List href="/instellingen">Instellingen</List>
      <List href="">Uitloggen</List>
    </ul>
  </nav>
</aside>
