<script>
  // Imports
  // import List from '../atoms/List.svelte'
  import Hamburger from '@/components/atoms/Hamburger.svelte'

  export let sidebar = false
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  nav {
    display: flex;
  }
</style>

<nav>
  <Hamburger bind:open={sidebar} />
</nav>
