<script>
  // Imports
  import List from '../atoms/List.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  nav {
    display: none;
  }

  @include size-m {
    nav {
      display: flex;
      background-color: #000000;
      color: #FFFFFF;
      border-radius: 0 40px 40px 0;
      justify-content: center;
      align-items: center;
      height: 100%;

      ul {
        height: 35vh;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
</style>

<nav>
  <ul>
    <List href="">Dashboard</List>
    <List href="">Kaart</List>
    <List href="">Alle meldingen</List>
    <List href="">Instellingen</List>
    <List href="">Uitloggen</List>
  </ul>
</nav>
